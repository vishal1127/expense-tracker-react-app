import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails title={props.title} price={props.price} />
      </div>
    </>
  );
}

export default ExpenseItem;
