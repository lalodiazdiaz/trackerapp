import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={"total"}
      fallBackText="No registered expenses found"
    />
  );
}

const styles = StyleSheet.create({});
