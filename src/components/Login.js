import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const[user,setUser] = useState({
        name:"",
        password:""
    })


    const handleUser = e =>{
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
        console.log(user);
    }


    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6  col-md-6 col-sm-12">
                        <div className="left" >
                            <h2> New to our Shop?
                            </h2>

                            <p>There are advances being made in science and 
                                technology everyday, and a good example of this is the</p>
                                <button>
                            create an accout
                        </button>
                            
                        </div>
                       

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="right" >
                    <h2> Welcome back!
                            </h2>
                            <h2>Please sign in now</h2>
                            <form>
                                <input type="type"
                                className="typipingInput"  
                                placeholder="Username/email" 
                                name="name"
                                value={user.name}
                                onChange={handleUser}/>

                                <input className="typipingInput" type="type"  
                                placeholder="Password" 
                                name="password"
                                value={user.password}
                                onChange={handleUser}


                                />
                                <input
                            className="checkInput" 
                             type="checkbox" name="remember" value="" /> Remeber me
                                 
                                <button>Log in</button>
                            </form>
                            <p> <Link to="/">forgot password?</Link> </p>
                            

                           
                        
                            
                            </div>
                            

                        

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Login
