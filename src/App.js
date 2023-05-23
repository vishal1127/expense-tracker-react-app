import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Food", date: new Date(2023, 2, 4), price: "$50" },
    { title: "Petrol", date: new Date(2023, 2, 16), price: "$100" },
    { title: "Movie", date: new Date(2023, 2, 22), price: "$200" },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
