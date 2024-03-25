import { useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`

    background-color: #116DFF;
    
    >div {
        height: 100px;
        display: flex;
        align-items: center;
        > img{
        height: 100%;
     }
     > nav{
         > ul{
            display: flex;
            gap:50px;
            list-style-type: none;
             > li{
                a {
                    text-decoration: none;
                    color: white;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    font-weight: bold;
                }
             }
         }
     }
    }
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div:nth-child(3){
        margin-right: 20px;
    }
    .loggedIn{
        > button{
            background-color: white;
            border-radius: 10px;
            border: none;
            color: #116DFF;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: bold;
            padding: 5px;
            margin-left: 10px;
        }
        > p{
            color: white;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: bold;
        }
    } 
`;

const Header = () => {

    const { loggedInUser, setLoggedInUser } = useContext(UsersContext);
    const navigate = useNavigate();
    return ( 
        <StyledHeader>
            <div>
                <img src="https://static.wixstatic.com/media/1aa858_8e4e2c2a9a7c496b8fd8da46f15b4782~mv2.jpg" alt="forum logo"/>
            </div>
            <div>
              <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='forum/questions'>Forum</NavLink>
                    </li>
                </ul>
              </nav>
            </div>
            {
                loggedInUser ?
                <div className='loggedIn'>
                    <p>{loggedInUser.userName}</p>
                    <button
                      onClick={() => {
                        setLoggedInUser(false);
                        navigate('/');
                      }}
                    >Log out</button>
                </div> :
                <div>
                  <nav>
                     <ul>
                       <li>
                        <NavLink to='users/login'>Log In</NavLink>
                       </li>
                       <li>
                        <NavLink to='users/register'>Register</NavLink>
                       </li>
                    </ul>
                  </nav>
               </div>
            }
        </StyledHeader>
     );
}
 
export default Header;