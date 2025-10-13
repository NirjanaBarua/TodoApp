
import TodoItem from '../TodoIteam/Todoitem';
import useTaskStore from '../../Context/States/taskStore';


const TodoList = () => {
  const {task}=useTaskStore();
  return (
    <div className='bg-black' >
      <ul>
        {task.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet</p>
        ) : (
          task.map((item) => (
            <TodoItem 
            key={item.id}
            task={item}
             
            ></TodoItem>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;