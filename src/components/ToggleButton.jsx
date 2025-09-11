import { useState } from "react";

function ToggleButton() { 
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>
                {toggle ? "Turn OFF" : "Turn ON"}
            </button>
        </div>
    )
}

export default ToggleButton;