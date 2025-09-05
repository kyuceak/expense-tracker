import { StyleSheet, Text, View } from "react-native";
import ExpenseList from "../components/ExpensesList/ExpenseList";

function RecentExpensesScreen(){
    return <ExpenseList expensesPeriod="Last 7 days"/>

}

const styles = StyleSheet.create({
   
})

export default RecentExpensesScreen;