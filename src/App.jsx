import { useState, useEffect } from "react";

// Part 1: API Endpoint
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("React");
  const [stories, setStories] = useState([]);
  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  // Part 2: Loading & Error State
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Part 2: Fetching Data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(url);
        const result = await response.json();
        setStories(result.hits);
      } catch {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  // Part 4: Submit Handler
  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
    event.preventDefault();
  };

  return (
    <div>
      <Header />
      <hr />
      <form onSubmit={handleSearchSubmit}>
        <InputWithLabel
          id="search"
          value={searchTerm}
          onInputChange={(e) => setSearchTerm(e.target.value)}
        >
          <strong>Search: </strong>
        </InputWithLabel>
        <button type="submit" disabled={!searchTerm}>
          Submit
        </button>
      </form>

      {isError && <p>Something went wrong ...</p>}
      {isLoading ? <p>Loading ...</p> : <List stories={stories} />}
    </div>
  );
};

// Reusable InputWithLabel
const InputWithLabel = ({ id, type = "text", value, onInputChange, children }) => (
  <div>
    <label htmlFor={id}>{children}</label>
    <input id={id} type={type} value={value} onChange={onInputChange} />
  </div>
);

const List = ({ stories }) => (
  <ul>
    {stories.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span> {item.author}</span>
  </li>
);

const Header = () => <h1>My Hacker Stories</h1>;

export default App;
// Reflection Week 9:

// useEffect for fetching:
// We use useEffect to perform data fetching whenever the URL changes.
// This keeps the code organized and ensures the fetch runs at the right time after state updates.

// Loading vs Error state:
// isLoading is true while data is being fetched (before the response arrives).
// isError becomes true if something goes wrong during the fetch (e.g., API issue or network error).
// This way, the user clearly sees what’s happening in the app.

// Control fetching:
// We separate searchTerm and url to control when fetching happens.
// The user can type freely in the input, but the actual fetch only occurs when they click Submit.
// This prevents unnecessary requests and gives more flexibility.


