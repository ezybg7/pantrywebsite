import './register.css'
import Navbar from '../../../components/navbar'

const Login = () => {
  return ( 
    <div>
      <Navbar/>
      <title>Pantry | Login</title>
      <h1>Login Page</h1>
      <div class="container">
        <div class="text">Register</div>
        <form action="#">
            <div class="data">
                <label for="name">Username</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div class="data">
                <label for="email">Email</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div class="data">
                <label for="password">Password</label>
                <input type="password" name="password" id="password"/>
            </div>
            <div class="data">
                <label for="confirm_password">Confirm Password</label>
                <input type="confirm_password" name="confirm_password" id="confirm_password"/>
            </div>
            <div class="btn">
                <button type="submit">Register</button>
            </div>
            <div class="signup-link">
                Already a member?
                <a href="/login">Login now</a>
            </div>
        </form>
    </div>
    </div>
   );
}
 
export default Login;