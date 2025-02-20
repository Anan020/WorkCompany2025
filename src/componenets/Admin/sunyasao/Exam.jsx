import React, { useState } from "react";

const CardForm = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;
    if (editingTask) {
      setTasks(tasks.map(task => task.id === editingTask.id ? { ...task, name: taskName } : task));
      setEditingTask(null);
    } else {
      setTasks([...tasks, { id: Date.now(), name: taskName }]);
    }
    setTaskName("");
    setShowForm(false);
  };

  const editTask = (task) => {
    setTaskName(task.name);
    setEditingTask(task);
    setShowForm(true);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="container mx-auto p-4">
      <button 
        onClick={() => { setShowForm(true); setEditingTask(null); setTaskName(""); }} 
        className="bg-blue-500 text-white px-4 py-2 rounded">
        + เพิ่มเอกสาร
      </button>

      {showForm && (
        <form onSubmit={addTask} className="mt-4 border p-4 rounded shadow">
          <input 
            type="text" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
            placeholder="ชื่อเอกสาร" 
            className="border p-2 w-full rounded" 
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-2 rounded w-full">
            {editingTask ? "อัปเดต" : "บันทึก"}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {tasks.map((task) => (
          <div key={task.id} className="border p-4 rounded shadow flex justify-between items-center">
            <h3 className="text-lg font-semibold">{task.name}</h3>
            <div>
              <button 
                onClick={() => editTask(task)} 
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                แก้ไข
              </button>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="bg-red-500 text-white px-2 py-1 rounded">
                ลบ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardForm;
