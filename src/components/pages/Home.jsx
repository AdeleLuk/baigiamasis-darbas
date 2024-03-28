import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`

margin-top: 50px;

   div{
    display: flex;
    justify-content: center;
    > h1{
    text-align: center;
    background-color: #116cffbf;
    color: white;
    border-radius: 20px;
    width: 400px;
   }
   }
   .description{
    display: flex;
    justify-content: center;
    > p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: bold;
        font-style: italic;
        line-height:30px;
        margin: 10px 250px;
        padding: 20px;
        color: white;
        border-radius: 20px;
        background: linear-gradient(90deg, #d5a8f3e8 0%, #e27c7c 50%, #4e7ee4 100%);
        box-shadow: 15px 15px 30px #191919,
                   -15px -15px 30px #3c3c3c;
    }
   }
   > .button{
    display: flex;
    justify-content: center;
    > a{
        >button{
            background-color: #116DFF;
            color: white;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: bold;
            padding: 10px;
            border-radius: 20px;
            padding: 10px 20px;
        }
    }
   }
`;

const Home = () => {
    return ( 
        <StyledDiv>
            <div>
            <h1>All things chit-chat</h1>
            </div>
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