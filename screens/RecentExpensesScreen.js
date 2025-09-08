import { StyleSheet, Text, View } from "react-native";
import ExpenseList from "../components/ExpensesList/ExpenseList";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";

function RecentExpensesScreen(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const expensesCtx = useContext(ExpensesContext);
    

    useEffect(() => {
        async function getExpenses(){
            setLoading(true);
            try {
                const expenses = await fetchExpenses();
                expensesCtx.setExpenses(expenses);
            } catch (error) {
                setError("Could not fetch expenses!");
            }

           setLoading(false);
        }

        getExpenses();

    }, []);


    function errorHandler(){
        setError(null);
    }

     if (error && !loading ){
     
        return <ErrorOverlay message={error} onConfirm={errorHandler}/>
    }
 
    if (loading){
        return <LoadingOverlay></LoadingOverlay>
    }


   

    const recentExpenses = expensesCtx.expenses.filter((expense) => {

        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today,7);

        console.log("dates: ",expense.date," ",date7DaysAgo)
        return new Date(expense.date) > date7DaysAgo;
    });

    console.log(recentExpenses);

    return <ExpenseList expenses={recentExpenses} expensesPeriod="Last 7 days" fallBackText="There is no recent expenses"/>

}

const styles = StyleSheet.create({
   
})

export default RecentExpensesScreen;