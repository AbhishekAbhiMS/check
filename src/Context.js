import { createContext,useReducer } from "react";

export const ThemeContext=createContext();

let reducer=(state,action)=>{
    switch (action.type) {
        case "toggle": return !state;
         default:return state;
            
    }
}


 const ThemeProvider=(props)=>{
    let [state,dispatch]=useReducer(reducer,true)
  
   
    return(
        <ThemeContext.Provider value={{state,dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;