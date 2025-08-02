/*

The Event Loop in Node.js is responsible for executing code, collecting and processing events, and executing queued sub-tasks (callbacks). It handles asynchronous operations by checking various queues/phases and pushing their callbacks onto the Call Stack when it's empty.

The Event Loop goes through several **phases** in a loop. Each phase has a specific purpose and a queue of callbacks to process.


# Major Phases of the Event Loop:

1) **Timers Phase**  
   - Handles callbacks scheduled by:
     -> setTimeout
     -> setInterval
   - Timers Phase uses Min Heap Data Structure to handle Callbacks.
   - Executes callbacks **after** the specified delay (note: actual execution time may be delayed due to other tasks).

2) **Poll Phase**
   - Retrieves new I/O events and executes their callbacks.
   - Handles:
     -> Incoming network connections
     -> Data from file system, sockets, etc.
     -> `fs` module (file system)
        "File system callbacks (like fs.readFile) are queued in the Poll phase after the I/O (file reading) operation is completed."
     -> DNS, crypto operations
     -> HTTP requests (like `http.get`)

3) **Check Phase**
   - Executes callbacks scheduled using:
     -> setImmediate
   - Always runs **after the Poll phase**, regardless of timer or I/O status.

4) **Close Callbacks Phase**
   - Handles:
     -> Events like `socket.on('close')`
     -> Cleanup for closed handles like sockets or file descriptors


# MicroTask:
   There is also a **microtask queue** (not an official phase), which includes:
   -> `process.nextTick()`
   -> Promises (`.then`, `.catch`, `.finally`)

   These run **immediately after the current operation**, before the event loop proceeds to the next phase. Before entering each phase of the Event Loop, Node.js first clears the microtask queue by executing:

   -> All `process.nextTick()` callbacks
   -> All resolved Promise callbacks (microtasks)


# Tick:
   One TICK in Node.js refers to **one complete cycle of the Event Loop, during which it processes all the tasks queued in one or more phases (like timers, I/O callbacks, etc.). Each tick handles queued callbacks and moves to the next phase in the loop.

Summary:
The Event Loop continually cycles through these phases, pushing callbacks to the Call Stack when it's empty, ensuring correct order and timing for asynchronous operations.

*/

/*
When there are no pending timers, no immediate tasks, and no close events, Node.js enters the Poll phase and waits there.
*/