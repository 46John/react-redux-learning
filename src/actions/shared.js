import { _getQuestions, _getUsers } from "../utils/_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

function getInitialData(){
    return Promise.all([_getUsers(), _getQuestions()])
        .then(([users, questions]) => ({users, questions}))
}

const AUTHED_ID = 'test';

export function handleInitialData () {
    return (dispatch)=>{
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
                dispatch(setAuthedUser(AUTHED_ID));
            })
    }
}