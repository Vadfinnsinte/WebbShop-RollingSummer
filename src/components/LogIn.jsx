import { NavLink } from "react-router-dom"
import "../css/login-page.css"


const LogIn = () => {
    return (
        <main className="login-main">
            <section>
                <h1>Logga in</h1>
            </section>
            <section className="login-form">
                <div className="login-label-input">
                    <label>Användarnamn</label>
                    <input type="text"></input>
                </div>
                <div className="login-label-input">
                    <label>Lösenord</label>
                    <input type="password" ></input>
                </div>
               <NavLink to="/">
                <button>Logga in</button>
                </NavLink>  
            </section>

        </main>
    )
}

export default LogIn