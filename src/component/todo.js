import React, { useState } from 'react'
import "../App.css";

const Todo = (props) => {
  console.log("props::", props);
  const [inputData, setinputData] = useState("");
  const [items, setitems] = useState([]);

  const addItem = () => {
    if (!inputData) {
      alert("Enter data");
    }
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
        done: false
      };
      setitems([...items, myNewInputData]);
      setinputData("");
    }
  };

  const delitem = (index) => {
    const upd = items.filter((cur) => {
      return cur.id !== index;
    });
    setitems(upd);
  };

  const edit = (event, i) => {
    let c = window.confirm("Do you want to make it done.");
    if (c) {
      if (event.done === false) {
        const upd = items.filter((cur, index) => {
          if (i === index && cur.done === false) {
            cur.done = !cur.done;
          }
          return cur;
        });
        setitems(upd);
      } else {
        alert("Already Done.");
      }
    }
    
  };

  const removeall = () => {
    setitems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">

          <figure>
            {<img src="https://img.icons8.com/arcade/512/todo-list.png" alt="todologo" />}
            <figcaption>ADD ITEMS TO YOUR LIST</figcaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder='Add Items' value={inputData} onChange={(event) => setinputData(event.target.value)}>

            </input>
            <i className="fa fa-plus add-btn" title="add item" onClick={addItem}></i>
          </div>
          <div className="showItems">
            {items.map((cur, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3 >{cur.name}</h3>

                  

                  <div className="todo-btn">
                  
                    <i  onClick={() => edit(cur, index)}>
                    {cur.done === true ?
                    <>
                      <i className="fa fa-check"></i>
                    </> : <>
                      <i className="fa fa-close"></i>
                    </>
                  }
                    </i>
                    <i className="far fa-trash-alt" onClick={() => delitem(cur.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            {/* <button className="btn effect04" ><span>check list</span></button> */}
            <button className="btn effect04" onClick={removeall} ><span>Remove All</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo;