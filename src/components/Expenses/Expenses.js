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
            price={expense.price}
          ></ExpenseItem>
        ))}
      </Card>
    </>
  );
};
export default Expenses;
