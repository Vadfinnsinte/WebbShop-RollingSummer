import { NavLink, useNavigate } from "react-router-dom"
import "../css/login-page.css"
import { useState } from "react"
import { useProductStore } from "../data/store"



const LogIn = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [validUser,setValidUser] = useState(false)
    const [validPassword,setValidPassword] = useState(false)
    const navigate = useNavigate()
    
    const login = useProductStore(state => state.login)
    
    const error = "Vänligen fyll i fältet"
    const isUserValid = () => {
        setValidUser(user !== "");
        setValidPassword(password !== "");
    }
    
    const handleLogIn = () => {
         
        const loggedIn = login(user,password)
        // const loggedIn = useProductStore.getState().login(user, password)
        
        if(loggedIn) {
            navigate("/")
        }
        else {
            console.log("Fel lösen eller användarnamn");
        }
    }
    const handleEnter = (event) => {
        if(event.key === "" && validUser)
        handleLogIn()
    }
    
    
    return (
        <main className="login-main">
        <div className="login-placement">   
        <section>
        <h1>Logga in</h1>
        </section>
        <section className="login-form">
        <div className="login-label-input">
        <label>Användarnamn</label>
        <input  onKeyUp={handleEnter} value={user} onChange={(event) => setUser(event.target.value)} onBlur={isUserValid} type="text"></input>
        <p className={!validUser ? "login-error" : "login-correct" }> {error}</p>
        </div>
        <div className="login-label-input">
        <label>Lösenord</label>
        <input  onKeyUp={handleEnter} value={password} onBlur={isUserValid} onChange={(event) => setPassword(event.target.value)} type="password" ></input>
        <p  className={!validPassword ? "login-error" : "login-correct"}> {error}</p>
        </div>
        {/* <NavLink to="/"> */}
        <button onClick={handleLogIn}>Logga in</button>
        {/* </NavLink>   */}
        </section>
        
            </div> 
        </main>
    )
}

export default LogIn