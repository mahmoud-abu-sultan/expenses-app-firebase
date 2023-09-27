import { useContext } from "react";
import Expenses from "../models/expenses";
import AppContext from "../context/app-context";

class AppController {
  context = useContext(AppContext);
  // ---
  index = async () => {
    let data = await Expenses.all();
    this.context.setExpense(data);
  };

  // ---
  store = (data) => {
    let expense = new Expenses();

    expense.title = data.title;
    expense.date = data.date;
    expense.value = data.value;
    expense.description = data.description;

    let saved = expense.save();
    if (saved) {
      // console.log(data); return { . . . . . }
      // console.log(expense); return expenses{ . . . . }
      this.context.addExpense(data);
    }
  };

  // ---
  delete = (id) => {
    let obj = this.context.data.find((element) => element.id === id);
    let deleted = obj.delete();
    if (deleted) {
      this.context.deleteExpense(obj);
    }
  };
}
export default AppController;
