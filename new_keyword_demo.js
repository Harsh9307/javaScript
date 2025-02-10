class Product{
    #name;
    #price;
    #description;

    constructor(n,p,d){
        this.#name = n;
        this.#price=p;
        this.#description=d;
        //return "10"; //primitive -> no effect
        // return this; // if u dont return anything , it is equal to saying return this ;
    }

    display(){
        //print the product
        console.log(this.name,this.price,this.#description);
    }
}

const p = new Product("Bag",90,"a cool bag");
console.log(p);
p.name=-1;
console.log(p);
p.display();


/**
 * new keyword create brand new plan object for you.
 */