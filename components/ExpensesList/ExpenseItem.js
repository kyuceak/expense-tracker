import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpenseItem({ title, date, amount, onPress }) {
  function expensePressHandler() {}

  return (
    <View style={styles.deneme}>
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{color: "#ccc"}}
    >
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.ExpenseName}>{title}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View style={styles.priceBox}>
          <Text style={styles.priceText}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: GlobalStyles.colors.primary500,

   
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  ExpenseName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  dateText: {
    color: "white",
    fontSize: 14,
  },
  priceBox: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 8,
    minWidth: 80,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
  pressed: {
    opacity: 0.75,
  },
  deneme: {
    overflow: "hidden",
        borderRadius: 12,
         marginVertical: 8,
  }
});

export default ExpenseItem;
