import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import UsersContext from "../../contexts/UsersContext";
import { ActionTypes } from "../../contexts/QuestionsContext";
import { useParams } from "react-router-dom";

const StyledDiv = styled.div`
       display: flex;
       justify-content: center;
       margin-top: 50px;
    
       > div{

        width: 80%;

        display: flex;
        flex-direction: column;
        align-items: center;

        border: 1px solid black;
        border-radius: 10px;
        background-color: #9093ee82;

    
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
          }
        }
        .delete{
            display: flex;
            width: 500px;
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
`;


const SingleQuestion = () => {

    const { setQuestions } = useContext(QuestionsContext);
    const { loggedInUser } = useContext(UsersContext);
    const { id } = useParams();
    const [oneQuestion, setOneQuestion] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8085/questions/${id}`)
          .then(res => res.json())
          .then(data => setOneQuestion(data))
    },[id]);

    return ( 
        <StyledDiv>
          <div>
            <h1>{oneQuestion.questionTitle}</h1>
            <p className="body">{oneQuestion.questionBody}</p>
            <p>{oneQuestion.timestamp}</p>
              {
                loggedInUser.id === oneQuestion.userId && 
                   <div className="delete">
                       <button
                          onClick={() => {
                             setQuestions({
                               type: ActionTypes.delete,
                               id: oneQuestion.id
                           })
                         }}
                         ><i class="bi bi-trash"></i></button>
                   </div>
              }
          </div>
        </StyledDiv>
     );
}
 
export default SingleQuestion;