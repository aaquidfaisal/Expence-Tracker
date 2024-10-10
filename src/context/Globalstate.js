import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer'

const intialState= {
    transactions:[
        {id:1,text:'flower',amount :-20},
        {id:2,text:'salary',amount:300},
        {id:3,text:"book",amount:-10},
        {id:4,text:'camera',amount:150}
    ]
}

export const GlobalContext = createContext(intialState);


export const GlobalProvider = ({children})=>{
    const[state,dispatch]= useReducer(AppReducer,intialState)

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}