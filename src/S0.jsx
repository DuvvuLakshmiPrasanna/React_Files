import React from "react";

const S0=()=>{

    const Respond=()=>{
        const name=document.getElementById("name")
        console.log(name.value)
        const rollnum=document.getElementById("rollnum")
        console.log(rollnum.value)
        const Email=document.getElementById("Email")
        console.log(Email.value)
        const number=document.getElementById("number")
        console.log(number.value)
        const age=document.getElementById("age")
        console.log(age.value)
    }

    return(
        <>
        <h1>Application Form</h1> 
    
        <input id="name" type="text" placeholder="Enter your name: "/><br/>
        <label>RollNumber: </label>
        <input id="rollnum" type="text" placeholder="Enter your rollnumber: "/><br/>
        <label>E-Mail: </label>
        <input id="Email" type="text" placeholder="Enter your E-mail: "/><br/>
        <label>Phonenumber: </label>
        <input id="number" type="number" placeholder="Enter your phonenumber "/><br/>
        <label>Age: </label>
        <input id="age" type="number" placeholder="Enter your age: "/><br/>

        <button onClick={Respond}>Submit</button>
        </>
    )
}

export default S0;