import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  if (props.items.length === 1) {
    return (
      <>
        <ul className="expenses-list">
          <ExpenseItem
            key={props.items[0].id}
            title={props.items[0].title}
            date={props.items[0].date}
            amount={props.items[0].amount}
          ></ExpenseItem>
        </ul>
        <h2 className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </h2>
      </>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
