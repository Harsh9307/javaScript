const iphone ={
    name : "iphone",
    price: 100000,
    rating: 4.8,
    display: function(){
        let iphoneRed = {
            name: "Iphone Red",
            price: 110000,
            print: () => {
                console.log(this);
            }
        }
        iphoneRed.print();
    }
}
iphone.display();

/**
 * if this is inside a arrow function , it doesnt know about it
 * 
 */