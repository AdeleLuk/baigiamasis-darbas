import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import Question from "../UI/Question";
import UsersContext from "../../contexts/UsersContext";

const StyledSection = styled.section`

 .container {
  display: flex;
  align-items: center;
  > h1 {
    color: white;
    background-color: #9348eed7;
    border-radius: 20px;
    padding: 5px 20px;
    text-align: center;
    width: fit-content;
   }
 }

  > div {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .newQuestion {
    text-align: center;
    margin-bottom: 50px;
    > a {
      text-decoration: none;
      background-color: #116dff;
      border-radius: 15px;
      padding: 10px 20px;
      color: white;
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
      <div className="container">
       <h1>Welcome to Community Forum</h1>
      </div>
      <div>
        <div className="newQuestion">
          {loggedInUser ? (
            <Link to="/forum/newQuestion">Post New Question...</Link>
          ) : (
            <Link to="/users/login">Log in to post a new question</Link>
          )}
        </div>
      </div>
      <div>
        {questions.map((question) => (
          <Question key={question.id} data={question} />
        ))}
      </div>
    </StyledSection>
  );
};

export default Forum;
