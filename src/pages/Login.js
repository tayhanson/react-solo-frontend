import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function Login () {
  
  const [email, setEmail] = useState("")

    if (email != "") {
      return <h2>Hello {email}</h2>
    }
    else {
      return (
        <div className="wrapper">
            <h3>Login</h3>
           
            <form action="#" onSubmit={(e) => {
               e.preventDefault();
               console.log(e);
               let email = e.target.email.value;
               let password = e.target.password.value;
             
               let body = {
                 email: email,
                 password: password //bcrypt
               }
             
               fetch('http://localhost:3001/login', {
                 method: 'POST',
                 headers: {
                   'Content-type': 'application/json'
                 },
                 body: JSON.stringify(body)
               }).then(res => res.json()).then(data => {
                 console.log(data)
                 setEmail(data.email)
                //  window.location.replace("/")
               })
  
            }}>
                <div>
                  <TextField
                    name="email"
                    id="email"
                    label="Email"
                    variant="outlined" />
                </div>
                <div>
                  <TextField
                    name="password"
                    type="password"
                    id="password"
                    label="password"
                    variant="outlined" />
                </div>
                <div>
                  <br></br>
                  <Button type="submit" variant="contained">Submit</Button>
                </div>
            </form>
        </div>
      );
    }
  }

export default Login;