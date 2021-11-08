import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [entertitle, setEnterTitle] = useState("");  // state for title
    const [enteramount, setEnterAmount] = useState("");  // state for amount
    const [enterdate, setEnterDate] = useState(""); // state for date
    // const [form, setForm] = useState(  // different approach
    //     {
    //         title: "",
    //         amount: "",
    //         date: ""
    //     }
    // );

    const titleChangeHandler = (event) => {
        // setForm((prevState) => {     // if you depend in a previous state then you work like that
        //     return { ...prevState, title: event.target.value}
        // })
        setEnterTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnterAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {  //combined all entered data and whenever we want to store we just passed this object.
            title: entertitle,
            amount: enteramount,
            date: new Date(enterdate)
        };
        // console.log(expenseData); /// data bind 
        props.onSaveExpenseData(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" value={entertitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteramount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019=01-01" max="2022-12-31" value={enterdate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm;