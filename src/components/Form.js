import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      userInput: "",
      item: [],
    };
  }
  //   changes in input
  handleChange = (val) => {
    // getting the value
    const { value } = val.target;
    // set new value to userInput
    this.setState({
      userInput: value,
    });
  };
  //   handle form submission
  handleSubmit = (val) => {
    val.preventDefault();
    // variables
    let userInput = this.state.userInput;
    let item = [...this.state.item];
    // check if empty
    if (userInput.length === 0) {
      this.setState({
        message: "Cannot Enter Empty Task.",
      });
    } else {
      // check in task already exists
      if (!item.includes(userInput)) {
        // push to items
        item.push(userInput);
        // setting new values
        this.setState({
          item,
          userInput: "",
          message: "",
        });
      } else {
        this.setState({
          message: "Task Already Exist!",
        });
      }
    }
  };

  //   deleting task if done
  //  (additional) confirm before deleting
  deleteItem = (val) => {
    let items = [...this.state.item];
    let item = items.filter((item) => item !== val);
    this.setState({
      item,
      userInput: "",
      message: "",
    });
  };
  //   editing task

  editItem = (index) => {
    const todos = [...this.state.item];
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...todos];
      updatedTodos[index] = editedTodo;
      this.setState({
        item: updatedTodos,
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="p-4 w-2/4 mx-auto">
          <h1 className="text-2xl font-semibold mb-4 text-white">ToDo</h1>
          <div className="grid grid-cols-10 gap-2">
            <div className="mb-4 text-start col-span-8">
              {/* input task */}
              <input
                type="text"
                id="item"
                name="item"
                value={this.state.userInput}
                placeholder="Enter a task..."
                onChange={this.handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-slate-800 text-white"
              />
            </div>
            <div className="col-span-2">
              {/* submit */}
              <button
                type="submit"
                className="w-full border border-white text-white bg-slate-700 hover:border-blue-500 rounded-md px-4 py-2 "
              >
                Submit
              </button>
            </div>
          </div>
          {/* message */}
          <div>
            {this.state.message !== "" ? (
              <div className="text-red-700">{this.state.message}</div>
            ) : (
              ""
            )}
          </div>
        </form>
        {/* list of task */}
        <ul className="p-4 w-2/4 mx-auto">
          {this.state.item.map((item, index) => {
            return (
              <div className="grid grid-cols-10 mb-4" key={index}>
                <div className="text-end">
                  {/* done button */}
                  <button
                    className="text-white"
                    onClick={() => this.deleteItem(item)}
                  >
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
                  {/* item */}
                  <p className="ml-2 text-sm font-medium text-white dark:text-gray-300">
                    {item}
                  </p>
                </div>
                <div className="text-start">
                  {/* edit button */}
                  <button
                    className="text-white"
                    onClick={() => this.editItem(index)}
                  >
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
}
export default Message;
