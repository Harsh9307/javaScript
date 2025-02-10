var obj ={
    name : "Harsh",
    company: "Darwinbox",
    display:()=>{
        console.log(this.name,"works in",this.company);
    }
}

var obj1={
    name:"Harsh",
    company: "Darwinbox",
    display:()=>{
        setTimeout(()=>{
            console.log(this.name,"works in",this.company);
        },3000)
    }
}

var obj2 ={
    name:"Harsh",
    company: "Darwinbox",
    display: function(){
        setTimeout(()=>{
            console.log(this.name,"works in",this.company);
        },3000)
    }
}

obj2.display()