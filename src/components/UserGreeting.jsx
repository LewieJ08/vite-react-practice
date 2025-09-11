import { useState } from "react";

function UserGreeting() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <p>{isLoggedIn ? "Welcome Back" : "Please Sign In"}</p>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Log Out" : "Log In"}
            </button>
        </div>
    )
}

export default UserGreeting;