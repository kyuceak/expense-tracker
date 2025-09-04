import { StyleSheet, Text, View } from "react-native";
import ExpenseList from "../components/ExpensesList/ExpenseList";

function AllExpensesScreen(){
    return <ExpenseList expensesPeriod="Total"/>
}


const styles = StyleSheet.create({
     rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AllExpensesScreen;