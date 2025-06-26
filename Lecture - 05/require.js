/*

When we write { require("./fileName") => Requiring a File } multiple things happen's :

1) Resolving the Modules
   => ./localpath
   => .json
   => node : module

2) Loading the Module
   => File content is loaded according to File types. (get the Data of the File)

3) Compiling the Module
   => Wraps the Data inside IIFE.

4) Evaluating the Module
   => Code is executed and module.exports is Returned.

5) Caching the Module
   => If we require a specific Module in more than 1 Files and then run a File other 4 steps will executes and the Module cached up and If we run another Code containing the same Module it will not run the other four step. (as that module is cached up by Node JS)


*/