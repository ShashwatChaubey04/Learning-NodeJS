const http = require("http");

const server = http.createServer(function(req, res) {
  if(req.url === "/getSecretData") res.end("There is no Secret Data"); 
  else res.end("Hello World! I am Shashwat Chaubey");
}); 

server.listen(7777);

/*
  **const server = http.createServer();**
  -> Creates a new HTTP server instance.
  -> This instance can listen for requests and send responses.
  -> At this point, it doesn't yet know what to do with incoming requests (we can add a callback function later).

  **server.listen(7777);**
  -> Tells the server to start listening on port 7777.
  -> Your server is now active and waiting for HTTP requests 

  **function(req, res)**
  -> It takes a callback function that gets called every time a client (browser, Postman, etc.) makes a request.
  -> The callback has two arguments:
      req: The incoming request object.
      res: The outgoing response object.

  **if(req.url === "/getSecretData") res.end("There is no Secret Data");**
  **res.end("Hello World! I am Shashwat Chaubey");**
  -> Even if the URL is /getSecretData, you’re calling res.end() twice:
      First for secret data,
      Then again for "Hello World..."
  -> This causes a Cannot set headers after they are sent to the client error because res.end() closes the response — you can't write to it again.

*/
