# Nodes.js

## Module 1:

### Video 2:

1. What is Node.js?

=> A Javascirpt Runtime , built on javascript, allows to run 
javascript not just in the browser but anywhere.

=> node.js uses v8,v8 takes js code and converts to machine code.

=> Some features are also taken away, like manipulating dom.
 
Video 4:

=> To check which version of node we have, open cmd, type in "node -v"
and we can see which version of node is installed in our computer.

=> To enter a interactive mode we type in "node" to play around node in repl.

=> We can try writing output to a file, this is one of the functionality 
that  node.js offers. This is the file system functionality.
=>  to use this we need to import file system, we can do this by 

const fs = require('fs');
fs.writeFileSync('Hello.txt','Hello from Node.js')

this will create a file  in the same directory by the name of Hello.txt

Video 5:
=> Run server: We use Node.js to run a server, i.e. create server & Listen to incoming requests
=> Buisiness Logic: Handle Requests, Validate Input, Connect to database
=> Return Responses (Rendered HTML, JSON,...)

Alternatives to nodejs would  be python, php, ASP.NET. No clear winner 
on which to use. 

Video 6: course outline, Video 7: How to get the most out of the course 
=> Try to solve the assignments on your own or google it before checking the attached code.
=> Try to answer questions in the QnA.

Video 8: Two different ways to execute js, one is  
The REPL
R read E evaluate  P print output  L loop

Another is Execute Files => Used for real apps , predictable sequence of steps. 
REPL: Great playground, execute code as you write it.


Module 2:

=> Weakly Typed Language: No explicit type assignment and Data types can be switched
dynamically

=> Object-Oriened Language: Data can be organized in logical objects and data can be 
categorized into primitive and reference types.

=> Versatile Language: Runs in browser & directly on a PC/server 
and can perform a broad variety of tasks.

Difference between fat arrow and normal functions:



class Student {
	constructior(name, age, marks){
		this.name = name;
		this.age = age;
		this.marks = marks;
	}
	setPlacementAge(minPlacementAge){
		return eligibleForCurrentCompany(minMarks){
			if(this.marks > minMarks){ console.log(this.name + "is 			ready for placements")
				
			}else{
				console.log(this.name + "is not ready for 					placements");
			}
		}
	}
}
setPlacementAge(18);

const Yash = new Student('yash', 25, 75);
const Vaibhav = new Student('vaibhav', 13, 35);

Yash.setPlacementAge(18)(40);

we will get undefined in the inner function eligibleforcurrentCompany.
This is a major problem

same scenario will be fixed with fat arrow function. return (minMarks)=>{}.
Normal functions looks at the current object which is calling that function whereas  fat arrow function will looks into the lexical scope
of the parent function.

## Video 25: How the web works:

When we type in  a url,
A domain name is looked up in the server and we get a response from the server.
http and https are two protocols to enable this kind 
communication between the browser and the server.

## Video 26: What are core modules?
Most modules are available by default to not pollute our namespaces. some of the core modules are http, https, fs, path: path to files, os: operating system element packages.

http => Helps in launching a server, server requests
https => to launch a SSL server

relative path and absolute path:

./aga/sga would be relative path
/dfsa would be abosolute path.

If we remove / or ./ in the require fn then it will not look for http.js in the local folder but instead it will always look for a global module named http.

createServer method:
it takes a request listener as an argument.
requestListener is a func which executes every incoming request. 
the request listener receives an arg reuest which is of type incoming message and an response object of type ServerResponse.

what are anonymous functions: nameless functions, accessed by variable it is store in.

what does server.listen do?
takes a couple of args, 1st one is the port we want to listen to.

what is Event Loop?
It is method in Nodej that keeps running as long as there are event listeners registered.
Executes code when a certain event occurs.

If two incoming request come at the same time it is superfast to execute them, also leverages the os for multithreaded acitivity.

What is process.exit()?
It will hard exitss the event loop, it closes the program and gives control back to the terminal.



## Understanding Requests
we can console.log the req object to see contents like url, body, headers. 

## Sending Responses

res.setHeader('Content-type', 'text-html');
This allows to  set the header.
This will attach a header to our response where we pass some meta information where the type of the content being sent is also html(as meant by the 2nd argument).

To send the html code we use
 res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Hello from my node.js server</h1></body>')
res.write('</html>');

This is an elaborative way to write html.

We can end this by res.end() after which any write method call will result in an error.
This is when Nodejs will send it back to the client.


## 34 Parsing Request Bodies

### Streams and buffers
Streaming of data makes sense files can be complex and big, to organize these chunks of data we use buffers, 
A buffer is a construct designed to hold chunks and allow to work with them before releasing them.


## 35



### What is the consequence of the early execution of a specific line of code, and how does it relate to the "cannot set headers" error?

The early execution can lead to issues like the "cannot set headers" error. In the example provided, the return statement does not prevent the subsequent code from executing, causing the error when trying to send a response after the response has already been sent.

### Why does the speaker mention that understanding asynchronous execution is crucial for not blocking the event loop?

Blocking the event loop by pausing for tasks to complete would hinder the server's ability to handle incoming requests efficiently. Asynchronous execution allows the server to continue processing other tasks while waiting for events to occur.

### What is the specific implication of reaching a certain line of code too early, and how does the speaker recommend addressing it?

### Reaching a line of code too early can lead to undesired outcomes. 
To address this, the speaker suggests using a return statement to control the flow and ensure that the subsequent lines are not executed prematurely.

### What is the speaker's rationale for not wanting to block the code execution in Node.js?

Blocking the code execution would slow down the server and impede its ability to handle incoming requests. The speaker emphasizes the importance of keeping the event loop running smoothly without long pauses.
### What is the role of the "event loop" in the context of Node.js, as explained by the speaker?

The event loop is crucial in Node.js to continuously wait for new events without blocking code execution. It allows code to be executed when it is due to be executed, ensuring a responsive and efficient server.

### Important concepts about available Node.js features and how to unlock them

We can differentiate them by :
	1. Global features: Keywords like const or function but also global objects like process.
	2. Core Node.js Modules: Examples would be files-system module("fs"), path module("path") or the Http module ("http").
	3. Third-party Modules: Installed via npm-install - you can add any kind of feature to your app via this way.

Global features we don't need to import them, 
Core Node Modules, don't need to be installed but need to be imported 
expample fs= require('fs');

Third-party modules need to be installed (via npm install in the projecgt folder) and imported.
example: in the terminal, we use npm install --save express-session 
In the code file ,
const sessions = require('express-session');


## Finding and fixing Syntax Errors
Syntax Errors: typo in code or forgot closing  brackets etc
Runtime Errors: Occurs when we execute the code.
Logical Errors: Most hard Errors to catch.

# ExpressJs

## What and why?
Vanilla nodejs usecase takes too long to develop, instead we can just use ExpreesJs framework which make the job easier. We can also install 3rd party packages for our usecase.