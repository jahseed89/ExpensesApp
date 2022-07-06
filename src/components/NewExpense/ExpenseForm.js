import "./expenseForm.scss";

const ExpenseForm = ()=>{
    return (
        <form>
            <div className="newExpense__controls">
                <div className="newExpense__control">
                    <label>Title</label>
                    <input type='text' />
                </div>
            </div>
            <div className="newExpense__controls">
                <div className="newExpense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' />
                </div>
            </div>
            <div className="newExpense__controls">
                <div className="newExpense__control">
                    <label>Date</label>
                    <input type='date' min='2022-06-30' max='2025-06-30' />
                </div>
            </div>
            <div className="newExpense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;