/*

"Thread per connection" is a server design model where the server creates a new thread for each client connection. This model is simple and easy to implement but has limitations when handling many simultaneous connections.

How it Works :-
  -> Server starts and waits for connections.
  -> When a client connects:
     . A new thread is created.
     . That thread handles all communication with the client.
  -> When the client disconnects, the thread is terminated.

epoll (Linux) and kqueue (BSD/MacOS) are scalable I/O event notification systems used in event-driven programming to efficiently handle many concurrent network connections—without creating a thread per connection. Complexity = O(1)

*/