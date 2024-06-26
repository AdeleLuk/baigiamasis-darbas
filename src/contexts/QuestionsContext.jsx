import { createContext, useEffect, useReducer } from "react";

const QuestionsContext = createContext();

export const ActionTypes = {
  FetchAll: "fetch all questions",
  newQuestion: "add to new question",
  delete: "delete question card",
  deleteComment: "delete comment",
  addComment: 'add new comment'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.FetchAll:
      return action.data;

    case ActionTypes.newQuestion:
      fetch(`http://localhost:8085/questions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.data),
      });
      return [...state, action.data];

    case ActionTypes.delete:
      fetch(`http://localhost:8085/questions/${action.id}`, {
        method: "DELETE",
      });
      return state.filter((question) => question.id !== action.id);
    case ActionTypes.addComment:
      const cardToAddComment = state.find((el) => el.id === action.cardId);
      const commentedCard = {
        ...cardToAddComment,
        comments: cardToAddComment.comments ? [...cardToAddComment.comments, action.comment] : [action.comment]
      };
      fetch(`http://localhost:8085/questions/${action.cardId}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentedCard),
      });
      return state.map(el => {
        if (el.id === action.cardId) {
          return commentedCard;
        } else {
          return el;
        }
      });

    case ActionTypes.deleteComment:
      const cardToChange = state.find(el => el.id === action.cardId);
      const changedCard = {
        ...cardToChange,
        comments: cardToChange.comments.filter(
          (comment) => comment.id !== action.commentId
        ),
      };
      fetch(`http://localhost:8085/questions/${action.cardId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(changedCard),
      });
      return state.map((el) => {
        if (el.id === action.cardId) {
          return changedCard;
        } else {
          return el;
        }
      });
    default:
      return state;
  }
};

const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useReducer(reducer, []);

  useEffect(() => {
    fetch(`http://localhost:8085/questions`)
      .then((res) => res.json())
      .then((data) =>
        setQuestions({
          type: ActionTypes.FetchAll,
          data: data,
        })
      );
  }, []);
  return (
    <QuestionsContext.Provider
      value={{
        questions,
        setQuestions,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export { QuestionsProvider };
export default QuestionsContext;
