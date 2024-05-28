import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const FutureTodo = ({ futureData,todaysData, handleDeleteItem }) => {
    return (
        <div className='main-container'>
            <h2>Future Todos</h2>
            <ul className='todoList'>
                {futureData.map((item) => (
                    <li key={item.todo + item.deadline + item.priority} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <div>{item.todo}</div>
                        <div>{item.deadline}</div>
                        <div>priority:{item.priority}</div>
                        <div>
                            <FontAwesomeIcon 
                                icon={faTrash} 
                                onClick={() => handleDeleteItem(item.todo)} 
                                style={{ cursor: 'pointer', marginLeft: '10px' }}
                            />
                             <FontAwesomeIcon icon={faClipboardList} 
                                onClick={()=>handleCompleted(item.todo,item.deadline,item.priority)}
                                 style={{ cursor: 'pointer', marginLeft: '10px' }}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FutureTodo;
