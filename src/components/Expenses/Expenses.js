import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(2020);

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {/* {props.items.map((expense, index) => ( */}
            {/* learn about consitional rendering  */}
            {/* {filteredExpenses.length === 0 && expenseContent}

            {filteredExpenses.length > 0 && filteredExpenses.map((expense, index) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)
            )} */}
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
};
export default Expenses;