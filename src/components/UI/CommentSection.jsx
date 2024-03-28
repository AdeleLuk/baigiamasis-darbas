import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import { useContext } from "react";
import { ActionTypes } from "../../contexts/QuestionsContext";
import QuestionsContext from "../../contexts/QuestionsContext";

const StyledDiv = styled.div`
  background-color: white;
`;

const CommentSection = ({ comment, cardId }) => {
  const { loggedInUser, users } = useContext(UsersContext);
  const author = users.find((user) => user.id === comment.authorId);
  const { setQuestions } = useContext(QuestionsContext);

  return (
    <StyledDiv>
      <p>{comment.text}</p>
      <p>From {author.userName}</p>
      {loggedInUser.id === comment.authorId && (
        <button
          onClick={() =>
            setQuestions({
              type: ActionTypes.deleteComment,
              commentId: comment.id,
              cardId: cardId,
            })
          }
        >
          Delete comment
        </button>
      )}
    </StyledDiv>
  );
};

export default CommentSection;
