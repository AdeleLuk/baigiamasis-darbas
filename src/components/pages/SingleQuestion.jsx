import styled from "styled-components";
import { useContext } from "react";
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
  .forComment {
    margin-top: 30px;
    gap: 20px;
    width: 100%;
    border-radius: 0px;
  }
  .formContainer{
    border-radius: 0px;
    width: 100%;
    > form{
      margin-top: 20px;
      textarea{
        width: 600px;
        height: 200px;
      }
      .submitReply{
        background-color: #126CFF;
        color: white;
        height: 30px;
        border-radius: 20px;
        padding: 5px 15px;
      }
      > div{
        > p{
        background-color:#5d96f1;
        border-radius: 20px;
        text-align: center;
        color: white;
        padding: 10px;
       }
     }
    }
  }
  .form{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 5px;
  }
`;

const SingleQuestion = () => {
  const { setQuestions, questions } = useContext(QuestionsContext);
  const { loggedInUser } = useContext(UsersContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const card = questions.find((question) => question.id === id);

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .required("This field is required")
        .min(10, "At least 10 symbols")
        .max(1000, "Comment is too long")
        .trim()
    }),
    onSubmit: (values) => {
      const newComment = {
        text: values.text,
        id: uuid(),
        authorId: loggedInUser.id,
      };
      setQuestions({
        type: ActionTypes.addComment,
        comment: newComment,
        cardId: card.id
      });
      formik.resetForm();
    }
  });


  return (
    <StyledDiv className="comments">
      {
        questions.length &&
        <>
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
          <div className="forComment">
             <h1>Replies</h1>
               {card.comments?.map((comment) => (
               <CommentSection key={comment.id} comment={comment} cardId={card.id} />
            ))}
          </div>
          {
            loggedInUser &&
            <div className="formContainer">
            <form onSubmit={formik.handleSubmit}>
            <div className="form">
              <textarea
                name="text"
                id="text"
                placeholder="Reply..."
                value={formik.values.text}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
                 {formik.touched.text && formik.errors.text && 
                 <p>{formik.errors.text}</p>
                 }
                  <input className="submitReply" type="submit" value="Reply" />
             </div>
          </form>
          </div>
          }
        </>
      }
    </StyledDiv>
  );
};

export default SingleQuestion;
