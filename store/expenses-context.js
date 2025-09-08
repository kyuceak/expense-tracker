import { createContext, useReducer } from "react";





export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({desc, amount, date}) => {},
    setExpenses: (expenses) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {desc, amount, date}) => {}
});


function expensesReducer(state, action){
    switch (action.type){
        case "ADD":
            return [ action.payload, ...state]
        case "SET":
            const inverted = action.payload.reverse();
            return inverted;
        case "UPDATE":
            const updatableExpenseIndex = state.findIndex((item) => item.id === action.payload.id);
            const updateableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updateableExpense, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
           
            return updatedExpenses;
        case "DELETE":
            return state.filter((item) => item.id !== action.payload)
        default:
            return state;
    }
}

function ExpensesContextProvider({children}){

    const [expensesState, dispatch] = useReducer(expensesReducer, []);
    // expensesState where we hold our state, its destroyed and created again when-
    // a new action is dispatched
    function addExpense(expenseData) {
        dispatch({type: "ADD", payload: expenseData}); // here we will pass the action parameter in expensesReducer
    }

    function setExpenses(expenses) {
        dispatch({type: "SET", payload: expenses})
    }

    function deleteExpense(id){
        dispatch({ type: "DELETE", payload: id});
    }
 
    function updateExpense(id, expenseData){
        dispatch({type: "UPDATE", payload : {id: id, data: expenseData }});
    }

    const value = {
        expenses: expensesState,
        addExpense,
        setExpenses,
        deleteExpense,
        updateExpense
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}


export default ExpensesContextProvider;