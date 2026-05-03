import { useState } from "react";

// Part 1: Reusable InputWithLabel
const InputWithLabel = ({ id, type = "text", value, onInputChange, children }) => (
  <div>
    <label htmlFor={id}>{children}</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </div>
);

const App = () => {
  // Part 2: Initial data separated
  const initialStories = [
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

  // Part 2: Stories state
  const [stories, setStories] = useState(initialStories);
  const [searchTerm, setSearchTerm] = useState("");

  // Part 3: Remove handler
  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => story.objectID !== item.objectID
    );
    setStories(newStories);
  };

  // Filter stories
  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <hr />
      <Search searchTerm={searchTerm} onSearch={(e) => setSearchTerm(e.target.value)} />
      <List stories={filteredStories} onRemoveItem={handleRemoveStory} />
    </div>
  );
};

// Part 1: Composition in Search
const Search = ({ searchTerm, onSearch }) => (
  <InputWithLabel id="search" value={searchTerm} onInputChange={onSearch}>
    <strong>Search: </strong>
  </InputWithLabel>
);

const List = ({ stories, onRemoveItem }) => (
  <ul>
    {stories.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
);

const Item = ({ item, onRemoveItem }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span> {item.author}</span>
    <button type="button" onClick={() => onRemoveItem(item)}>
      Delete
    </button>
  </li>
);

const Header = () => <h1>My Hacker Stories</h1>;

export default App;

