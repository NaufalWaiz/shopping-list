import { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/container";
import SearchInput from "./components/SearchInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import Empty from "./components/Empty";

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([
    { title: 'todo 1', description: 'description 1', count: 1 },
    { title: 'todo 2', description: 'description 2', count: 2 },
    { title: 'todo 3', description: 'description 3', count: 3 }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('No blank list!');
      return;
    }

    const addedTodos = [...todos, {
      title: title,
      description: description,
      count: 1
    }];

    setTodos(addedTodos);
    setTitle('');
    setDescription('');
  };

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].count > 0) {
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      newTodos.splice(index, 1);
    }
    setTodos(newTodos);
  };

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);
    return totalCounts;
  };

  return (
    <>
      <Navbar />
      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          onChangeTitle={(e) => setTitle(e.target.value)}
          onChangeDescription={(e) => setDescription(e.target.value)}
          title={title}
          description={description}
        />
        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setTodos([])}
        />
        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => handleSubstractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;