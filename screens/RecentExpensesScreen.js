import { StyleSheet, Text, View } from "react-native";

function RecentExpensesScreen(){
    return <View styles={styles.rootContainer}>
        <Text>Hi this is recent Expenses</Text>
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