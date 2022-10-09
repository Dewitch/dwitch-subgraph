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
  ActiveFlow,
  AggregatedSubscriptionFlow,
  DappStatus,
  Stream,
  Streamer,
} from "../generated/schema";

// // // // // // // // // // // // // // // // // // // //
// STATE CHANGING
// // // // // // // // // // // // // // // // // // // //

export function handleRegisteredStreamer(event: RegisteredStreamerEvent): void {
  // (indexed address,indexed address,indexed string,string)
}

export function handleStreamStarted(event: StreamStartedEvent): void {
  // (indexed address,indexed uint256,indexed int96)
}

export function handleStreamEnded(event: StreamEndedEvent): void {
  // (indexed address,indexed uint256)
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
