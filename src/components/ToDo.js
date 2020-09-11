// If you import a function that is not the default make sure that it is in {}!
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


// Component function.

function ToDo() {
  /* Set up for state.
   * First item is a variablew that holds the state value.
   * Second item is a function that we use to update the state value.
   * !!! IMPORTANT: We never update the first item directly EVER.
   */
  
  const [newTask, setNewTask] = useState( 'default' ); // Arguement in "useState" is the default value for this state.

  // Set up state for our To Do list items.
  const [toDos, setToDos] = useState([  // Default list of to do items.
    { id: uuidv4(), task: "Buy milk" },
    { id: uuidv4(), task: "Learn React" },
    { id: uuidv4(), task: "Find out what Redux is" }
  ] );


  const addNewTask = event => {
    // Don't let the page reload for submission! 
    event.preventDefault();

    /* We can use the spread operator to break up an array, so that...
     * each item inside is treated as an arguement (value separated by
     * comma, if we were to wrrite it manually.)
     */
    const newToDosList = [...toDos]; // Fresh array with the same values from our state.
    // !!! REMEMBER WE NEVER UPDATE THE STATE VARIABLE DIRECTLY.

    // We can add to our NEW task to the new array.
    // Make sure that it matches our format. We'r eusing an object here to match
    // our previous "To-Do" items.
    newToDosList.push( { id: uuidv4(), task: newTask } ); // newTask is our input state value!

    // Update the "toDos" state value.
    setToDos( newToDosList ); // What we pass in will replace the old state value!

    // Clear the new task field, now that our ToDo is added.
    setToDos( '' ); // Set it to blank after submission so the user doesn't have to erase!
  }

  // We use "return" for our render, in a component.
  return (
    <> 
      <form onSubmit={addNewTask}>
        <label htmlFor="task">New Task:</label>&nbsp;
        <input 
          type="text"
          id="task"
          onChange={ e => { 
            console.log(e.target);
            setNewTask( e.target.value ); } }
          value={newTask}
        />&nbsp;
        <input type="submit" value="Add Task" />
      </form>
      <ul>
        <h1>Current Task is:</h1>
        <p>{newTask}</p>
        {toDos.map( toDo => <li key={toDo.id}>{toDo.task}</li> )}
      </ul>
    </>
  );
  // JSX <> - fragment. Use this because we can only have one element in the return.
  // When we use the state then it can update in real time. (line 24)
  // If we used a submit event then it would cause a re-render!
};

export default ToDo;