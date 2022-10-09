import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AuthorizedFullFlow,
  ChangedController,
  ChangedStreamHost,
  CreatedSubscriptionFlow,
  DeletedSubscriptionFlow,
  SubscriptionHandlerOwnershipTransferred,
  SubscriptionHandlerPaused,
  SubscriptionHandlerUnpaused
} from "../generated/SubscriptionHandler/SubscriptionHandler"

export function createAuthorizedFullFlowEvent(
  user: Address,
  handler: Address,
  token: Address
): AuthorizedFullFlow {
  let authorizedFullFlowEvent = changetype<AuthorizedFullFlow>(newMockEvent())

  authorizedFullFlowEvent.parameters = new Array()

  authorizedFullFlowEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  authorizedFullFlowEvent.parameters.push(
    new ethereum.EventParam("handler", ethereum.Value.fromAddress(handler))
  )
  authorizedFullFlowEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return authorizedFullFlowEvent
}

export function createChangedControllerEvent(
  owner: Address,
  oldController: Address,
  newController: Address
): ChangedController {
  let changedControllerEvent = changetype<ChangedController>(newMockEvent())

  changedControllerEvent.parameters = new Array()

  changedControllerEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  changedControllerEvent.parameters.push(
    new ethereum.EventParam(
      "oldController",
      ethereum.Value.fromAddress(oldController)
    )
  )
  changedControllerEvent.parameters.push(
    new ethereum.EventParam(
      "newController",
      ethereum.Value.fromAddress(newController)
    )
  )

  return changedControllerEvent
}

export function createChangedStreamHostEvent(
  owner: Address,
  oldHostAddress: Address,
  newHostAddress: Address
): ChangedStreamHost {
  let changedStreamHostEvent = changetype<ChangedStreamHost>(newMockEvent())

  changedStreamHostEvent.parameters = new Array()

  changedStreamHostEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  changedStreamHostEvent.parameters.push(
    new ethereum.EventParam(
      "oldHostAddress",
      ethereum.Value.fromAddress(oldHostAddress)
    )
  )
  changedStreamHostEvent.parameters.push(
    new ethereum.EventParam(
      "newHostAddress",
      ethereum.Value.fromAddress(newHostAddress)
    )
  )

  return changedStreamHostEvent
}

export function createCreatedSubscriptionFlowEvent(
  operator: Address,
  fromAddress: Address,
  toAddress: Address,
  token: Address,
  flowRate: BigInt
): CreatedSubscriptionFlow {
  let createdSubscriptionFlowEvent = changetype<CreatedSubscriptionFlow>(
    newMockEvent()
  )

  createdSubscriptionFlowEvent.parameters = new Array()

  createdSubscriptionFlowEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  createdSubscriptionFlowEvent.parameters.push(
    new ethereum.EventParam(
      "fromAddress",
      ethereum.Value.fromAddress(fromAddress)
    )
  )
  createdSubscriptionFlowEvent.parameters.push(
    new ethereum.EventParam("toAddress", ethereum.Value.fromAddress(toAddress))
  )
  createdSubscriptionFlowEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  createdSubscriptionFlowEvent.parameters.push(
    new ethereum.EventParam(
      "flowRate",
      ethereum.Value.fromSignedBigInt(flowRate)
    )
  )

  return createdSubscriptionFlowEvent
}

export function createDeletedSubscriptionFlowEvent(
  operator: Address,
  fromAddress: Address,
  toAddress: Address,
  token: Address
): DeletedSubscriptionFlow {
  let deletedSubscriptionFlowEvent = changetype<DeletedSubscriptionFlow>(
    newMockEvent()
  )

  deletedSubscriptionFlowEvent.parameters = new Array()

  deletedSubscriptionFlowEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  deletedSubscriptionFlowEvent.parameters.push(
    new ethereum.EventParam(
      "fromAddress",
      ethereum.Value.fromAddress(fromAddress)
    )
  )
  deletedSubscriptionFlowEvent.parameters.push(
    new ethereum.EventParam("toAddress", ethereum.Value.fromAddress(toAddress))
  )
  deletedSubscriptionFlowEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return deletedSubscriptionFlowEvent
}

export function createSubscriptionHandlerOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): SubscriptionHandlerOwnershipTransferred {
  let subscriptionHandlerOwnershipTransferredEvent = changetype<
    SubscriptionHandlerOwnershipTransferred
  >(newMockEvent())

  subscriptionHandlerOwnershipTransferredEvent.parameters = new Array()

  subscriptionHandlerOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  subscriptionHandlerOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return subscriptionHandlerOwnershipTransferredEvent
}

export function createSubscriptionHandlerPausedEvent(
  account: Address
): SubscriptionHandlerPaused {
  let subscriptionHandlerPausedEvent = changetype<SubscriptionHandlerPaused>(
    newMockEvent()
  )

  subscriptionHandlerPausedEvent.parameters = new Array()

  subscriptionHandlerPausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return subscriptionHandlerPausedEvent
}

export function createSubscriptionHandlerUnpausedEvent(
  account: Address
): SubscriptionHandlerUnpaused {
  let subscriptionHandlerUnpausedEvent = changetype<
    SubscriptionHandlerUnpaused
  >(newMockEvent())

  subscriptionHandlerUnpausedEvent.parameters = new Array()

  subscriptionHandlerUnpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return subscriptionHandlerUnpausedEvent
}
