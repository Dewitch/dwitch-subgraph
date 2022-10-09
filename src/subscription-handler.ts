import {
  ChangedController as ChangedControllerEvent,
  ChangedStreamHost as ChangedStreamHostEvent,
  CreatedSubscriptionFlow as CreatedSubscriptionFlowEvent,
  DeletedSubscriptionFlow as DeletedSubscriptionFlowEvent,
  PauseCall as PauseEvent,
} from "../generated/SubscriptionHandler/SubscriptionHandler";
import {
  AggregatedSubscriptionFlow,
  DappStatus,
  Stream,
  Streamer,
  SubscriptionFlow,
} from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

// // // // // // // // // // // // // // // // // // // //
// STATE CHANGING
// // // // // // // // // // // // // // // // // // // //

function _getStreamId(
  fromAddress: string,
  toAddress: string,
  token: string
): string {
  return (
    fromAddress.toString() + "-" + toAddress.toString() + "-" + token.toString()
  );
}

export function handleCreatedSubscriptionFlow(
  event: CreatedSubscriptionFlowEvent
): void {
  // Set up single flow
  let subscriptionFlowEntity = SubscriptionFlow.load(
    _getStreamId(
      event.params.fromAddress.toString(),
      event.params.toAddress.toString(),
      event.params.token.toString()
    )
  );

  if (subscriptionFlowEntity == null) {
    subscriptionFlowEntity = new SubscriptionFlow(
      _getStreamId(
        event.params.fromAddress.toString(),
        event.params.toAddress.toString(),
        event.params.token.toString()
      )
    );
    subscriptionFlowEntity.sourceAddress = event.params.fromAddress;
    subscriptionFlowEntity.destinationAddress = event.params.toAddress;
    subscriptionFlowEntity.token = event.params.token;
  }

  // Update the flow
  subscriptionFlowEntity.flowRate = event.params.flowRate;

  subscriptionFlowEntity.save();

  // Set up overall flow
  const aggregateFlowId =
    event.params.toAddress.toString() + "-" + event.params.token.toString();
  let aggregateFlowEntity = AggregatedSubscriptionFlow.load(aggregateFlowId);

  if (aggregateFlowEntity == null) {
    aggregateFlowEntity = new AggregatedSubscriptionFlow(aggregateFlowId);
    aggregateFlowEntity.destinationAddress = event.params.toAddress;
    aggregateFlowEntity.token = event.params.token;
    aggregateFlowEntity.totalFlowRate = event.params.flowRate;
  } else {
    aggregateFlowEntity.totalFlowRate = aggregateFlowEntity.totalFlowRate.plus(
      event.params.flowRate
    );
  }

  aggregateFlowEntity.save();
}

export function handleDeletedSubscriptionFlow(
  event: DeletedSubscriptionFlowEvent
): void {
  // (address,indexed address,indexed address,indexed address)
  const streamFlowId = _getStreamId(
    event.params.fromAddress.toString(),
    event.params.toAddress.toString(),
    event.params.token.toString()
  );

  let subscriptionFlowEntity = SubscriptionFlow.load(streamFlowId);

  if (subscriptionFlowEntity == null) {
    subscriptionFlowEntity = new SubscriptionFlow(streamFlowId);
  }

  // Set up overall flow
  const aggregateFlowId =
    event.params.toAddress.toString() + "-" + event.params.token.toString();
  let aggregateFlowEntity = AggregatedSubscriptionFlow.load(aggregateFlowId);

  if (aggregateFlowEntity == null) {
    aggregateFlowEntity = new AggregatedSubscriptionFlow(aggregateFlowId);
    aggregateFlowEntity.totalFlowRate = BigInt.zero();
  } else {
    // Deduct from the total flow
    aggregateFlowEntity.totalFlowRate = aggregateFlowEntity.totalFlowRate.minus(
      subscriptionFlowEntity.flowRate
    );
  }

  aggregateFlowEntity.save();

  subscriptionFlowEntity.flowRate = BigInt.zero();
  subscriptionFlowEntity.save();
}

// // // // // // // // // // // // // // // // // // // //
// GENERAL
// // // // // // // // // // // // // // // // // // // //
export function handleChangedController(event: ChangedControllerEvent): void {
  // (indexed address,indexed address,indexed address)
}

export function handleChangedStreamHost(event: ChangedStreamHostEvent): void {
  // (indexed address,indexed address,indexed address)
}
