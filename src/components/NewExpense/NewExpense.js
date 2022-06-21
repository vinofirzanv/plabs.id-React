import React,{useState} from "react";
import "./NewExpense.css";
import ExpensesForm from "./ExpensesForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpensesForm 
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditingHandler}></ExpensesForm>}
    </div>
  );
};

export default NewExpense;
