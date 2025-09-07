import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";
import ExpenseSummary from "./ExpenseSummary";
import { GlobalStyles } from "../../constants/styles";

function renderExpenseItem(itemData) {
  const item = itemData.item;

  return (
    <ExpenseItem
      id={item.id}
      title={item.desc}
      date={item.date.toISOString().substring(0, 10)}
      amount={item.amount}
    />
  );
}

function ExpenseList({ expenses, expensesPeriod, fallBackText }) {
  let content = <Text style={styles.infoText}>{fallBackText}</Text>;
  return (
    <View style={styles.rootContainer}>
      {expenses.length > 0 ? (
        <>
          <ExpenseSummary
            expenses={expenses}
            periodName={expensesPeriod}
          />
          <FlatList
            style={styles.listContainer}
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
          />
        </>
      ) : (
        content
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
  },
});

export default ExpenseList;
