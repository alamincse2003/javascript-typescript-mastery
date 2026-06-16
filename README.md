1. Execution Context কী?
   JavaScript যখন কোনো code execute করে, তখন প্রথমে একটি Execution Context তৈরি করে।

2. Scope
   Scope মানে variable কোথা থেকে access করা যাবে।

3. Closure কী?
   একটি function তার outer scope-এর variables মনে রাখতে পারে, এমনকি outer function execution শেষ হয়ে গেলেও।

4. Hoisting কী?
   Hoisting হলো JavaScript-এর এমন একটি behavior যেখানে variable এবং function declarations code execute হওয়ার আগে memory-তে register হয়ে যায়।

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

8. Promise কী?
   Promise হলো একটি JavaScript object যা future-এ কোনো asynchronous operation-এর result represent করে।

9. this কী?
   this হলো একটি special keyword যা বর্তমান execution context-এর object কে refer করে।

10. Prototype কী?
    JavaScript-এ প্রায় সব object-এর একটা hidden link থাকে অন্য একটা object-এর সাথে। এই link-টাই হলো: Prototype

11. Debounce কী?
    User typing বন্ধ করার পরে নির্দিষ্ট delay wait করে function execute করা।
    - User stop করলে execute
    - Search Input
    - Auto Complete
    - API Search

12. Throttle কী?
    নির্দিষ্ট interval-এ maximum 1 ( 1000ms ) বার function execute হতে দেবে।
    - Fixed interval-এ execute
    - Scroll
    - Resize
    - Move Mouse
13. DOM কী?
    যখন browser HTML parse করে, তখন HTML কে JavaScript object-এ convert করে।

14. Event Bubbling?

- Event target element থেকে শুরু করে parent → grandparent → document পর্যন্ত উপরে উঠতে থাকে।
  stopPropagation()
- কখনও bubbling বন্ধ করতে চাইলে।

15. Event Delegation?
    ইভেন্ট ডেলিগেশন এমন একটি কৌশল যেখানে ইভেন্ট বাবলিং ব্যবহার করে কোনো প্যারেন্ট এলিমেন্টের চাইল্ড এলিমেন্টগুলো থেকে আসা ইভেন্টগুলো পরিচালনা করার জন্য সেটির সাথে একটিমাত্র ইভেন্ট লিসেনার যুক্ত করা হয়।
16. Reflow (Extensive) vs Repaint (Cheaper) ?

        Reflow:
        যখন layout change হয়, element.style.width = "300px"; position + size recalculation
        Repaint:
        যখন শুধু visual change হয়, element.style.color = "red"; এখানে layout change হয়নি।

        Example:
        width, height, margin, padding, top, left, display, font-size (Reflow + Repaint)
        color, background-color, visibility, outline (Repaint)
        opacity, transform (Composite)

17. What is Memory Leak?
    Memory Leak হলো এমন memory যা আর দরকার নেই, কিন্তু JavaScript সেটা release করতে পারছে না।

    Memory Leak কখন হয়?
    যখন object unreachable হওয়ার কথা ছিল, কিন্তু এখনও কোনো reference রয়ে গেছে।

18. What is Shallow Copy (Spread Opetor)?
    শ্যালো কপি কোনো অবজেক্টের শুধুমাত্র প্রথম স্তরটি কপি করে। নেস্টেড অবজেক্টগুলো তখনও রেফারেন্স শেয়ার করে।

19. What is Deep Copy?
    ডিপ কপি সমস্ত নেস্টেড অবজেক্ট সহ সম্পূর্ণ স্বাধীন কপি তৈরি করে।
