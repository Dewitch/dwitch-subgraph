import { BigInt } from "@graphprotocol/graph-ts";
import {
  UpdatedStreamToken as UpdatedStreamTokenEvent,
  UpdatedSuperTokenFactory as UpdatedSuperTokenFactoryEvent,
  UpdatedSubscriptionHandler as UpdatedSubscriptionHandlerEvent,
  RegisteredStreamer as RegisteredStreamerEvent,
  StreamStarted as StreamStartedEvent,
  StreamEnded as StreamEndedEvent,
  StartedWatchingStream as StartedWatchingStreamEvent,
  StoppedWatchingStream as StoppedWatchingStreamEvent,
} from "../generated/StreamController/StreamController";
import {
  AggregatedSubscriptionFlow,
  DappStatus,
  Stream,
  Streamer,
  SubscriptionFlow,
} from "../generated/schema";

// // // // // // // // // // // // // // // // // // // //
// STATE CHANGING
// // // // // // // // // // // // // // // // // // // //

export function handleRegisteredStreamer(event: RegisteredStreamerEvent): void {
  // (indexed address,indexed address,indexed string,string)
  let streamerEntity = Streamer.load(event.params.streamerAddress.toString());

  if (streamerEntity == null) {
    streamerEntity = new Streamer(event.params.streamerAddress.toString());
  }

  streamerEntity.streamerAddress = event.params.streamerAddress;
  streamerEntity.socialTokenAddress = event.params.streamerSocialTokenAddress;
  streamerEntity.streamerName = event.params.streamerName;

  streamerEntity.save();
}

export function handleStreamStarted(event: StreamStartedEvent): void {
  // (indexed address,indexed uint256,indexed int96)
  let streamEntity = Stream.load(event.params.streamerAddress.toString());

  if (streamEntity == null) {
    streamEntity = new Stream(event.params.streamerAddress.toString());
    streamEntity.streamerAddress = event.params.streamerAddress;
  }

  streamEntity.flowRateCost = event.params.perSecondStreamRate;
  streamEntity.isActive = true;

  streamEntity.save();
}

export function handleStreamEnded(event: StreamEndedEvent): void {
  // (indexed address,indexed uint256)
  let streamEntity = Stream.load(event.params.streamerAddress.toString());

  if (streamEntity == null) {
    streamEntity = new Stream(event.params.streamerAddress.toString());
    streamEntity.streamerAddress = event.params.streamerAddress;
  }

  streamEntity.flowRateCost = BigInt.zero();
  streamEntity.isActive = false;

  streamEntity.save();
}

export function handleStartedWatchingStream(
  event: StartedWatchingStreamEvent
): void {
  // (indexed address,indexed address)
}

export function handleStoppedWatchingStream(
  event: StoppedWatchingStreamEvent
): void {
  // (indexed address,indexed address)
}

// // // // // // // // // // // // // // // // // // // //
// GENERAL
// // // // // // // // // // // // // // // // // // // //

export function handleUpdatedStreamToken(event: UpdatedStreamTokenEvent): void {
  // (indexed address,indexed address)
}

export function handleUpdatedSuperTokenFactory(
  event: UpdatedSuperTokenFactoryEvent
): void {}

export function handleUpdatedSubscriptionHandler(
  event: UpdatedSubscriptionHandlerEvent
): void {
  // (indexed address,indexed address)
}
