import { useState } from "react";

function Form(){
    const [email, setEmail] = useState("") 
    const [firstName, setFirstName] = useState("") 
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!email || !firstName){
            setErrorMessage("Missing Information");
            return;
        }
        setErrorMessage("");
        alert(email + " " + firstName)
    } 

    const handleInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if (inputName==="email"){
            setEmail(inputValue);
        }
        else if (inputName==="firstName"){
            setFirstName(inputValue);
        }
        
        console.log(inputName, inputValue)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="email" onChange={handleInputChange}/><br/>
                <input type="text" name="firstName" onChange={handleInputChange}/><br/>
                <button type="submit">ADD EMAIL</button>
                {errorMessage && ( 
                    <div style={{color:"red"}}>ERROR: {errorMessage}</div>
                )}

            </form>
        </div>
    )

}

export default Form;