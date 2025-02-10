/**
 * Objects are created by constructor callls using new keyword .
 * classes -> blueprints 
 * objects -> instances 
 * in javascript , we dont have any mental model or copy, objects are going to be linked to the classes
 * 
 * what is prototypes ?
 * it is a mechanism using which js objects inherits features from one another.
 * every objects has a prototype prooperty which is a object in itself.
 * in js , we don't make copies .
 * 
 * the new keyword actually executes 4 step process:
 * 1. the new keyword creates a brand new js object.
 * 2. It does a process of linking 
 * 3. calls the function with this property assigned to the empty object it created before
 * 4. the function execution starts ( and we know this keyword belongs to calling site )
 *  */
function Product(n){
    this.name = n;
}
let d= new Product("iphone");

Product.prototype.display= function(){ console.log("name of the product is :",this.name)}; // display function was not in the function , 
                                                                                         // still we could add the function

d.display();

function Name(name,age){
    this.name = name;
    this.age=age;
    //return `my name is ${name}`;
}

Name.prototype.toString = function (){
    return `${this.name}, ${this.age}`;
}
let n = new Name("Prabhu",20);
console.log(n.toString());