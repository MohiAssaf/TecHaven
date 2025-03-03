export default function Register(){
    return(
        <div>
        <h1>Register Page</h1>

        <form>
            <input type="text" placeholder="Username" className="border p-2"/>
            <input type="email" placeholder="Email" className="border p-2"/>
            <input type="password" placeholder="Password" className="border p-2"/>
            <input type="password" placeholder="Repeat Password" className="border p-2"/>
            <button type="submit">Register</button>
        </form>
    </div>
    )
}