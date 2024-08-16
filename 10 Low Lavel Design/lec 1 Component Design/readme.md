# Component Design

In React, **everything** is a component. Each section of your application can have its own component, promoting reusability and maintainability.

## SOLID Principles

- **S** - *Single Responsibility Principle*  
  A class or component should have one, and only one, reason to change. It should do one thing well.

- **O** - *Open/Closed Principle*  
  Software entities should be open for extension but closed for modification.

- **L** - *Liskov Substitution Principle*  
  Subtypes must be substitutable for their base types without altering the correctness of the program.

- **I** - *Interface Segregation Principle*  
  No client should be forced to depend on methods it does not use. Favor small, specific interfaces over large, general ones.

- **D** - *Dependency Inversion Principle*  
  High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.
