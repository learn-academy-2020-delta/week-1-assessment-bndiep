# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

  Your answer: A block of reusable code that can be called as many times as desired to do some sort of action. You use a function to avoid repeating the same lines of code that can be done simply by calling the function. It also saves you a lot of time.

  Researched answer: A function is an important feature of Javascript in which a set of statements do some type of task such as calculating the sum of two numbers. It takes an input and returns and output. A function consists of the name of the function, a list of parameters inside parentheses and separated by commas, and a statement that defines what the function does inside a set of curly brackets. Primitive data types can be passed to functions in place of a parameter. However, this change to the parameter does not change globally (i.e. outside the scope of the function) or to the called function. Non-primitive data types such as arrays or objects can also be passed as a parameter. Functions do not require a name and are considered to be anonymous. However, providing a name allows the user to understand what the function itself does, making it easier to identify when debugging.



2. What is the difference between .map() and .filter()?

  Your answer: The function .map() goes through and modifies the entire array at all indices and the result is an array of the same length as the original array. The .filter() function only keeps the values (or modified values) in the array that satisfies a certain condition, so ultimately the array returned is shorter than the original array.

  Researched answer: The .map() method creates a new array that is made up results of calling a given function on every item in the calling array. It provides a callback function once for each element in an array in order. With that information, it makes a new array from those results. It can accept three agruments: value, index, and the array being mapped. The .filter() method creates a new array with the items that pass the condition implemented by the function. It also provides a callback function once for each element in an array BUT the only difference from .map() is that it only returns values that are true to the given condition. Elements that do no pass the callback are skipped and not included in the new array. It also takes the same three arguments as .map(). It does not mutate the array in which it is called, making it very different from the orignal array.



3. What is the difference between console.log() and return?

  Your answer: The console.log() is what lines of code the user wants to appear in the machine or in the console either in the terminal or the console in a browser. It can be useful for finding bugs or to see changes in the code. A return is the end value of some logic like a for loop or an if statement. There is only one return per loop or function.

  Researched answer: First off, console.log() is a function and it is used to print information to the console. The parameter it passes will be shown in the console window or terminal. The return is a call to pass a value back up to whereever the call was made in the code. When a return is used, the function will stop executing and return the specified value.



4. In regards to functions, what is an argument?

  Your answer: An argument is what the function accepts and will be used to replace some variable inside the function's block of code. A function will have parameters that act as place holders. These parameters have no actual value and can represent any data type the user inputs as arguments. When the function is invoked, the user's input(s) is the argument which can be any data type.

  Researched answer: Arguments are parameter values in a function. They are the real values passed and recieved by the function when they invoke. Not all functions require arguments. However, if a function requires a parameter, missing arguments are set to undefined.



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: There are two roles in pair programming: driver and navigator. The driver is the one who uses the mouse and keyboard. They are in charge of writing the code in the text editor. They listen to their partner to guide them through the problem. They may also provide suggestions to help their partner through the problem. The navigator is the one explaining how to solve the problem. It is their job to effectively communicate how to write the code or explain their logic. They can also help by looking up additional information on the internet to assist in finding a solution to their code. Both partners need to communicate with each other, especially when there is a misunderstanding or if either persons feel stuck.

  Researched answer: Pair programming is a type software development technique that requires programmers to work together on one computer. One person is the driver who writes the code and the navigator observes and reviews the lines of code being typed. It is best practice to switch roles to give a chance for both partners to write or observe the code. It allows for collaborative teamwork and increase the quality of the software due to the reduction of possible mistakes that can result in bugs or errors. It requires a lot of communication and is place for both programmers to plan and discuss the code they are working on. In this way, they two partners can clarify or build off on each other's ideas to come up with better solutions. It is a practice that encourages the transfer of knowledge.



6. What is TDD? Describe the work flow associated with TDD.

  Your answer: I think it stands for test driven development. You usually want to write your test first before you write your code that has some sort of functionality. As soon as you write the test, you have it fail. Then you write the code that is needed to not make the test fail and then test it.

  Researched answer: TDD is a technique used to build software by first writing tests. It was created by Kent Beck in the late 1990s and is made up of three steps. The first is that you write a test for the function you are trying to create. The test should fail, so once it does, you write the functional code until the test finally passes. Then you refractor or restructure the current code to make it more concise or generally better. You do this over and over again to ensure that with each test, you are slowly building the functionality of your program with little errors and make the code much cleaner. This technique encourages a better designed program.



7. What is something we did in class this week you found helpful?  

  Your answer: I think learning a lot of the key shortcuts made it much easier and faster to move through the lines of code. Also, the instructors trying to to challenge us after we've figured out the solution helped me figure out other potential solutions. I like how the instructors will momentarily pop in to check on us to see how we are progressing. Sometimes, they are able to assist us by giving hints. The communication between students and instructors has been good through Zoom. Instructors can also add additional information in the chat while the main host/instructor continues on with their lecture. I enjoy the small breaks we have. It allows to step away from coding and rest my brain. The days seem very long when you're always learning new information, so it's great that we have those short breaks every hour.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React: is a JavaScript library used to make interactive, user-interfaces. It is an open-source web framework and can be used to develop web pages and mobile applications. It was created by Facebook.
- Yarn: is a Javascript package manager developed by Facebookand is also open-source.
- React State: React contains JavaScript state objects that are used to store property values to the component that can change over time
- CRUD: stands for Create, Read, Update, and Delete/Destroy and is a basic process to develop applications in JavaScript.
- this: a keyword that is a reference to a value within an object.