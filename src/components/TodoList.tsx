import "./TodoList.css";

type Props = {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
};

const TodoList = ({ items, onDeleteTodo }: Props) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => onDeleteTodo(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
