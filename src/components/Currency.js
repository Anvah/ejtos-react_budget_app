import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('');
    const onChange = (cur) => {
        setCurrency(cur);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: cur,
        });
    }

    const greenBackgroundStyle = {
        backgroundColor: '#00FF00', // Светло-зеленый цвет фона
      };
    return (
        <div className='alert alert-secondary'>
            <div style={greenBackgroundStyle}> 
            Currency             
             <select style={greenBackgroundStyle} id="inputGroupSelect02" onChange={(event) => onChange(event.target.value)}>
                
                <option defaultValue value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
            </div>
           
        </div>
    );
};
export default Budget;