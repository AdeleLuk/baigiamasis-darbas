import { createContext, useEffect, useReducer } from 'react';

const QuestionsContext = createContext();

export const ActionTypes = {
    FetchAll: 'fetch all questions',
    newQuestion: 'add to new question',
    delete: 'delete question card'
}

const reducer = (state, action) => {
    switch(action.type){
        case ActionTypes.FetchAll:
            return action.data;
        case ActionTypes.newQuestion:
            fetch(`http://localhost:8085/questions`, {
              method: "POST",
              headers: {
                "Content-Type":"application/json"
              },
              body: JSON.stringify(action.data)
            });
            return[...state, action.data];
          case ActionTypes.delete:
            fetch(`http://localhost:8085/questions/${action.id}`,{
              method: "DELETE"
            });
            return state.filter(question => question.id !== action.id);
        default:
            return state;

    }
}

const QuestionsProvider = ({ children }) => {

    const [questions, setQuestions] = useReducer(reducer, []);

    useEffect(()=>{
        fetch(`http://localhost:8085/questions`)
          .then(res => res.json())
          .then(data => setQuestions({
            type: ActionTypes.FetchAll,
            data: data
          }));

    },[]);
    return(
        <QuestionsContext.Provider
          value={{
            questions,
            setQuestions
          }}
        >
          { children }
        </QuestionsContext.Provider>
    )
}

export { QuestionsProvider };
export default QuestionsContext;