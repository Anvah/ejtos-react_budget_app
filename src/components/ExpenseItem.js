import React, { useContext, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const greenButtonStyle = {
        backgroundColor: '#00FF00', // Светло-зеленый цвет фона
        color: '#fff', // Цвет текста
        borderRadius: '50%', // Делаем кнопку круглой
      };
    
      const redButtonStyle = {
        backgroundColor: '#ff0000', // Темно-красный цвет фона
        color: '#fff', // Цвет текста
        borderRadius: '50%', // Делаем кнопку круглой
      };
    

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={greenButtonStyle} onClick={event=> increaseAllocation(props.name)}>
        <FaPlus size={24} />
        </button></td>
        <td><button style={redButtonStyle} onClick={event=> decreaseAllocation(props.name)}>
            <FaMinus size={24} />
        </button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
