import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <>
      <div className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.date}
            title={expense.title}
            date={expense.date}
            price={expense.price}
          ></ExpenseItem>
        ))}
      </div>
    </>
  );
}
export default Expenses;
