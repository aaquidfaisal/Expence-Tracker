import React ,{useContext}from 'react'
import { GlobalContext } from '../context/Globalstate'
import Transaction from './Transaction';

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(Transaction=> transactions.amount);

    const income =amounts
    .filter(item => item>0)
    .reduce((acc,item)=>(acc += item),0)
    .toFixed(2);

    const expense= (
        amounts.filter(item => item<0).reduce((acc,item) => (acc += item),0) * -1
    ).toFixed(2);
  return (
    <div className="inc-exp-container">
        <div>
        <h4>{income}</h4>
        <p id='money-plus' className="money minus">-$0.00</p>
        </div>
        <div>
            <h4>{expense}</h4>
            <p className='money minus'>-$0.00</p>
        </div>
      
    </div>
  )
}

export default IncomeExpense
