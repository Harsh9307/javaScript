const iphone = {
    name: "Iphone 16 pro",
    price: 100000,
    descrption: "the new iphone",
    rating : 4.8,
    
    display:()=>{
        console.log(this);
    }
}
const macbook = {
    name: "Macbook M2",
    price: 125000,
    descrption: "the new macbook",
    rating : 4.8,
    
    display:function(){
        console.log(this);
    }
}
macbook.display();
iphone.display();
