import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  const updateAmount = () => {
    setAmount("$100");
  };
  const [title, setTitle] = useState(props.title);
  const deleteHandler = () => {
    setTitle("New");
  };
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={title} amount={amount} />
        <button onClick={deleteHandler}>Delete expense</button>
        <button onClick={updateAmount}>Change amount</button>
      </Card>
    </>
  );
};

export default ExpenseItem;
