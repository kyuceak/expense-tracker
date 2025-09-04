import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(){


    return <View style={styles.rootContainer}> 
        <View style={styles.recentHeader}>
            
            <Text>Last 7 days</Text>
            <Text style={styles.lastTotalPrice}>$67.16</Text>
        </View>
        <View style={styles.listContainer}>
            {/* <FlatList/> */}
            <ExpenseItem/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        alignItems: "center",
        paddingTop: 15
    },
  
    recentHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 9,
        width: "90%",
        borderRadius: 8,
       
        backgroundColor: "#ead3f9ff"

    },
    lastTotalPrice: {
        fontSize: 18,
        fontWeight: "bold"
    },
    listContainer: {
        marginTop: 10
    }

});


export default ExpenseList;