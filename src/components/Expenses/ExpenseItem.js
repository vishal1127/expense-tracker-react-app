import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [price, setPrice] = useState(props.price);
  const updatePrice = () => {
    setPrice("$100");
  };
  const [title, setTitle] = useState(props.title);
  const deleteHandler = () => {
    setTitle("New");
  };
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={title} price={price} />
        <button onClick={deleteHandler}>Delete expense</button>
        <button onClick={updatePrice}>Change price</button>
      </Card>
    </>
  );
};

export default ExpenseItem;
