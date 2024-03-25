import { createContext, useEffect, useReducer } from 'react';

const QuestionsContext = createContext();

export const ActionTypes = {
    FetchAll: 'fetch all questions'
}

const reducer = (state, action) => {
    switch(action.type){
        case ActionTypes.FetchAll:
            return action.data;
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