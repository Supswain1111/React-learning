import ExpenseItems from './component/ExpenseItems';

function App() {
  const expenses = [
    {
      title:'Car Insurance',
      amount:258,
      date: new Date(2023, 4 , 4),
      locationOfExpenditure :'Canada',
    },
    {
      title:'Car Insurance2',
      amount:249,
      date : new Date(2023, 4, 4),
      locationOfExpenditure :'Canada1',
    },
    {
      title:'Car Insurance3',
      amount:267,
      date : new Date(2023,4, 4),
      locationOfExpenditure :'Canada2',
    },
    {
      title:'Car Insurance4',
      amount:288,
      date : new Date(2023,4,4),
      locationOfExpenditure :'Canada3',
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems 
      title = {expenses[0].title} 
      amount={expenses[0].amount} 
      location ={expenses[0].locationOfExpenditure} 
      date ={expenses[0].date}>
      </ExpenseItems>
      <ExpenseItems 
      title = {expenses[1].title} 
      amount={expenses[1].amount} 
      location ={expenses[1].locationOfExpenditure} 
      date ={expenses[1].date}></ExpenseItems>
      <ExpenseItems
      title = {expenses[2].title} 
      amount={expenses[2].amount} 
      location ={expenses[2].locationOfExpenditure} 
      date ={expenses[2].date}></ExpenseItems>
      <ExpenseItems
      title = {expenses[3].title} 
      amount={expenses[3].amount} 
      location ={expenses[3].locationOfExpenditure} 
      date ={expenses[3].date}>
      </ExpenseItems>
    </div>
  );
}

export default App;
