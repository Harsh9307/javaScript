class Category{
    constructor(c){
        this.categoryname = c;
    }
}
class Product extends Category{
    constructor(n,c){
        super(c);
        this.name=c;
    }
}
p=new Product("iphone","mobiles");