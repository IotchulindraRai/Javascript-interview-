
let name2={
    firstname:"chulindra",
    lastname:"Rai"
}
let printFullName = function(hometown,state){
    console.log(this.firstname + this.lastname +" from " + hometown );
}


 printFullName.call(name2,["Gaighat","province"]);
  let namew ={
    firstname: "Sachin",
    lastname : "tendicular",
        
    }
    printFullName.apply(namew,["Mg road","karnataka"]);
  //output st.js:6 chulindraRai
 // st.js:6 Sachintendicular
