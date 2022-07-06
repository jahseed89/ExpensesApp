import "./app.scss";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 450,
      date: new Date(2021, 5, 12)
    },
    {
      id: 'e2',
      title: 'Rent',
      amount: 150,
      date: new Date(2021, 5, 12)
    },    {
      id: 'e3',
      title: 'Food stuff',
      amount: 200,
      date: new Date(2021, 5, 12)
    },    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 419,
      date: new Date(2021, 5, 12)
    }
  ];



   return (
    <div className="app">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
