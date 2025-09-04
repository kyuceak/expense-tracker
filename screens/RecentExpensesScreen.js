import { StyleSheet, Text, View } from "react-native";
import ExpenseList from "../components/ExpensesList/ExpenseList";

function RecentExpensesScreen(){
    return <View styles={styles.rootContainer}>
        <ExpenseList expensePeriod="Last 7 days"/>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default RecentExpensesScreen;