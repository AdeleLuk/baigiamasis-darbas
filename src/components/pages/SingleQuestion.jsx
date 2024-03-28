import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import UsersContext from "../../contexts/UsersContext";
import { ActionTypes } from "../../contexts/QuestionsContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CommentSection from "../UI/CommentSection";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;

  > div {
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 25px;
    background-color: #9093ee82;

    .body {
      background-color: white;
      border-radius: 20px;
      padding: 30px 40px;
      color: black;
    }
    > h1 {
      background-color: white;
      border-radius: 20px;
      padding: 10px 5px;
      text-align: center;
      color: black;
    }
  }
  .delete {
    display: flex;
    width: 90%;
    justify-content: flex-end;
    > button {
      background-color: transparent;
      border: none;
      > i {
        font-size: 25px;
        cursor: pointer;
      }
    }
  }
  .comments {
    margin-top: 30px;
    gap: 20px;
  }
`;

const SingleQuestion = () => {
  const { setQuestions, questions } = useContext(QuestionsContext);
  const { loggedInUser } = useContext(UsersContext);
  const { id } = useParams();
  // const [card, setCard] = useState([]);
  const navigate = useNavigate();
  const card = questions.find((question) => question.id === id);

  // useEffect(() => {
  //   fetch(`http://localhost:8085/questions/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCard(data));
  // }, [id]);

  return (
    <StyledDiv>
      <div>
        <h1>{card.questionTitle}</h1>
        <p className="body">{card.questionBody}</p>
        <p>{card.timestamp}</p>
        {loggedInUser.id === card.userId && (
          <div className="delete">
            <button
              onClick={() => {
                setQuestions({
                  type: ActionTypes.delete,
                  id: card.id,
                });
                navigate("/forum/questions");
              }}
            >
              <i class="bi bi-trash"></i>
            </button>
          </div>
        )}
      </div>
      <div>
        {card.comments?.map((comment) => (
          <CommentSection key={comment.id} comment={comment} cardId={card.id} />
        ))}
      </div>
      {loggedInUser && <form></form>}
    </StyledDiv>
  );
};

export default SingleQuestion;
