import axios from "axios";

class Expenses {
  static async all() {
    let response = await axios.get(
      "https://react-12023-default-rtdb.firebaseio.com/expenses.json"
    );

    let data = [];
    if (response.status === 200) {
      for (const key in response.data) {
        let obj = response.data[key];
        let expense = new Expenses();

        expense.title = obj.title;
        expense.date = obj.date;
        expense.value = obj.value;
        expense.description = obj.description;
        expense.id = key;

        data.push(expense);
      }
      return data;
    }
    return [];
  }

  async save() {
    let response = await axios.post(
      "https://react-12023-default-rtdb.firebaseio.com/expenses.json",
      this
    );
    if (response.status === 200) {
      this.id = response.data.name;
    }
    return (response.status = 200);
  }

  async delete() {
    let response = await axios.delete(
      `https://react-12023-default-rtdb.firebaseio.com/expenses/${this.id}.json`
    );
    if (response.status === 200) {
      return response.status === 200;
    }
  }
}

export default Expenses;
