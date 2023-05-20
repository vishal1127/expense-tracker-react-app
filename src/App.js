import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Food", date: new Date(2023, 2, 4), price: "$50" },
    { title: "Petrol", date: new Date(2023, 2, 16), price: "$100" },
    { title: "Movie", date: new Date(2023, 2, 22), price: "$200" },
  ];
  return (
    <div>
      <h2>Expense Tracker!</h2>
      <div>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.date}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          ></ExpenseItem>
        ))}
      </div>
    </div>
  );
}

export default App;
