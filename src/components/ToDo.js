import React from 'react';

// Component function.

function ToDo() {
  // We use "return" for our render, in a component.
  
  return (
    <> 
      <form>
        <label htmlFor="task">New Task:</label>&nbsp;
        <input type="text" id="task" />&nbsp;
        <input type="submit" value="Add Task" />
      </form>
      <ul>
      </ul>
    </>
  );
  // JSX <> - fragment. Use this because we can only have one element in the return.
};

export default ToDo;