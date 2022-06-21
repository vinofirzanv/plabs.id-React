import "./App.css";
import React, { useState } from "react";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy);
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* <Greet name="Ojan" heroName="Joker">
          <p>This is children</p> 
      </Greet>
      <Greet name="Vino" heroName="Batman">
          <button>Click</button> 
      </Greet>
      
      <Welcome name="Ojan" heroName="Joker"></Welcome>
      <Hello></Hello>

      <Message></Message>

      <Counter></Counter>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>

      <EventBind></EventBind> */}

      {/* <ParentComponent></ParentComponent> */}

      {/* <UserGreeting></UserGreeting> */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
