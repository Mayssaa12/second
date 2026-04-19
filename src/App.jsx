import { useState, useEffect } from "react";

// Step 1 + 4: Controlled component & initialize state from localStorage
const App = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );

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

  // Step 8: Filter stories
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Step 5: useEffect to store searchTerm in localStorage
  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  console.log("App re-rendered");

  return (
    <div>
      <Header />
      <hr />
      <Search searchTerm={searchTerm} onSearch={(e) => setSearchTerm(e.target.value)} />
      <List stories={filteredStories} />
    </div>
  );
};

// Step 2: Props destructuring
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

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span> {item.author}</span>
  </li>
);

const Search = ({ searchTerm, onSearch }) => {
  console.log("Search re-rendered");

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={searchTerm}   // Controlled input
        onChange={onSearch}  // Handler updates state
      />
    </div>
  );
};

const Header = () => <h1>My Hacker Stories</h1>;

export default App;
