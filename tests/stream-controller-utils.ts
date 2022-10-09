import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  Paused,
  RegisteredStreamer,
  StartedWatchingStream,
  StoppedWatchingStream,
  StreamEnded,
  StreamStarted,
  Unpaused,
  UpdatedStreamToken,
  UpdatedSubscriptionHandler
} from "../generated/StreamController/StreamController"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRegisteredStreamerEvent(
  streamerAddress: Address,
  streamerNameHash: string,
  streamerName: string
): RegisteredStreamer {
  let registeredStreamerEvent = changetype<RegisteredStreamer>(newMockEvent())

  registeredStreamerEvent.parameters = new Array()

  registeredStreamerEvent.parameters.push(
    new ethereum.EventParam(
      "streamerAddress",
      ethereum.Value.fromAddress(streamerAddress)
    )
  )
  registeredStreamerEvent.parameters.push(
    new ethereum.EventParam(
      "streamerNameHash",
      ethereum.Value.fromString(streamerNameHash)
    )
  )
  registeredStreamerEvent.parameters.push(
    new ethereum.EventParam(
      "streamerName",
      ethereum.Value.fromString(streamerName)
    )
  )

  return registeredStreamerEvent
}

export function createStartedWatchingStreamEvent(
  streamerAddress: Address,
  watcherAddress: Address
): StartedWatchingStream {
  let startedWatchingStreamEvent = changetype<StartedWatchingStream>(
    newMockEvent()
  )

  startedWatchingStreamEvent.parameters = new Array()

  startedWatchingStreamEvent.parameters.push(
    new ethereum.EventParam(
      "streamerAddress",
      ethereum.Value.fromAddress(streamerAddress)
    )
  )
  startedWatchingStreamEvent.parameters.push(
    new ethereum.EventParam(
      "watcherAddress",
      ethereum.Value.fromAddress(watcherAddress)
    )
  )

  return startedWatchingStreamEvent
}

export function createStoppedWatchingStreamEvent(
  streamerAddress: Address,
  watcherAddress: Address
): StoppedWatchingStream {
  let stoppedWatchingStreamEvent = changetype<StoppedWatchingStream>(
    newMockEvent()
  )

  stoppedWatchingStreamEvent.parameters = new Array()

  stoppedWatchingStreamEvent.parameters.push(
    new ethereum.EventParam(
      "streamerAddress",
      ethereum.Value.fromAddress(streamerAddress)
    )
  )
  stoppedWatchingStreamEvent.parameters.push(
    new ethereum.EventParam(
      "watcherAddress",
      ethereum.Value.fromAddress(watcherAddress)
    )
  )

  return stoppedWatchingStreamEvent
}

export function createStreamEndedEvent(
  streamerAddress: Address,
  numberOfWatchers: BigInt
): StreamEnded {
  let streamEndedEvent = changetype<StreamEnded>(newMockEvent())

  streamEndedEvent.parameters = new Array()

  streamEndedEvent.parameters.push(
    new ethereum.EventParam(
      "streamerAddress",
      ethereum.Value.fromAddress(streamerAddress)
    )
  )
  streamEndedEvent.parameters.push(
    new ethereum.EventParam(
      "numberOfWatchers",
      ethereum.Value.fromUnsignedBigInt(numberOfWatchers)
    )
  )

  return streamEndedEvent
}

export function createStreamStartedEvent(
  streamerAddress: Address,
  numberOfStreams: BigInt,
  perSecondStreamRate: BigInt
): StreamStarted {
  let streamStartedEvent = changetype<StreamStarted>(newMockEvent())

  streamStartedEvent.parameters = new Array()

  streamStartedEvent.parameters.push(
    new ethereum.EventParam(
      "streamerAddress",
      ethereum.Value.fromAddress(streamerAddress)
    )
  )
  streamStartedEvent.parameters.push(
    new ethereum.EventParam(
      "numberOfStreams",
      ethereum.Value.fromUnsignedBigInt(numberOfStreams)
    )
  )
  streamStartedEvent.parameters.push(
    new ethereum.EventParam(
      "perSecondStreamRate",
      ethereum.Value.fromSignedBigInt(perSecondStreamRate)
    )
  )

  return streamStartedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUpdatedStreamTokenEvent(
  oldStreamToken: Address,
  newStreamToken: Address
): UpdatedStreamToken {
  let updatedStreamTokenEvent = changetype<UpdatedStreamToken>(newMockEvent())

  updatedStreamTokenEvent.parameters = new Array()

  updatedStreamTokenEvent.parameters.push(
    new ethereum.EventParam(
      "oldStreamToken",
      ethereum.Value.fromAddress(oldStreamToken)
    )
  )
  updatedStreamTokenEvent.parameters.push(
    new ethereum.EventParam(
      "newStreamToken",
      ethereum.Value.fromAddress(newStreamToken)
    )
  )

  return updatedStreamTokenEvent
}

export function createUpdatedSubscriptionHandlerEvent(
  oldSubscriptionHandler: Address,
  newSubscriptionHandler: Address
): UpdatedSubscriptionHandler {
  let updatedSubscriptionHandlerEvent = changetype<UpdatedSubscriptionHandler>(
    newMockEvent()
  )

  updatedSubscriptionHandlerEvent.parameters = new Array()

  updatedSubscriptionHandlerEvent.parameters.push(
    new ethereum.EventParam(
      "oldSubscriptionHandler",
      ethereum.Value.fromAddress(oldSubscriptionHandler)
    )
  )
  updatedSubscriptionHandlerEvent.parameters.push(
    new ethereum.EventParam(
      "newSubscriptionHandler",
      ethereum.Value.fromAddress(newSubscriptionHandler)
    )
  )

  return updatedSubscriptionHandlerEvent
}
