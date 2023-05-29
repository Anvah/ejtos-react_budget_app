/*import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [budget, setBudget] = useState('');
    const submitBudget = (val) => {
        setBudget(val);
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        });
    }
    return (
        <div className='alert alert-secondary'>
             {currency}
             <input
               type='text'
               id='budget'
               value={budget}
               style={{ marginLeft: '2rem' , size: 10}}
               onChange={(event) => submitBudget(event.target.value)}>{currency}         
            </input>
            <span>Budget: {currency}{budget}</span>
        </div>
    );
};
export default Budget;*/
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};
export default Budget;
