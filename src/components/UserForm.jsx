import { useState } from "react"
export function UserForm(){
    const [input, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [inputError, setInputError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const handleChange = (e) =>{
        const {value, name, minLength} = e.target
        const error = value.length < minLength && value.length !== 0 ? `${name} must be al menos ${minLength} characters` : ""
        setInputs({
            ...input,
            [name]: value
        });
        setInputError({
            ...inputError,
            [name]: error
        })
    }
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" minLength={2} onChange={(handleChange)} />
                    <p>
                        {inputError.firstName}
                    </p>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" minLength={2} onChange={(handleChange)} />
                    <p>
                        {inputError.lastName}
                    </p>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" minLength={5}  onChange={(handleChange)} />
                    <p>
                        {inputError.email}
                    </p>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" minLength={8} onChange={(handleChange)} />
                    <p>
                        {inputError.password}
                    </p>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" minLength={8} onChange={(handleChange)} />
                    <p>
                        {inputError.confirmPassword}
                    </p>
                </div>
            </form>
        </>
    )
}