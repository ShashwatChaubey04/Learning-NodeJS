/*

Database is a organized collection of data or a type of data store based on the use of a database management system (DBMS).
DBMS is a software that interacts with end users, applications, and the database itself to capture and analyze the data.


# RDBMS

  -> An RDBMS (Relational Database Management System) is a type of database management system that stores data in the form of tables (relations) made up of rows (tuples) and columns (attributes), and allows users to manage that data using SQL (Structured Query Language).
  -> In the 1970s, many databases started calling themselves relational even though they weren’t truly following the relational model.
  -> To avoid confusion and misuse of the word RDBMS, Codd (the inventor of the relational model) defined these 12 rules (actually 13 rules, numbered 0 to 12) as a test.
  -> If a DBMS claims to be relational, it must satisfy these rules.



============================== RDBMS (MySQL) ==============================

  -> Table, Rows, Columns
      Data is stored in a Structured Format: Tables contain Rows (records) and Columns (fields).

  -> Structured Data
      Information must fit into a fixed Structure, like Numbers, Text, Dates, etc., defined beforehand.

  -> Fixed Schema
      The shape of the Data (columns and their data types) is defined in advance and rarely changes.

  -> SQL
      Structured Query Language used to store, retrieve, and manipulate data.

  -> Tough Horizontal Scaling
      Hard to spread data across Multiple Servers (horizontal scaling). Easier to make one Server stronger (vertical scaling).

  -> Relationships – Foreign Keys & Joins
      Connections between Tables are managed using Foreign Keys (links to other tables) and Joins (combining data from multiple tables).

  -> Read-heavy Apps, Transaction Workloads
      Works best for applications that need frequent reads and safe, consistent transactions.

    Example: Banking Apps
    Ideal for systems where accuracy and reliability of every transaction is critical.



============================== NoSQL (MongoDB) ==============================

  -> Collection, Document, Fields
      Data is grouped in collections. Each item inside is a document. Each document has fields (key-value pairs).

  -> Unstructured Data
      Data doesn’t need to follow a strict structure. Different documents in the same collection can have different shapes.

  -> Flexible Schema
      New fields can be added anytime without redesigning the entire database.

  -> Mongo (MQL), Neo4j (Cypher)
      Each NoSQL database has its own query language. MongoDB uses MQL, Neo4j uses Cypher.

  -> Easy to Scale Horizontally & Vertically
      Designed to spread data across many servers (horizontal scaling). Can also be scaled up with stronger servers (vertical scaling).

  -> Nested Relationships
      Related information can be stored inside the same Document instead of multiple Tables.

  -> Real-time, Big Data, Distributed Computing
      Best suited for applications dealing with massive data, real-time updates, and distributed systems.

    Example: Real-time Analytics, Social Media
    Used for platforms where data is constantly changing and growing, like social networks or live dashboards.

*/ 