import Footer from "../Footer/Footer";
import "./ourwork.css";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: "web" | "mobile" | "branding";
  image: string;
  description: string;
  link: string;
}
const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "web" | "mobile" | "branding"
  >("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "web",
      image: "https://via.placeholder.com/300x200?text=Web+Project+1",
      description: "A modern responsive portfolio website.",
      link: "https://thecrafistore.com",
    },
    {
      id: 2,
      title: "E-commerce App",
      category: "mobile",
      image: "https://via.placeholder.com/300x200?text=Mobile+App+1",
      description: "A complete shopping app for Android and iOS.",
      link: "https://thecrafistore.com",
    },
    {
      id: 3,
      title: "Logo Design",
      category: "branding",
      image: "https://via.placeholder.com/300x200?text=Branding+1",
      description: "Creative logo for tech startup.",
      link: "https://thecrafistore.com",
    },
    {
      id: 4,
      title: "Business Website",
      category: "web",
      image: "https://via.placeholder.com/300x200?text=Web+Project+2",
      description: "Corporate website for business.",
      link: "https://thecrafistore.com",
    },
    {
      id: 5,
      title: "App UI Design",
      category: "mobile",
      image: "https://via.placeholder.com/300x200?text=Mobile+App+2",
      description: "Modern mobile app UI design.",
      link: "https://thecrafistore.com",
    },
    {
      id: 6,
      title: "App UI Design",
      category: "mobile",
      image: "https://via.placeholder.com/300x200?text=Mobile+App+2",
      description: "Modern mobile app UI design.",
      link: "https://thecrafistore.com",
    },
  ];
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="work-container">
        <section className="work-header">
          <h2>
            Our <span>Works</span>
          </h2>
          <div className="underline"></div>
        </section>
        <h3 className="work-text">
          Our work is distinguished amongst wide variety. Below are few of our
          websites which may help you to trust us better.
        </h3>
      </div>

      <div className="project-tabs">
        {["all", "web", "mobile", "branding"].map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat as any)}
          >
            {cat === "all"
              ? "All"
              : cat === "web"
              ? "Web"
              : cat === "mobile"
              ? "Mobile App"
              : "Branding"}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="overlay">
              <h3>{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit →
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default WorkPage;

// import React, { useState } from "react";
// import "./ourwork.css";

// interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// const App: React.FC = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [input, setInput] = useState("");

//   // Add a new todo
//   const addTodo = () => {
//     if (!input.trim()) return; // Prevent empty todos
//     const newTodo: Todo = {
//       id: Date.now(),
//       text: input,
//       completed: false,
//     };
//     setTodos([newTodo, ...todos]);
//     setInput("");
//   };

//   // Toggle completed
//   const toggleComplete = (id: number) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Delete todo
//   const deleteTodo = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="app">
//       <h1>React To-Do List</h1>

//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Enter a task..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && addTodo()}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>

//       <ul className="todo-list">
//         {todos.length === 0 && <p>No tasks yet!</p>}
//         {todos.map((todo) => (
//           <li key={todo.id} className={todo.completed ? "completed" : ""}>
//             <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
//             <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
//               ❌
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";
// import React from "react";
// import "./ourwork.css";

// interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// const App: React.FC = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [input, setinput] = useState("");

//   const addTodo = () => {
//     if (!input.trim()) return;
//     const newTodo: Todo = {
//       id: Date.now(),
//       text: input,
//       completed: false,
//     };
//     setTodos([newTodo, ...todos]);
//     setinput("");
//   };

//   const toggleComplete = (id: number) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };
//   const deleteTodo = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="app">
//       <h1>Todo list</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Enter Todo"
//           value={input}
//           onChange={(e) => setinput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && addTodo()}
//         />
//         <button onClick={addTodo}>ADD</button>
//       </div>

//       <ul className="todo-list">
//         {todos.length === 0 && <p>No Task Yet!</p>}
//         {todos.map((todo) => (
//           <li key={todo.id} className={todo.completed ? "completed" : ""}>
//             <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
//             <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
//               ❌{" "}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
