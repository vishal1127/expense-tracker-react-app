import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <>
      <Card className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.date}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
      </Card>
    </>
  );
};
export default Expenses;
