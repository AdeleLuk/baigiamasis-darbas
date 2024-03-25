import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { UserActionTypes } from '../../contexts/UsersContext';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { useContext, useState } from 'react';
import UsersContext from '../../contexts/UsersContext';

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
            console.log(values);
            console.log(users);

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
              .min(3, 'Must be at least 8 symbols')
              .max(20, 'User name is too long')
              .required('This field is required')
              .trim(),
            password: Yup.string()
              .required('This field is required')
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
              'Password must be at least: one lower case letter, one upper case letter, one number, one special character, lenght must be between 8 and 25'
            )
             .trim(),
            passwordRepeat: Yup.string()
              .oneOf([Yup.ref('password')], 'Passwords does not match')
              .required('This field is required')
              .trim()
        })
    });

    return ( 
        <section>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="userName">Username</label>
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
                    <label htmlFor="password">Password</label>
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
                    <label htmlFor="passwordRepeat">Repeat your password</label>
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
                <input type="submit" value="Register" />
            </form>
            {
                nameTaken && <p>This username is taken</p>
            }
        </section>
     );
}
 
export default Register;