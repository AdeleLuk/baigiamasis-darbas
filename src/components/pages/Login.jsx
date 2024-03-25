import styled from "styled-components";
import * as Yup from 'yup';
import UsersContext from "../../contexts/UsersContext";
import { useContext, useState } from "react";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

const StyledSection = styled.section`
> h3{
    text-align: center;
    color: grey;
}

> form{
    text-align: center;
    > div {
        > input{
            width: 200px;
            height: 25px;
            margin-bottom: 10px;
        }
    }
    .submit{
        width: 210px;
        height: 25px;
        background-color: #116DFF;
        color: white;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
        border-radius: 10px;
    }
}
> p{
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    font-style: italic;
    font-size: 14px;
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
              .required('Please enter your user name')
              .trim(),
            password: Yup.string()
              .required('Please enter your password')
              .trim()
        })
    });

    return ( 
        <StyledSection>
            <h3>Login</h3>
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
                <input className="submit" type="submit" value="Log in" />
            </form>
            {
                loginFailed && <p>Failed to log in. Please try again</p>
            }
        </StyledSection>
     );
}
 
export default Login;