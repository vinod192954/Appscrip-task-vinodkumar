import {Component} from 'react'
import {Redirect} from "react-router-dom"
import Cookies from "js-cookie"
import './index.css'
class LoginPage extends Component{
    state = {username:'',password:'',isLoading:false} 


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
        event.preventDefault() 
        this.setState({isLoading:true})
        const {username,password} = this.state
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
            this.setState({isLoading:false})
            
        }
    }

    render(){
        const {username,password} = this.state
        const jwtToken = Cookies.get("jwt_token")
        if (jwtToken!==undefined){
            return <Redirect to="/Home" />
        }
        return(
            <div className='main-container' >
                  <form className='login-container' onSubmit={this.onSubmitUserDetails}>
                    <div className='username-container'>
                        <label>Username</label>
                        <br/>
                        <input type="text" value={username}
                        onChange={this.onChangeUsername} placeholder='Enter Username'/>
                    </div>
                    <div className='password-container'>
                        <label>Password</label>
                        <br/>
                        <input type="password"
                        value={password}
                        onChange={this.onChangePassword}
                         placeholder='Enter Password'/>
                    </div>
                    <div className='button-container'>
                        <button type="submit">Login</button>
                    </div>
                </form>
                
            </div>
        )
    
    }
}
export default LoginPage