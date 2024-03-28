import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import { useContext } from "react";
import { ActionTypes } from "../../contexts/QuestionsContext";
import QuestionsContext from "../../contexts/QuestionsContext";

const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 90%;

  .author{
    color: grey;
    padding-left: 30px;
  }
  .comment{
    font-style: italic;
    font-size: 20px;
    padding-left: 30px;
  }
  .container{
    display: flex;
    justify-content: flex-end;
    > button{
      margin-right: 10px;
      margin-bottom: 5px;
      border: none;
      background-color: #116DFF;
      color: white;
      border-radius: 20px;
      padding: 5px 10px;
      cursor: pointer;
      > i{
        padding-right: 5px;
      }
    }
  }
`;

const CommentSection = ({ comment, cardId }) => {
  const { loggedInUser, users } = useContext(UsersContext);
  const author = users.find((user) => user.id === comment.authorId);
  const { setQuestions } = useContext(QuestionsContext);

  return (
    <StyledDiv>
      <p className="comment">{comment.text}</p>
      <p className="author">From {author.userName}</p>
      {loggedInUser.id === comment.authorId && (
        <div className="container">
          <button
          onClick={() =>
            setQuestions({
              type: ActionTypes.deleteComment,
              commentId: comment.id,
              cardId: cardId,
            })
          }
        ><i class="bi bi-trash"></i>
          Delete comment
        </button>
        </div>
      )}
    </StyledDiv>
  );
};

export default CommentSection;
