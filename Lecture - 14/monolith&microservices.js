/*

Monolith :
-> Whole app is built as one big unit.
-> All features are inside the same code and same database.
-> If you update one small part, you deploy the whole app again.
-> Easy to build at the start, but can get hard to manage when it becomes very big.

Microservices :
-> App is split into many small services.
-> Each service does only one job (like login, payments, orders).
-> Services can be built, updated, and deployed separately.
-> More flexible and scalable, but more difficult to set up and maintain.



1) Development Speed:
Monolith: Development is slower because everything is in one big codebase, so changes can affect the whole system.
Microservices: Development is faster since teams work on separate services without affecting others.

2) Code Repo:
Monolith: One single codebase that contains the whole application.
Microservices: Multiple smaller codebases, one for each service.

3) Scalability:
Monolith: Hard to scale for big companies because you have to scale the whole app even if only one part needs it.
Microservices: Easier to scale because you can scale only the service that needs more resources.

4) Deployment:
Monolith: You deploy the entire application at once.
Microservices: Each service is deployed separately, so updates don’t affect the whole app.

5) Tech Stack:
Monolith: You are stuck with one technology stack for the entire application.
Microservices: No restrictions; each service can use its own technology stack.

6) Infrastructure Cost:
Monolith: Usually cheaper and simpler to set up.
Microservices: More expensive and complex due to separate services, networking, and monitoring.

7) Complexity:
Monolith: Simple for small projects, but becomes messy for large ones.
Microservices: Overkill for small projects, but very effective for large and complex systems.

8) Fault Isolation:
Monolith: One bug can crash the entire application.
Microservices: Problems are contained within a single service and don’t break the whole system.

9) Testing:
Monolith: Needs strong end-to-end test cases for the entire app to ensure nothing breaks.
Microservices: Each service can be tested independently.

10) Ownership:
Monolith: Usually one big team or a single owner is responsible for the whole app.
Microservices: Multiple small teams, each responsible for one service.

11) Maintenance:
Monolith: Harder to maintain over time because everything is interconnected.
Microservices: Easier to maintain since services are independent.

12) Reworks:
Monolith: Making changes is harder because you risk affecting unrelated parts.
Microservices: Easier to change or replace a service without disturbing others.

13) Debugging:
Monolith: Debugging is slightly easier since everything is in one repo.
Microservices: Debugging can be harder because issues might be spread across multiple services.

14) Developer Experience:
Monolith: Can be frustrating for large teams due to conflicts and dependencies.
Microservices: Usually better, as developers focus only on their own service.

*/