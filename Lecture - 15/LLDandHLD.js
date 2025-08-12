/*

# High-Level Design (HLD)
-> Purpose: Gives an overall picture of the system.
-> Focus: System architecture, major modules, data flow, and technology choices.
-> Audience: Architects, senior developers, and stakeholders.

Details:
-> Defines modules/components and their relationships.
-> Shows how data flows between them.
-> Specifies tech stack (e.g., MySQL, Node.js, React).
-> Includes high-level diagrams (block diagrams, ER diagrams).

Example:
In an E-commerce System, HLD will show:
Modules: User Service, Product Service, Order Service, Payment Service.
Communication: REST APIs, Message Queues.
Database: MySQL for transactions, Redis for caching.

--------------------------------------------------------------------------------------------------------------------

# Low-Level Design (LLD)
-> Purpose: Breaks down HLD into detailed, step-by-step designs that developers can code directly.
-> Focus: Classes, methods, database schema, algorithms.
-> Audience: Developers.

Details:
-> Class diagrams and method signatures.
-> Database tables with exact columns.
-> API request/response formats.
-> Design patterns to be used (Singleton, Factory, etc.).
-> Error handling and edge cases.

Example:
For E-commerce System:
Class: OrderService with methods createOrder(), cancelOrder().
Table: orders with columns order_id, user_id, status.
API: POST /orders → Request { userId, items[] } → Response { orderId, status }.

*/