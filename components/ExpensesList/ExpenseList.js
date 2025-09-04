import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";
import ExpenseSummary from "./ExpenseSummary";
import { GlobalStyles } from "../../constants/styles";

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
    date: new Date("2021-02-19"),
  },
   {
    id: "e4",
    desc: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e5",
    desc: "A pair of trousers",
    amount: 89.29,
    date: new Date("2021-12-01"),
  },
  {
    id: "e6",
    desc: "A book",
    amount: 14.99,
    date: new Date("2021-02-19"),
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

function renderExpenseItem(itemData) {
  const item = itemData.item;
  console.log(item);
  return (
    <ExpenseItem
      title={item.desc}
      date={item.date.toISOString().substring(0, 10)}
      amount={item.amount}
    />
  );
}

function ExpenseList({ expenses, expensesPeriod }) {
  return (
    <View style={styles.rootContainer}>
      <ExpenseSummary
        expenses={DUMMY_EXPENSES}
        periodName={expensesPeriod}
      />
 
        <FlatList 
        style={styles.listContainer}

          data={DUMMY_EXPENSES}
          renderItem={renderExpenseItem}
          keyExtractor={(item) => item.id}
       
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  },

});

export default ExpenseList;
