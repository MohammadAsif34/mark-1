import { all } from "axios";
import React, { useState } from "react";

const ToDo = () => {
  let [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState("");
  console.log(task);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTask = {
        id: allTasks.length + 1,
        text: task,
        isDone: false,
      };
      setAllTasks([...allTasks, newTask]);
      setTask("");
    } else {
      alert("Please enter some tasks;");
    }
  };
  const handleDone = (id) => {
    const updateTask = allTasks.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: true };
      }
      return item;
    });

    setAllTasks(updateTask);
    // () => {
    //   allTasks.map((item) =>
    //     alert(
    //       `task done! == ID :${id},  TASK : ${item.text} , ISDONE : ${item.isDone}`
    //     )
    //   );
    // };
  };

  const handleDelete = (id) => {
    allTasks.map((index) => {
      if (index.id === id) {
        if (index.isDone === true) {
          const deleteTask = allTasks.filter((item) => item.id !== id);
          setAllTasks(deleteTask);
          alert(`task has been deleted, ID : ${id}!`);
        } else {
          alert("you have not completed the task!!");
        }
      }
    });
  };
  return (
    <div className="w-2/3 m-auto p-3 ">
      <h1 className="my-8 text-5xl text-center font-bold"> TO_DO App</h1>
      <div className="">
        <form
          action=""
          className="mx-auto flex w-3/5 h-12 my-4 border border-black rounded-xl"
        >
          <input
            type="text"
            value={task}
            className="w-3/5 px-5 flex-1 rounde-xl bg-transparent  outline-none"
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            className=" bg-gray-800 text-white px-8 rounded-r-lg hover:bg-gray-600"
            onClick={handleAddTask}
          >
            Add
          </button>
        </form>
      </div>

      <div className="w-full my-8 border-black rounded-lg">
        <h1 className="my-6 text-3xl font-bold">Your Tasks :</h1>
        <ul>
          {allTasks.map((item, index) => (
            <li
              key={item.id}
              className="w-full p-2.5 my-3 text-lg bg-gray-200 shadow-md border rounded-md first-child:rounded-y-lg capitalize flex items-center"
            >
              {item.isDone === true ? (
                <i className="pl-2 pr-6 bi bi-check-circle text-green-500"></i>
              ) : (
                <span className="pl-2 pr-6 block">{index + 1}</span>
              )}

              {item.isDone ? (
                <span className=" flex-1 line-through line-through:text-green-500 first-letter:capitalize">
                  {item.text}
                </span>
              ) : (
                <span className="flex-1">{item.text}</span>
              )}
              <span
                className="mr-3 border border-red-500 rounded-md text-red-500 px-4 cursor-pointer"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </span>
              <span
                className="mr-3 float-end border border-green-500 rounded-md text-green-500 px-4 cursor-pointer"
                onClick={() => handleDone(item.id)}
              >
                Done
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
