### Engine Flow ###
  - Flows through the Parser -> AST (Abstract Syntax Tree) -> Interpreter -> Profiler -> Compiler -> OPTIMIZED CODE
    - JS Engines now use a JIT (Just In Time) Compiler, which combines the interpreter and compiler
      - A JIT compiler runs after the program has started and compiles the code (usually bytecode or some kind of VM instructions) on the fly (or just-in-time, as it's called) into a form that's usually faster, typically the host CPU's native instruction set. A JIT has access to dynamic runtime information whereas a standard compiler doesn't and can make better optimizations like inlining functions that are used frequently.
      - Code from interpreter is passed to profiler to check for optimization, and if necessary, compiler reaplaces code w/ optimized code during runtime.
    - DEPENDS ON IMPLEMENTATION if JS is compiled or interpreted.

### JS Runtime ###
  - Every browser comes with a JS Engine (w/ Callstack and mem heap) / Runtime, Event loop, callback queue as well as a Job queue / microtask queue that ECMA actually ended up adding later to the runtime. The microtask queue takes priority over the callback queue so those jobs are popped off first, for example, Promises.
    - Runtime gives access to web API's which are async and uses C++ to handle calls.
    - Event loop is constantly checking if the callstack is empty -> then starts popping microtasks then callback queue.