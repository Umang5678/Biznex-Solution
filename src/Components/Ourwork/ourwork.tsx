import { useMemo, useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import App1 from "../../assets/thecrafistore.png";
import App2 from "../../assets/thedreamchapter.jpeg";
import App3 from "../../assets/Allcast.png";
import App4 from "../../assets/pp.png";

type Category = "all" | "web" | "mobile" | "branding";

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "all">;
  img: string;
  description: string;
  link: string;
}

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile App" },
  { key: "branding", label: "Branding" },
];

const projectsData: Project[] = [
  {
    id: 1,
    title: "The Crafistore",
    category: "web",
    img: App1,
    description: "A complete shopping app for Android and iOS",
    link: "https://thecrafistore.com",
  },
  {
    id: 2,
    title: "The Dream Chapter",
    category: "mobile",
    img: App2,
    description: "A complete shopping app for Android and iOS.",
    link: "https://the-dream-chapters.vercel.app",
  },
  {
    id: 3,
    title: "allcastengineering",
    category: "web",
    img: App3,
    description: "Creative logo for tech startup.",
    link: "https://allcastengineering.com",
  },
  {
    id: 4,
    title: "perfecttoolsindustries",
    category: "web",
    img: App4,
    description: "Corporate website for business.",
    link: "https://www.perfecttoolsindustries.com/",
  },
  {
    id: 5,
    title: "App UI Design",
    category: "mobile",
    img: "https://via.placeholder.com/900x600?text=Mobile+App+2",
    description: "Modern mobile app UI design.",
    link: "https://thecrafistore.com",
  },
  {
    id: 6,
    title: "Brand Identity",
    category: "branding",
    img: "https://via.placeholder.com/900x600?text=Branding+2",
    description: "Brand identity kit for a growing company.",
    link: "https://thecrafistore.com",
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Our Work | UByte Solution";
  }, []);

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-600" />
            Our Portfolio
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Our <span className="text-indigo-600">Works</span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Our work is distinguished amongst a wide variety. Below are a few of
            our projects which may help you trust us better.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((c) => {
            const active = activeCategory === c.key;

            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setActiveCategory(c.key)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  "border",
                  active
                    ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                  "focus:outline-none focus:ring-2 focus:ring-indigo-500/30",
                ].join(" ")}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Image (NOT clickable now) */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-80" />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-semibold text-white drop-shadow-sm">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-slate-600">{project.description}</p>

                <div className="mt-4 flex items-center justify-end">
                  {/* ONLY Visit opens url */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit{" "}
                    <span className="ml-2 transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

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
