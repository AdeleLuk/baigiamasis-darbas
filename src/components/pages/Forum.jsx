import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useContext } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import Question from "../UI/Question";
import UsersContext from '../../contexts/UsersContext';

const StyledSection = styled.section`
    > h1{
        text-align: center;
    }

    > div{
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    .newQuestion{
        text-align: center;
        margin-bottom: 50px;
        > a{
            text-decoration: none;
            background-color: #116DFF;
            border-radius: 15px;
            padding: 10px 20px;
            color:white;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: bold;
        }
    }
`;

const Forum = () => {

    const { questions } = useContext(QuestionsContext);
    const { loggedInUser } = useContext(UsersContext);

    return ( 
        <StyledSection>
            <h1>Forum</h1>
            <div>
               <div className='newQuestion'>
            {
                loggedInUser ?
                <Link to='/forum/newQuestion'>Post New Question...</Link> 
                :
                <Link to='/users/login'>Log in to post a new question</Link>
            }
                </div>
            </div>
             {/* <button onClick={(() => filterDate())}>Filter</button> */}
            <div>
                 {
                    questions.map(question => 
                        <Question
                           key={question.id}
                           data={question}
                        />
                     )
                 }
            </div>
        </StyledSection>
     );
}
 
export default Forum;