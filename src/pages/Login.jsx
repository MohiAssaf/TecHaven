export default function Login(){
    return(
        <div>
            <h1>Login Page</h1>

            <form>
                <input type="text" placeholder="Username" className="border p-2"/>
                <input type="password" placeholder="Password" className="border p-2"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}