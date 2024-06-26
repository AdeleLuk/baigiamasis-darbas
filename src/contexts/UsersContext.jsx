import { createContext, useReducer, useState, useEffect } from "react";

export const UserActionTypes = {
    FetchAll: 'fetches all users',
    register: 'adds new user to all users data '
}

const reducer = (state, action) => {
    switch(action.type){
        case UserActionTypes.FetchAll:
            return action.data;
        case UserActionTypes.register:
            fetch(`http://localhost:8085/users`, {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(action.data)
            });
            return[...state, action.data]
        default:
            return state;
    }
}

const UsersContext = createContext();

const UsersProvider = ({ children }) => {

    const [loggedInUser, setLoggedInUser] = useState(false);
    const[users, setUsers] = useReducer(reducer, []);

    useEffect(() => {
        fetch(`http://localhost:8085/users`)
          .then(res => res.json())
          .then(data => setUsers({
            type: UserActionTypes.FetchAll,
            data: data
          }))
    }, []);

    return(
        <UsersContext.Provider
          value={{
            users,
            setUsers,
            loggedInUser,
            setLoggedInUser
          }}
        >
            { children }
        </UsersContext.Provider>
    )
}

export { UsersProvider }
export default UsersContext;