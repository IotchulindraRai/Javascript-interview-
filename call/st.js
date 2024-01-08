
let name2={
    firstname:"chulindra",
    lastname:"Rai"
}
let printFullName = function(){
    console.log(this.firstname + this.lastname );
}


 printFullName.call(name2);
  let namew ={
    firstname: "Sachin",
    lastname : "tendicular",
        
    }
    printFullName.call(namew);
  //output st.js:6 chulindraRai
 // st.js:6 Sachintendicular
