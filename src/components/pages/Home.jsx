import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`

margin-top: 50px;
   > h1{
    text-align: center;
   }
   .description{
    display: flex;
    justify-content: center;
    > p{
        width: 500px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
        font-style: italic;
        line-height:30px;
    }
   }
   > .button{
    display: flex;
    justify-content: center;
    > a{
        >button{
            background-color: #116DFF;
            color: white;
            padding: 10px;
        }
    }
   }
`;

const Home = () => {
    return ( 
        <StyledDiv>
            <h1>Your Go-To Platform for Dialogue</h1>
            <div className='description'>
                <p>At our forum, we offer a vibrant online community where individuals from diverse backgrounds come together to exchange ideas, share experiences, and engage in meaningful discussions. Whether you're seeking advice, looking to connect with like-minded individuals, or simply exploring new perspectives, our platform provides a welcoming space for all. </p>
            </div>
            <div className='button'>
               <Link to="forum/questions">
                   <button>Go to FORUM</button>
               </Link>
            </div>
        </StyledDiv>
     );
}
 
export default Home;