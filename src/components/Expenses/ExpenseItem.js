import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    console.log("clicked");
  };
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} price={props.price} />
        <button onClick={deleteHandler}>Delete expense</button>
      </Card>
    </>
  );
};

export default ExpenseItem;
