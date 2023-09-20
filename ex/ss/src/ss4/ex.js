import { useEffect, useState } from "react";

export function Greetingss () {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const handleFirstNameChange=(even) => {
            setFirstName(even.target.value)
    }
    const handleLastNameChange = (even) => {
        setLastName(even.target.value)
    }
    // useEffect(() => {
    
    // },[])

    return(
        <div>
                    <p>First Name</p>
                    <input
                    value={firstName}
                    onChange={(even) => handleFirstNameChange(even)}
                    />
                    <br/>
                    <p>Last Name</p>
                    <input
                    value={lastName}
                    onChange={(even) => handleLastNameChange(even)}
                    />
                    <p>
                        Hello, {' '}
                        <span>
                            {firstName} {lastName}
                        </span>
                    </p>
                </div>
    )
}