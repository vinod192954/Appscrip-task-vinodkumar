import {Component} from 'react' 
import Cookies from "js-cookie"

class LoginPage extends Component{
    state = {username:'',password:''} 


    onChangeUsername=(event)=>{
        this.setState({username:event.target.value})
    }
    onChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }
   
    getRouteToHome=(token)=>{
     Cookies.set("jwt_token",token) 
     const {history} = this.props 
     history.replace("/Home")
    }
     
    onSubmitUserDetails=async(event)=>{
        const {username,password} = this.state
        event.preventDefault() 
        const url ='https://fakestoreapi.com/auth/login' 
        const userDetails = {username,password} 
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userDetails)
        }
        const response = await fetch(url,options) 
        const data = await response.json()
        const {token}  = data 
        if (response.ok===true){
            this.getRouteToHome(token)
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitUserDetails}>
                    <div>
                        <label>Username</label>
                        <input type="text" 
                        onChange={this.onChangeUsername} placeholder='Enter Username'/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                        onChange={this.onChangePassword}
                         placeholder='Enter Password'/>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default LoginPage