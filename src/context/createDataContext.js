import React, { useReducer } from 'react';
export default (reducer, action, initialState) => {
  // nag himu context
  const Context = React.createContext();

  // na children dd ig wrawrap m karuyg na access an data cn
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions = {};
    for (let data in action) {
      //means cn
      /*
            ibisabihin pag add data sa object na an ngaran addPost
            tas an kana balyu action[data] wheis the value sa 
            action data return ()=>{dispatch('add')}
            boundAction[addPost] = ()=>{dispatch('add')}
            addpost:()=>{dispatch('add')}
            */
      //console.log(action);
      boundActions[data] = action[data](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
