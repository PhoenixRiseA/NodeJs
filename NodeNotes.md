Nodes.js

Module 1:

Video 2:

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

Video 25: How the web works:

When we type in  a url,
A domain name is looked up in the server and we get a response from the server.
http and https are two protocols to enable this kind 
communication between the browser and the server.

Video 26: What are core modules?
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



