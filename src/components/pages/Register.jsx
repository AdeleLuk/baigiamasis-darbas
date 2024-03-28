import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { UserActionTypes } from '../../contexts/UsersContext';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { useContext, useState } from 'react';
import UsersContext from '../../contexts/UsersContext';

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
    .register {
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

const Register = () => {

    const navigate = useNavigate();
    const [nameTaken, setNameTaken] = useState(false);
    const { users, setUsers, setLoggedInUser } = useContext(UsersContext);

    const formik = useFormik ({
        initialValues:{
            userName: "",
            password: "",
            passwordRepeat: ""
        },
        onSubmit: (values) => {

          if(users.find(user => user.userName === values.userName)){
            setNameTaken(true);
          } else {
            const newUser = {
                id: uuid(),
                userName: values.userName,
                password: values.password
            };
            setUsers({
                type: UserActionTypes.register,
                data: newUser
            });
            setLoggedInUser(newUser);
            navigate('/');
          }
        },
        validationSchema: Yup.object({
            userName: Yup.string()
              .min(3, 'Must be at least 8 symbols!')
              .max(20, 'User name is too long!')
              .required('This field is required!')
              .trim(),
            password: Yup.string()
              .required('This field is required!')
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
              'Password must be at least: one lower case letter, one upper case letter, one number, one special character, lenght must be between 8 and 25'
            )
             .trim(),
            passwordRepeat: Yup.string()
              .oneOf([Yup.ref('password')], 'Passwords does not match!')
              .required('This field is required!')
              .trim()
        })
    });

    return ( 
        <StyledSection>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      placeholder="Enter your user name..."
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
                      id="password"
                      name="password"
                      placeholder="Enter your password..."
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.password && formik.errors.password &&
                        <p>{formik.errors.password}</p>
                    }
                </div>
                <div>
                    <input
                      type="password"
                      id="passwordRepeat"
                      name="passwordRepeat"
                      placeholder="Repeat your password..."
                      value={formik.values.passwordRepeat}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.passwordRepeat && formik.errors.passwordRepeat &&
                        <p>{formik.errors.passwordRepeat}</p>
                    }
                </div>
                <div className='container'>
                <input className='register' type="submit" value="Register" />
                </div>
            </form>
            {
                nameTaken && <p>This username is taken</p>
            }
        </StyledSection>
     );
}
 
export default Register;