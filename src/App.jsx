import { useState } from "react";

// Step 1: Move data into App
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const stories = [
    {
      objectID: 1,
      title: "React Basics",
      url: "https://react.dev",
      author: "Dan Abramov",
      points: 120,
      num_comments: 45,
    },
    {
      objectID: 2,
      title: "Vite Introduction",
      url: "https://vite.dev",
      author: "Evan You",
      points: 95,
      num_comments: 30,
    },
  ];

  // Step 8: Filter stories before passing to List
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("App re-rendered");

  return (
    <div>
      <Header />
      <hr />
      <Search onSearch={(event) => setSearchTerm(event.target.value)} />
      <List stories={filteredStories} />
    </div>
  );
};

// Step 2: Pass data using props
const List = ({ stories }) => {
  console.log("List re-rendered");

  return (
    <ul>
      {stories.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

// Step 3: Extract Item component
const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span> {item.author}</span>
  </li>
);

// Step 4–5: Search component with handler from props
const Search = ({ onSearch }) => {
  console.log("Search re-rendered");

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={onSearch} />
    </div>
  );
};

// Step 5: Header component
const Header = () => <h1>My Hacker Stories</h1>;

export default App;