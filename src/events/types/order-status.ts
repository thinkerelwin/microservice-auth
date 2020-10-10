export enum OrderStatus {
  // happened when order has been created,
  // but the ticket it is trying to order has not been reserved
  Created = "created",
  // 1. the ticket the order is trying to reserve has already been reserved,
  // 2. when the user cancelled he order,
  // 3. the order expired before the payment
  Cancelled = "ancelled",
  // the order has successfully reserved the ticket
  AwaitingPatyment = "awaiting:payment",
  // the order has reserved the ticket and has provided payments successfully
  Complete = "complete",
}
