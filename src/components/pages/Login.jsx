import styled from "styled-components";
import * as Yup from 'yup';
import UsersContext from "../../contexts/UsersContext";
import { useContext, useState } from "react";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  border-radius: 20px;
  background-color: #9093ee82;
  > form{
    > div{
      > p{
        background-color:#5d96f1;
        border-radius: 20px;
        text-align: center;
        color: white;
        padding: 10px;
      }
    }
  }
  > h1 {
    color: white;
    background-color: #9348eed7;
    border-radius: 20px;
    padding: 5px 20px;
  }
    input {
      width: 300px;
      margin-bottom: 20px;
      border-radius: 20px;
      border: 1px solid grey;
      padding: 10px 20px;
    }
    .login {
      padding: 10px 15px;
      border-radius: 15px;
      background-color: #116dff;
      color: white;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      width: 250px;
      border: none;
    }
    .container {
      display: flex;
      justify-content: center;
    }
    > p{
        background-color:#5d96f1;
        border-radius: 20px;
        text-align: center;
        color: white;
        padding: 10px;
      }
`;

const Login = () => {

    const navigate = useNavigate();
    const [loginFailed, setLoginFailed] = useState(false);
    const { users, setLoggedInUser } = useContext(UsersContext);
    const formik = useFormik({
        initialValues:{
            userName: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);
            console.log(users);

          const loggedInUser =  users.find(user => user.userName === values.userName && user.password === values.password);

          if(loggedInUser === undefined){
            setLoginFailed(true);
          } else {
            setLoggedInUser(loggedInUser);
            navigate('/forum/questions');
          }
        },
        validationSchema: Yup.object({
            userName: Yup.string()
              .required('Please enter your user name!')
              .trim(),
            password: Yup.string()
              .required('Please enter your password!')
              .trim()
        })
    });

    return ( 
        <StyledSection>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                       type="text"
                       name="userName"
                       id="userName"
                       placeholder="Username"
                       value={formik.values.userName}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.userName && formik.errors.userName &&
                        <p>{formik.errors.userName}</p>
                    }
                </div>
                <div>
                    <input
                       type="password"
                       name="password"
                       id="password"
                       placeholder="Password"
                       value={formik.values.password}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.password && formik.errors.password &&
                        <p>{formik.errors.password}</p>
                    }
                </div>
                <div className="container">
                <input className="login" type="submit" value="Log in" />
                </div>
            </form>
            {
                loginFailed && <p>Failed to log in. Please try again</p>
            }
        </StyledSection>
     );
}
 
export default Login;