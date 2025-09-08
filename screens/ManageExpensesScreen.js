import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";

import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function ManageExpensesScreen({ route, navigation }) {
  const [loading, setLoading] = useState(false);
  const expenseCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    
    expenseCtx.deleteExpense(editedExpenseId);
    setLoading(true);
    await deleteExpense(editedExpenseId);
    setLoading(false);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, expenseData);
      setLoading(true);
      await updateExpense(editedExpenseId,expenseData);
      setLoading(false);
    } else {
      setLoading(true);
      const id_response = await storeExpense(expenseData);
      setLoading(false);
      expenseCtx.addExpense({ ...expenseData, id: id_response });
    }
    navigation.goBack();
  }

  if (loading) {
    return <LoadingOverlay></LoadingOverlay>
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="delete"
            color={GlobalStyles.colors.error500}
            size={32}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpensesScreen;
