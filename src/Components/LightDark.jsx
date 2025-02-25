import { useState } from "react"

const LightDark=()=>{
    const [theme, setTheme] = useState('light')

    const toggleTheam=()=>{
        setTheme (theme==='light'?'dark':'light')
    }
    return(
        <>
        <div className={`app ${theme}`}></div>
        <button onClick={toggleTheam}>Togel Theme</button>
        <p>Current theme {theme}</p>
        </>
    )
}
export default LightDark