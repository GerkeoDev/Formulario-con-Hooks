import { useState } from "react"
import { UserResults } from "./UserResults"
export function UserForm(){
    const [input, setInputs] = useState({
        firstName: "",
    })
    const cambiarValor = (e) =>{
        setInputs({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <form>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" onChange={(cambiarValor)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" id="lastName" onChange={(cambiarValor)} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" onChange={(cambiarValor)} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={(cambiarValor)} />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange={(cambiarValor)} />
                </div>
                
            </form>
            <UserResults input={input}/>
        </>
    )
}