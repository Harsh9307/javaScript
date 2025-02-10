const player1={
    firstName: "Virat",
    lastName: "Kohli",
    numberToBat : 3,
    canBowl : false,
    getDetails: function(){
        console.log(this.firstName,this.lastName,"comes to bat at No.",this.numberToBat);
    }
}
const obj = function(){
    console.log(this.getDetails());
}
let x=obj.bind(player1);
x();

