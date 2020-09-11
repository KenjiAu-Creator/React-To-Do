import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Component function.
function ToDo ()
{
  /*
    // Assignment deconstructor (Array.)
    const [num1, num2] = [1, 2];
    console.log( num1 );
    console.log( num2 );
  */

  /**
   * Set up for state.
   * First item is a variable that holds the state value.
   * Second item is a function that we use to update the state value.
   * !!! IMPORTANT: We never update the first item DIRECTLY EVER.
   */
  const [newTask, setNewTask] = useState( 'default' ); // Argument in "useState()" is the default value for this state.

  // Set up state for our to-do list items.
  const [toDos, setToDos] = useState( [ // Default list of to-dos.
    { id: uuidv4(), task: "Buy milk" },
    { id: uuidv4(), task: "Learn React" },
    { id: uuidv4(), task: "Find out what Redux is" }
  ] );

  // Function we can use for our "onSubmit" form event.
  const addNewTask = event => {
    // Don't let the page reload for the submission! Let's prevent that default action.
    event.preventDefault();

    // We can use the spread operator to break up an array, so that...
    // each item inside is treated as an argument (value separated by
    // comma, if we were to write it manually.)
    const newToDosList = [...toDos]; // Fresh array with the same values from our state.
    // !!! REMEMBER, WE NEVER UPDATE THE STATE VARIABLE DIRECTLY.

    // We can add our NEW task to the new array.
    // *Make sure it matches our format! We're using an object here to match...
    //  our previous "To-Do" items.
    newToDosList.push( { id: uuidv4(), task: newTask } ); // "newTask" is our input state value!

    // Update the "toDos" state value.
    setToDos( newToDosList ); // What we pass in will replace the old state value!

    // Clear the new task field, now that our ToDo is added.
    setNewTask( '' ); // Set it to blank after submission so the user doesn't have to erase!
  }

  // We use "return" for our render, in a component.
  return (
    <>
      <form onSubmit={addNewTask}>
        <label htmlFor="task">New Task:</label>
        <input
          type="text"
          id="task"
          onChange={e => { setNewTask( e.target.value ) }}
          value={newTask} />
        <p>
          <strong>Current Task Value: </strong>
          <em>{newTask}</em>
        </p>
        <input type="submit" value="Add To-Do" />
      </form>
      <ul>{toDos.map( toDo => <li key={toDo.id}>{toDo.task}</li> )}</ul>
    </>
  );
}

export default ToDo;