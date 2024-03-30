// javascript is a synchronous single threaded language it has one call stack and it can only do one thing at a time
/* call stack present in side the javascript engine
 all the code executed in side the call stack for example suppose we have tocute this execute piece of code  
 whenever any javascript programe is run a global execution context is created
  and the global execution context is post inside the call stack
  
  
  suppose we have a global execution context inside the call stack
  
  now in the global execution context the whole code will run line by line inside the GEC  */

function a() {
  console.log('a');
}
a(); //function invocation
// in case of a function execution the execution context is created for this function a() to execute the code of function a() and this execution context is again pushed
//  in side the call stack and now a will be inside the call stack now the the function a's code will be executed line by line that means it will print a in side the console and in the last line if there is nothing to execute in side the function a the it will pops out the function a() from the call stack
console.log('End');
//after  that it will execute the END and after that if ther is nothing to  execute then it will pops out the global execution context from the call stack

/*
suppose if we want to execute our code after certain delay
then we need extra supper power that supar powers are the timers 

suppose we have a browser and in that we have javaScript engine in it
javaScript engine has a call stack

our browser is one of the most remarkable creation in the javaScript 

it also has something known as local storage
you can also have timer inside the browser
we also have a url
so the browser has super power of communicating to the external world

To access all these super powers we need APIS
* setTimeout
* setInterval
* DOM APIs
* fetch()
* Local Storage
* Console
* Location
These are the kind of super power of communicating to the external world
The broser give use access to the js call stack to use all the super powers

 we have timer in side the browser it gives us acces to setTimeout
 suppose we have to acess the DOM Tree so the browser gives us access to DOM tree by DOM APIs
 
 fetch() gives us access to other servers like external servers
 and we get it inside the call stack beacause of the global objects 
 so the Global object is "WINDOW" browser gives us the access of all these super powers becase of the window keyword

 Now try to execute our code using this super powers


*/

console.log('Start');
/* whole code willl execute line by line
if we write console.log() in your code then its basically 
calls the web Api  and this internally makes the call
to actually modifies or log something inside our console
when we execute this pies of code it basically logs inside the console

 */
setTimeout(function cb() {
  console.log('Callback');
}, 5000);
/* the setTimeout calls the setTimeout Api and gives us the access to the timer
we have 5000 delay of timer and the timer starts the 5000ms timer and the javascript code moves to the next line and moves to the next line and execute it imediately which prints END
once all are code is done executing  the global execution context pops out from the stack after executing each and every line of the code
mean while all this is happening the timer is still running
It is doing countdown and as soon as the ttimer expires and the callback is registered
 the callback funcion needs to be executed, 

 so we have event loop and callback queue as we know the 5000ms timer was runing and callback is registered
 as soon as the timer expire the callback needs to go inside the callstack

 but it cannot directly go inside the callstack 
 so it will go to the callstack through the callback Queue
 after the timer expiration the callback moves inside the callback queue

 after that the job of the event loop is check the callback queue and puts inside the callstack

 as soon as the 5000 ms expires the callback queue pushed inside thecallback queue
 and event loop checks there is something inside callback queue and it pushes inside the call stack
 and call stack quickly exicutes the callback function


*/
console.log('End');
