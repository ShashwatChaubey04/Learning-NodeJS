/*

When we give any code to JavaScript V8 Engine multiple things happen's :

1) Lexical Analysis (Tokenization) : Code is broken down into Tokens (small pieces).
2) Syntax Analysis (Parsing) : Tokens are converted into AST (Abstract Syntax Tree).
   #NOTE : When your code is unable to generate AST it through Syntax Error.
3) AST is passed into Ignition Interpreter (name of V8 interpreter).
4) Ignition Interpreter convert AST into Byte Code.
5) Execution of Byte Code.


Optimization :-

   => The Ignition Interpreter in the V8 engine starts by reading the JavaScript code line by line and converts it into bytecode. While doing this, it tracks which functions and variables are used frequently. Once it identifies this "hot" code, it passes it to the TurboFan JIT compiler, which then compiles it into optimized machine code. This makes the frequently used parts of the code run much faster during subsequent executions.

Deoptimization :-

   => When TurboFan compiles hot code into machine code, it makes certain assumptions to optimize performance — for example, it assumes variables will always be of a specific type.
    Suppose we have a function:

    function sum(a, b) {
      return a + b;
    }

    If we repeatedly call sum(1, 2) or sum(3, 4), TurboFan assumes a and b will always be numbers, and optimizes the code accordingly.
    However, if we later call sum("1", 2) or sum({}, []), those assumptions break. At this point, deoptimization occurs — TurboFan discards the     optimized code and pass back the code to Ignition Interpreter.
    
*/

/*

There are 2 types of Language :

1) Interpreted Language :- Read the Code line by line and execute it using an interpreter at runtime.
-> Slower than compiled code
-> No separate compile step
-> More flexible
-> Errors may appear only at runtime

2) Compiled Language :-  The High Level code is converted into Machine Level code by compiler before execution.
-> Faster execution
-> Takes time to compile
-> Less flexible (needs recompilation after every change)
-> Error checking at compile time

JavaScript is a Hybrid Languages (Both) as it is JIT (Just-In-Time) compiled, The name of compiler is Turbofan Compiler.

*/