/*

# Socket :-

  -> A socket is like a telephone line used for communication between two programs.
  -> It acts as an "endpoint" — one end is the client, the other is the server.
  -> Two devices can send and receive data through their sockets over a network.

  Example: Like a plug point (socket) where a device (client) can connect to a power source (server).


# IP Address :-

  -> IP (Internet Protocol) Address is the unique address of a device on the internet or a network.
  -> It tells where to find a computer, just like your home address tells where you live.

  Example: "192.168.1.1" is a typical IP address used in local networks.


# Port Number

  -> A port number identifies a specific application or service running on that computer (like a room number in your house).
  -> You can have multiple servers running on the same machine, each on a different port.
  -> While the IP address is like the house address, the port number tells which program inside that computer you want to talk to.

  Example: Web servers usually run on port 80 (HTTP) or 443 (HTTPS).


# Client 

  -> The client is the device or program that starts the conversation by sending a request.
  -> It always connects to the server to ask for some service (like downloading a webpage).

  Example: Your web browser (Chrome, Firefox) is a client when you open Google.


# Server 

  -> The server is the device or program that waits and listens for requests from clients.
  -> When it receives a request, it processes it and sends back a response.

  Example: Google’s server listens for search requests and replies with results.


======================= FLOW OF COMMUNICATION =======================

The client opens a socket → connects to server’s IP and port → sends/receives data → closes the socket.
 A packet is a small chunk of data that is part of a larger message.
 Instead of sending a big file or message all at once, it's broken into many small packets and sent piece by piece.


======================= SIMPLE ANALOGY =======================

IP Address = Home Address (Where to send data)
Port Number = Room Number (Which program in the computer)
Socket = Door used for entry (communication endpoint)
Client = Visitor (Initiates contact)
Server = Host (Responds to contact)


# TCP / IP

  -> TCP = Transmission Control Protocol
  -> IP = Internet Protocol
  Together, TCP/IP is a set of communication rules (protocols) that computers follow to send and receive data over the internet or any network.


# Three important Application Layer protocols in the TCP/IP model are :-

@ HTTP (HyperText Transfer Protocol)
  -> Protocol used for accessing websites and web content (HTML, images, text).
  -> Works on port 80 (HTTP) and 443 (HTTPS — secure version)

  How it Works:
  -> Your browser (client) sends an HTTP request to a web server.
  -> The server processes it and sends back an HTTP response (usually a web page).
  -> Uses TCP underneath to ensure reliable delivery.

@ FTP (File Transfer Protocol)
  -> Used for transferring files between two computers (upload/download).
  -> Works on port 21 for commands, and 20 for data transfer.

  How it Works :
  -> A client connects to an FTP server.
  -> You can upload, download, or list files on the server.
  -> Can work in active or passive mode for firewalls.

@ SMTP (Simple Mail Transfer Protocol)
  -> Used to send emails from a client to a mail server or between servers.\
  -> Works on port 25 (or 587 for encrypted).
  
  How it Works :
  -> When you send an email, your email client (e.g., Gmail, Outlook) uses SMTP to send it to your email server.
  -> That server may use SMTP again to deliver it to the recipient's server.


# DNS (Domain Name System) is like the phonebook of the internet.

  -> It helps convert human-friendly website names (like www.google.com) into IP addresses (like 142.250.64.78), which computers use to talk to each other.
  -> Computers communicate using IP addresses, but humans prefer easy names.
  -> DNS bridges this gap.


*/

/*

Working :-

A client makes a request to www.google.com. The domain name is resolved using DNS, and the corresponding IP address is obtained. A socket connection is then established with the server. The HTTP server receives the request and responds using the HTTP protocol. The data is transmitted in packets. During this process, the server might also communicate with other servers to fetch required information. 

*/