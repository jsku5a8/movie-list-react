import { useState, useRef } from "react";
import { Input } from "../../Ul/Input/Input";
import { Button } from "../../Ul/button/Button";
import "./NewExpense.css";

export const NewExpense = ({ expenses, setExpenses }) => {
  const [expenseName, setExpenseName] = useState("");
  const [expensePhoto, setExpensePhoto] = useState("");
  const [expenseG, setExpenseG] = useState("");

  const textInputRef = useRef();
  const urlInputRef = useRef();
  const TextInputRef = useRef();

  function valueInputsRender(e) {
    e.preventDefault();
    if (expensePhoto === "") {
      urlInputRef.current.focus();
    } else {
      if (expenseG === "") {
        TextInputRef.current.focus();
      } else {
        const NewExpenseObj = {
          name: expenseName,
          photo: expensePhoto,
          gh: expenseG,
          id: Math.random(),
        };
        setExpenses([...expenses, NewExpenseObj]);
        setExpenseName("");
        setExpensePhoto("");
        setExpenseG("");
      }
    }
  }

  return (
    <div className="form">
      <Input
        ref={textInputRef}
        text="name"
        type="text"
        style="inputs"
        placeholder="название кино"
        value={expenseName}
        setData={setExpenseName}
      />
      <Input
        ref={urlInputRef}
        text="photo is url"
        type="url"
        style="inputs"
        placeholder="Photos is url"
        value={expensePhoto}
        setData={setExpensePhoto}
      />
      <Input
        ref={TextInputRef}
        text="G"
        type="text"
        style="inputs"
        placeholder="название жанры"
        value={expenseG}
        setData={setExpenseG}
      />
      <form onSubmit={valueInputsRender}>
        <Button style="add  " text="Add" type="submit" />
      </form>
    </div>
  );
};