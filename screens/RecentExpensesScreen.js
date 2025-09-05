import { StyleSheet, Text, View } from "react-native";
import ExpenseList from "../components/ExpensesList/ExpenseList";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpensesScreen(){

    const expensesCtx = useContext(ExpensesContext);

    const recentExpenses = expensesCtx.expenses.filter((expense) => {

        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today,7);


        return expense.date > date7DaysAgo;
    });

    return <ExpenseList expenses={recentExpenses} expensesPeriod="Last 7 days" fallBackText="There is no recent expenses"/>

}

const styles = StyleSheet.create({
   
})

export default RecentExpensesScreen;