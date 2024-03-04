
export function UserResults ({input}) {
    return(
        <>
            <strong>Your Form Data</strong>
            <p htmlFor="firstName">First Name: {input.firstName}</p>
            <p htmlFor="lastName">Last Name: {input.lastName}</p>
            <p htmlFor="email">Email: {input.email}</p>
            <p htmlFor="password">Password: {input.password}</p>
            <p htmlFor="confirmPassword">Confirm Password: {input.confirmPassword}</p>
        </>
        
    )
}
