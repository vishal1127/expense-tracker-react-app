import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [showFrom, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput((prevState) => {
    //   // use this function syntax whenever our state update depends on the previous state
    //   return {
    //     ...prevState,
    //     title: event.target.value,
    //   };
    // });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     amount: event.target.value,
    //   };
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     date: event.target.value,
    //   };
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    toggleFormHandler();
  };
  const toggleFormHandler = () => {
    setShowForm(!showFrom);
  };
  if (!showFrom) {
    return <button onClick={toggleFormHandler}>Add Expense</button>;
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2024-12-31"
              value={date}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={toggleFormHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
