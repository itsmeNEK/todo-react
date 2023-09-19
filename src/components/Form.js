import React, { useState } from "react";

function Form() {
  const [state, setState] = useState({
    message: "",
    userInput: "",
    item: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { userInput, item } = state;

    if (userInput.length === 0) {
      setState({
        ...state,
        message: "Cannot Enter Empty Task.",
      });
    } else {
      if (!item.includes(userInput)) {
        const updatedItem = [...item, userInput];
        setState({
          ...state,
          item: updatedItem,
          userInput: "",
          message: "",
        });
      } else {
        setState({
          ...state,
          message: "Task Already Exists!",
        });
      }
    }
  };

  const deleteItem = (value) => {
    const { item } = state;
    const updatedItem = item.filter((item) => item !== value);
    setState({
      ...state,
      item: updatedItem,
      userInput: "",
      message: "",
    });
  };

  const editItem = (index) => {
    const { item } = state;
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedTodos = [...item];
      updatedTodos[index] = editedTodo;
      setState({
        ...state,
        item: updatedTodos,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4 w-2/4 mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-white">ToDo</h1>
        <div className="grid grid-cols-10 gap-2">
          <div className="mb-4 text-start col-span-8">
            <input
              type="text"
              id="userInput"
              name="userInput"
              value={state.userInput}
              placeholder="Enter a task..."
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-slate-800 text-white"
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full border border-white text-white bg-slate-700 hover:border-blue-500 rounded-md px-4 py-2"
            >
              Submit
            </button>
          </div>
        </div>
        <div>
          {state.message !== "" ? (
            <div className="text-red-700">{state.message}</div>
          ) : (
            ""
          )}
        </div>
      </form>
      <ul className="p-4 w-2/4 mx-auto">
        {state.item.map((item, index) => {
          return (
            <div className="grid grid-cols-10 mb-4" key={index}>
              <div className="text-end">
                <button className="text-white" onClick={deleteItem(item)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="col-span-8">
                <p className="ml-2 text-sm font-medium text-white dark:text-gray-300">
                  {item}
                </p>
              </div>
              <div className="text-start">
                <button className="text-white" onClick={editItem(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:text-yellow-500 hover:text"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Form;
