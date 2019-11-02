// overreducer 
const initialState ={
    name:"jahangir khhan",
    login:false
}

const Login = (state=initialState, action)=> {
    switch(action.type){
        case "LOGOUT":
            return {
               ...state,
            name : 'danish'
            } 
         case "SIGNIN":
                return {
                   ...state,
                login : !state.login
                } 
    

        default:
            return state;
    }


};
export default Login;