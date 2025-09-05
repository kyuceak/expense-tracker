import { StyleSheet, Text, View } from "react-native";
import ExpenseList from "../components/ExpensesList/ExpenseList";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpensesScreen(){
    const expensesCtx = useContext(ExpensesContext); // burada expenseleri passlemek için contextten expenseleri çekiyoruz
    return <ExpenseList expenses={expensesCtx.expenses} expensesPeriod="Total" fallBackText="There is no  expenses"/>
}


const styles = StyleSheet.create({
    
})

export default AllExpensesScreen;