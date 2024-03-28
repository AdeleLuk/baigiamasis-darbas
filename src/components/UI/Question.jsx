import styled from 'styled-components';
import { ActionTypes } from '../../contexts/QuestionsContext';
import { useContext } from 'react';
import QuestionsContext from '../../contexts/QuestionsContext';
import UsersContext from '../../contexts/UsersContext';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
       display: flex;
       justify-content: center;
    
       > div{

        width: 80%;

        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 25px;
        background-color: #9093ee82;
        box-shadow: 15px 15px 30px #191919,
                   -15px -15px 30px #3c3c3c;

        > a{

            text-decoration: none;
            .body{
            background-color: white;
            border-radius: 20px;
            padding: 30px 40px;
            color: black;
          }
            > h1{
            background-color: white;
            border-radius: 20px;
            padding: 10px 5px;
            text-align: center;
            color: black;
            margin: 20px 50px;
          }
        }
        .delete{
            display: flex;
            width: 90%;
            justify-content: flex-end;
            > button {
                background-color: transparent;
                border: none;
            > i{
                font-size: 25px;
                cursor: pointer;
            }
          }
        }
    }
`;

const Question = ({ data }) => {
    const { loggedInUser } = useContext(UsersContext);
    const { setQuestions } = useContext(QuestionsContext);
    return ( 
        <StyledDiv>
            <div>
               <Link to={`/forum/${data.id}`}>
                  <h1>{data.questionTitle}</h1>
                  <p className='body'>{data.questionBody}</p>
               </Link>
                <p className='timestamp'>{data.timestamp}</p>
                {
                    loggedInUser.id === data.userId && 
                       <div className='delete'>
                           <button
                              onClick={() => {
                                 setQuestions({
                                   type: ActionTypes.delete,
                                   id: data.id
                               })
                             }}
                             ><i class="bi bi-trash"></i></button>
                       </div>
                }
            </div>
        </StyledDiv>
     );
}
 
export default Question;