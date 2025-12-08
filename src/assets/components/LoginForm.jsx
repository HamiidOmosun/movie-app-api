import React, {useState} from 'react'

const LoginForm = () => {
    const [isloggedIn, setIsloggedIn] = useState(false);

    return (
        <div className="text-white flex flex-col">
            <input type="email" placeholder="enter email"/>
            <input type="password" placeholder="enter password"/>
            <button>sumbit</button>
            <button onClick={()=> {setIsloggedIn(!isloggedIn)}}>
                {isloggedIn ? <p>login</p> : <p>sign up</p>}
            </button>

            {isloggedIn && (
                <div>
                    <input type="text" placeholder="login"/>
                    <input type="text" placeholder="password"/>
                    <button>sumbit</button>
                </div>
            )}


        </div>
    )
}
export default LoginForm
