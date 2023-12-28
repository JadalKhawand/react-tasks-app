import React, { useState } from 'react';
import { useTodoStore } from '../store/Todo';

function Navigation() {
  const addTodo = useTodoStore((state) => state.addTodo);
  const {searchTodos} = useTodoStore()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: '',
    date: '',
    priority: 1, 
    content: '',
    completed:false,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset newTodo state when closing modal
    setNewTodo({
      title: '',
      date: '',
      priority: 1,
      content: '',
      completed:false,
    });
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,

    }));
  };

  const handleSubmit = () => {

    if (!newTodo.title || !newTodo.date || !newTodo.content) {
      alert('Please fill in all required fields (Title, Date, Content).');
      return;
    }
    addTodo({
      ...newTodo,
      id: new Date().getTime(), 
      completed: false, 
      date: `${newTodo.date} Day${newTodo.date === "1" ? '' : 's'}`
    });
    
    
    closeModal();
  };
  function handleSearch(e:any){
    const searchTerm = e.target.value;
    searchTodos(searchTerm);
  }
  

  return (
    <div className='flex gap-2 mt-5'>
      <div className="add w-1/4 bg-green-700 rounded-2xl">
        <h1 onClick={openModal} className='cursor-pointer text-5xl'>+</h1>
      </div>
      <div className="search w-3/4">
        <input className='p-4 w-full rounded-2xl indent-3' type="text" placeholder='Search...' onChange={handleSearch} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Add New Todo</h2>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newTodo.title}
              onChange={handleInputChange}
              className="border p-2 mb-4 w-full"
            />
            <label>Please enter how many days left for the task:</label>
            <input
              type="number"
              name="date"
              value={newTodo.date}
              onChange={handleInputChange}
              className="border p-2 mb-4 w-full"
              min={1}
              max={30}
            />
            
            <label>Priority:</label>
            <input
              type="number"
              name="priority"
              value={newTodo.priority}
              onChange={handleInputChange}
              className="border p-2 mb-4 w-full"
              min={1}
              max={5}
            />
            <label>Content:</label>
            <textarea
              name="content"
              value={newTodo.content}
              onChange={handleInputChange}
              className="border p-2 mb-4 w-full"
            />
            <div className="flex justify-end">
              <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
              <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 ml-2 rounded-md">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
