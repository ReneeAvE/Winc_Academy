/* Functions

Series of steps (like a recipe)
Making is when you write it (definition) = describing how it should work
Then you can call function = use it

Most often it has a name but is is optional

Mental model: how something looks/feels inside your head
A function is like a little machine in a box with a button. Writing the function is creating the box. Using the function is pressing the button

A functions runs and when it's done it stops. Like a microwave.

A function gives a name to a series of steps. You can do this over and over again in differents parts of your code and you don't have to repeat all the code.
There is no limit to how long a function can run.
Technically you can put anything inside of a function.


*/

const makePizza = function () {
    console.log("Make dough");
    console.log("Add sauce");
    console.log("Add toppings");
    console.log("Put in oven");
};

const makeSushi = function () {
    console.log("Make rice");
    console.log("Add fish");
    console.log("Roll in seaweed");
}

makeSushi();
makeSushi();
makeSushi();
makePizza();
makePizza();
