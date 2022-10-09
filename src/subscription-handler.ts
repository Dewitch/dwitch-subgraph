import {
  ChangedController as ChangedControllerEvent,
  ChangedStreamHost as ChangedStreamHostEvent,
  CreatedSubscriptionFlow as CreatedSubscriptionFlowEvent,
  DeletedSubscriptionFlow as DeletedSubscriptionFlowEvent,
  PauseCall as PauseEvent,
} from "../generated/SubscriptionHandler/SubscriptionHandler";
import {
  ActiveFlow,
  AggregatedSubscriptionFlow,
  DappStatus,
  Stream,
  Streamer,
} from "../generated/schema";

// // // // // // // // // // // // // // // // // // // //
// STATE CHANGING
// // // // // // // // // // // // // // // // // // // //
export function handleCreatedSubscriptionFlow(
  event: CreatedSubscriptionFlowEvent
): void {
  // (address,indexed address,indexed address,indexed address,int96)
}

export function handleDeletedSubscriptionFlow(
  event: DeletedSubscriptionFlowEvent
): void {
  // (address,indexed address,indexed address,indexed address)
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
