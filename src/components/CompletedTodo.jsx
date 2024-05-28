import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CompletedTodo = ({ completedData, handleCompleteDelete }) => {
    return (
        <div className='main-container'>
            <h2>Completed Todos</h2>
            <ol className='completed-todoList'>
                {completedData.map((item, index) => (
                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <div>{item.todo}</div>
                        <div>{item.deadline}</div>
                        <div>priority:{item.priority}</div>
                        <div>
                            <FontAwesomeIcon 
                                icon={faTrash} 
                                onClick={() =>  handleCompleteDelete(index)} 
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default CompletedTodo;
