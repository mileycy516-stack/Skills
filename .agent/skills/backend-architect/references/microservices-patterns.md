# Microservices Patterns

## Communication
*   **Synchronous (Direct)**: REST/gRPC. Easy, but tightly coupled.
*   **Asynchronous (Event)**: RabbitMQ/Kafka. Decoupled, eventual consistency.

## Data Management
*   **Database per Service**: Essential for autonomy. One service cannot directly query another service's DB. It must use the API or listen to events.
*   **CQRS**: Command Query Responsibility Segregation. Split 'Write' models (complex domain logic) from 'Read' models (fast, denormalized views).

## Saga Pattern (Distributed Transactions)
Since we have no global `BEGIN TRANSACTION... COMMIT`, we use Sagas.
*   **Choreography**: Service A emits "OrderCreated". Service B listens and tries "ReserveCredit". If fail, B emits "CreditFailed", A listens and runs "CancelOrder".
*   **Orchestration**: A central "Order Orchestrator" service tells A, B, and C what to do and handles rollbacks.
