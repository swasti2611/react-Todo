import React, { useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faClipboardList } from "@fortawesome/free-solid-svg-icons";

const TodaysTodo = ({ data, setData, handleDeleteItem, handleCompleted }) => {
  // Initialize state from localStorage
  

  return (
    <div className="main-container">
      <div>
        <h2>Today's TodoList</h2>
      </div>
      <ol className="todoList">
        {data.map((item, index) => (
          <li key={item.todo + item.deadline + item.priority}>
            <div>{index + 1}. {item.todo}</div>
            <div>{item.deadline}</div>
            <div>priority: {item.priority}</div>
            <div style={{ display: 'flex', gap: '13px', marginTop: '5px' }}>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDeleteItem(item.todo)}
              />
              <FontAwesomeIcon
                icon={faClipboardList}
                onClick={() => handleCompleted(item.todo, item.deadline, item.priority)}
                style={{ marginRight: "5px" }}
              />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodaysTodo;
