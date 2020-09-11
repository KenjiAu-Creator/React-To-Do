// If you import a function that is not the default make sure that it is in {}!
import React, { useState } from 'react';


// Component function.

function ToDo() {
  /* Set up for state.
   * First item is a variablew that holds the state value.
   * Second item is a function that we use to update the state value.
   * !!! IMPORTANT: We never update the first item directly EVER.
   */
  
  const [newTask, setNewTask] = useState( 'default' ); // Arguement in "useState" is the default value for this state.

  // We use "return" for our render, in a component.
  return (
    <> 
      <form>
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
        <h2>{newTask}</h2>
      </ul>
    </>
  );
  // JSX <> - fragment. Use this because we can only have one element in the return.
  // When we use the state then it can update in real time. (line 24)
  // If we used a submit event then it would cause a re-render!
};

export default ToDo;