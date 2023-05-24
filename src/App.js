import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Food", date: new Date(2023, 2, 4), amount: "50" },
  { id: "e2", title: "Petrol", date: new Date(2023, 2, 16), amount: "100" },
  { id: "e3", title: "Movie", date: new Date(2023, 2, 22), amount: "200" },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseDataHandler = (enteredExpenseData) => {
    // expenses = [...expenses, enteredExpenseData];
    setExpenses((prevExpenses) => [enteredExpenseData, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
