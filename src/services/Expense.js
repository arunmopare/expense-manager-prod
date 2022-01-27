import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
const baseUrl = "http://localhost:3001";
export const PostExpense = (expense) => {
  try {
    console.log("Posting Expense", expense);
    axios
      .post(`${baseUrl}/v2/expense`, expense)
      .then((response) => {
        console.log("Successfully Posted Expense");
        console.log({ response });
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const GetAllExpenses = async () => {
  try {
    console.log("Getting All Expenses");
    await axios
      .get(`${baseUrl}/v2/expenses`)
      .then((response) => {
        console.log("Successfully Retrieved All Expenses");
        console.log({ response });
        return response;
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const DeleteExpense = async (id) => {
  try {
    console.log("Deleting Expense", id);
    await axios
      .delete(`${baseUrl}/v2/expense/${id}`)
      .then((response) => {
        console.log("Successfully Deleted Expense");
        console.log({ response });
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  } catch (error) {
    console.log(error);
  }
};
