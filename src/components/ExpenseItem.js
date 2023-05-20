import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <>
      <div className="expense-item">
        <div>March 28th 2023</div>
        <div className="expense-item__description">
          <h2>Food</h2>
          <div className="expense-item__price">$20</div>
        </div>
      </div>
      <div className="expense-item">
        <div>March 28th 2023</div>
        <div className="expense-item__description">
          <h2>Petrol</h2>
          <div className="expense-item__price">$100</div>
        </div>
      </div>
      <div className="expense-item">
        <div>March 28th 2023</div>
        <div className="expense-item__description">
          <h2>Movie</h2>
          <div className="expense-item__price">$154</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
