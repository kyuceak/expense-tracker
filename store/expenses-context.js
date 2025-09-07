import { createContext, useReducer } from "react";



const DUMMY_EXPENSES = [
  {
    id: "e1",
    desc: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    desc: "A pair of trousers",
    amount: 89.29,
    date: new Date("2021-12-01"),
  },
  {
    id: "e3",
    desc: "A book",
    amount: 14.99,
    date: new Date("2025-09-02"),
  },
   {
    id: "e4",
    desc: "A pair of shoes",
    amount: 59.99,
    date: new Date("2025-09-01"),
  },
  {
    id: "e5",
    desc: "A pair of trousers",
    amount: 89.29,
    date: new Date("2025-09-03"),
  },
  {
    id: "e6",
    desc: "A book",
    amount: 14.99,
    date: new Date("2025-09-04"),
  },
    {
    id: "e7",
    desc: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e8",
    desc: "A pair of trousers",
    amount: 89.29,
    date: new Date("2021-12-01"),
  },
  {
    id: "e9",
    desc: "A book",
    amount: 14.99,
    date: new Date("2021-02-19"),
  },
];


export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({desc, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {desc, amount, date}) => {}
});


function expensesReducer(state, action){
    switch (action.type){
        case "ADD":
            const id = new Date().toString + Math.random().toString();
            return [{ ...action.payload, id: id},...state]
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

    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
    // expensesState where we hold our state, its destroyed and created again when-
    // a new action is dispatched
    function addExpense(expenseData) {
        dispatch({type: "ADD", payload: expenseData}); // here we will pass the action parameter in expensesReducer
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
        deleteExpense,
        updateExpense
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}


export default ExpensesContextProvider;