import { StyleSheet, Text, View } from "react-native";

function ExpenseItem() {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.ExpenseName}>
            Another Book
        </Text>
        <Text style={styles.dateText}>
            2022-2-18
        </Text>
      </View>
      <View style={styles.priceBox}>
        <Text style={styles.priceText}>
            18.59
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        padding: 15,
        backgroundColor: "#5c1cd4ff",
        borderRadius: 12
    },
    ExpenseName: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white"
    },
    dateText: {
        color:"white",
        fontSize: 14,
    },
    priceBox:{
        backgroundColor: "white",
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 8
    },
    priceText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#331865ff",
    }

    
});

export default ExpenseItem;
