1. Execution Context কী?
   JavaScript যখন কোনো code execute করে, তখন প্রথমে একটি Execution Context তৈরি করে।

2. Scope
   Scope মানে variable কোথা থেকে access করা যাবে।

3. Closure কী?
   একটি function তার outer scope-এর variables মনে রাখতে পারে, এমনকি outer function execution শেষ হয়ে গেলেও।

4. Hoisting হলো JavaScript-এর এমন একটি behavior যেখানে variable এবং function declarations code execute হওয়ার আগে memory-তে register হয়ে যায়।

5. Event Loop কী?
   Event Loop হলো JavaScript-এর একটি mechanism যা asynchronous code (setTimeout, Promise, API calls, events) execute করতে সাহায্য করে।

6. Macrotask কী?
   Macrotask হলো এমন asynchronous task যা Task Queue (Callback Queue)-তে অপেক্ষা করে এবং সব microtask শেষ হওয়ার পরে execute হয়।

   Common Macrotasks:
   setTimeout(...)
   setInterval(...)
   DOM Events (click, input, etc.)
   MessageChannel
   postMessage

   Common Microtasks:
   Promise.then()
   Promise.catch()
   Promise.finally()
   queueMicrotask()

7. Call Stack কী?
   Call Stack হলো JavaScript Engine-এর একটি stack structure যেখানে function calls track করা হয়।
