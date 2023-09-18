import React, { Component, useState } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        item: "",
      },
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formData: {
        ...this.state.formData,
        item: "",
      },
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={handleSubmit} className="p-4 w-2/4 mx-auto">
          <h1 className="text-2xl font-semibold mb-4 text-white">ToDo</h1>
          <label htmlFor="item" className="block text-white">
            First Name:
          </label>
          <div className="grid grid-cols-10 gap-2">
            <div className="mb-4 text-start col-span-8">
              <input
                type="text"
                id="item"
                name="item"
                value={this.state.formData.item}
                placeholder="Enter a task..."
                onChange={this.handleChange}
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
        </form>
      </div>
    );
  }
}
export default Message;
