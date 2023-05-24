const ExpenseDetails = (props) => {
  return (
    <>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__amount">${props.amount}</div>
      </div>
    </>
  );
};
export default ExpenseDetails;
