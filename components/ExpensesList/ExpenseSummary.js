import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpenseSummary({expenses, periodName}) {

  const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
  }, 0);

  return (
    <View style={styles.recentHeader}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.lastTotalPrice}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  recentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 9,
   
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary50,
  },

  period: {
    fontSize: 18,
    color: GlobalStyles.colors.primary400
  },

  lastTotalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500
  },
});

export default ExpenseSummary;
