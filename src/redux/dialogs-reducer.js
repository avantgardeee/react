const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState={
    messages:[
        {id:1, message:'Hi'},
        {id:2, message:'How are you?'},
        {id:3, message:'Yo'}
    ],
    dialogs:[
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sasha'},
        {id:5, name:'Viktor'},
        {id:6, name:'Valera'}
    ],
    newMessageText:''
};

const dialogsReducer=(state=initialState,action)=> {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state;
        default:
            return state;

    }
}
export const addMessageActionCreator=()=>({type: ADD_MESSAGE})
export const UpdateNewMessageTextActionCreator=(text)=>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage:text})

export default dialogsReducer;