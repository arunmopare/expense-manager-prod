import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const addME = (item) => {
  if (this.items.indexOf(item) > -1) {
    this.items.push(item);
    console.log(this.items);
  }
};

const useTransactionsYear = (title, year) => {
  let yearsSet = new Set();
  let yearsArray = [];
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  transactions.map((transaction) => {
    if (yearsArray.indexOf(new Date(transaction.date).getFullYear()) === -1) {
      yearsArray.push(new Date(transaction.date).getFullYear());
    }
  });
  const transactionsYear = transactions.filter(
    (transaction) => new Date(transaction.date).getFullYear() === year
  );
  const transactionsYear2 = transactions.filter(
    (transaction) => new Date(transaction.date).getFullYear() === year
  );
  console.log("transactionsYear inside", transactionsYear);

  const rightTransactions = transactions.filter(
    (t) => t.type === title && new Date(t.date).getFullYear() === year
  );

  const rightExpenseTransactions = transactions.filter(
    (t) => t.type === "Expense" && new Date(t.date).getFullYear() === year
  );

  const rightIncomeTransactions = transactions.filter(
    (t) => t.type === "Income" && new Date(t.date).getFullYear() === year
  );
  const total = rightTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );

  const totalExpense = rightExpenseTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const TotalIncome = rightIncomeTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );

  const averageIncome = TotalIncome / rightIncomeTransactions.length;
  var averageExpense;
  if (rightExpenseTransactions.length !== 0) {
    const ae = totalExpense / rightExpenseTransactions.length;
    averageExpense = ae.toFixed(2);
  } else {
    averageExpense = "0";
  }
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  let balance = 0;
  if (transactionsYear) {
    console.log({ transactionsYear });
    balance = transactionsYear.reduce(
      (acc, currVal) =>
        currVal.type === "Expense"
          ? acc - currVal.amount
          : acc + currVal.amount,
      0
    );
  }

  return {
    filteredCategories,
    total,
    yearsArray,
    balance,
    chartData,
    transactionsYear2,
    averageExpense,
  };
};

export default useTransactionsYear;
