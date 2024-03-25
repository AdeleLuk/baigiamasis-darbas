import {Link, NavLink} from 'react-router-dom';
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
                    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
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
    
 
`;

const Header = () => {
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
                        <NavLink to='forum/questions'>Questions</NavLink>
                    </li>
                </ul>
              </nav>
            </div>
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
        </StyledHeader>
     );
}
 
export default Header;