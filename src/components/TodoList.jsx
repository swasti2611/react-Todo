import React, { useEffect, useState } from 'react';
import CompletedTodo from './CompletedTodo';
import TodaysTodo from './TodaysTodo';
import FutureTodo from './FutureTodo';

const TodoList = () => {
    const [inputName, setInputName] = useState("");
    const [deadline, setDeadline] = useState("");
    const [priority, setPriority] = useState("");
    const [data, setData] = useState([]);
    const [completedData, setCompletedData] = useState([]);

    const handleAddItem = () => {
        if (inputName.trim() === "" || deadline.trim() === "" || priority.trim() === "") {
            alert("Please fill all fields");
            return;
        }
        setData([...data, { todo: inputName, deadline: deadline, priority: priority }]);
        setInputName("");
        setDeadline("");
        setPriority("");
    };

    const handleDeleteItem = (todo) => {
        let deletedData=data.filter(item => item.todo !== todo)
        setData(deletedData);
        localStorage.setItem('todos', JSON.stringify(deletedData));
        
    };

    const handleCompleted = (todo, deadline, priority) => {
        const updatedCompletedData=[...completedData, { todo: todo, deadline: deadline, priority: priority }]
        localStorage.setItem("completedTodo",JSON.stringify(updatedCompletedData))
        setCompletedData(updatedCompletedData);
   
        
    };
    function handleCompleteDelete(id){
        let deletedData=completedData.filter((item,index )=> index !== id)
        setCompletedData(deletedData);
        localStorage.setItem('completedTodo', JSON.stringify(deletedData));
    }

    const isDeadlinePassed = (deadline) => {
        const today = new Date().setHours(0, 0, 0, 0);
        const deadlineDate = new Date(deadline).setHours(0, 0, 0, 0);
        return deadlineDate > today;
    };

    const todaysData = data.filter(item => !isDeadlinePassed(item.deadline));
    const futureData = data.filter(item => isDeadlinePassed(item.deadline));

    useEffect(()=>{
        if(data.length>0){
          localStorage.setItem("todo",JSON.stringify(data))
        }
      },[data])
  
      useEffect(()=>{
        if(completedData.length>0){
          localStorage.setItem("completedTodo",JSON.stringify(completedData))
        }
      },[completedData])
  
      useEffect(() => {
        let getData = localStorage.getItem('todo');
        if (getData) {
            setData(JSON.parse(getData));
        }
        let getCompletedData = localStorage.getItem('completedTodo');
        if (getCompletedData) {
            setCompletedData(JSON.parse(getCompletedData)); // Previously you were setting data instead of completedData
        }
    }, []);

    return (
        <div className='main-container'>
            <h1>TO-DO LIST</h1>
            <div className='todolist-section'>
                <input 
                    type='text' 
                    placeholder='Item name' 
                    className='text-input' 
                    value={inputName} 
                    onChange={(e) => setInputName(e.target.value)} 
                />
                <input 
                    type='date' 
                    placeholder='Deadline' 
                    className='deadline-input' 
                    value={deadline} 
                    onChange={(e) => setDeadline(e.target.value)} 
                />
                <select 
                    className='select-input' 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="">Priority</option>
                    <option value="high">High</option>
                    <option value="low">Low</option>
                </select>
                <button className='addItems' onClick={handleAddItem}>Add Item</button>
            </div>
            <div style={{width:'100%', marginTop:'20px'}}>
                {todaysData.length > 0 && 
                    <TodaysTodo data={todaysData} setData={setData} handleDeleteItem={handleDeleteItem} handleCompleted={handleCompleted} />
                }
            </div>
            <div style={{width:'100%', marginTop:'20px'}}>
                {futureData.length > 0 &&
                    <FutureTodo futureData={futureData} handleDeleteItem={handleDeleteItem} handleCompleted={handleCompleted}/>
                }
            </div>
            {completedData.length > 0 && 
                <CompletedTodo 
                    completedData={completedData} 
                    handleCompleteDelete={ handleCompleteDelete} 
                />
            }
        </div>
    );
};

export default TodoList;
