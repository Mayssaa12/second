// Step 1: Data structure explanation
// Each story has:
// objectID → unique identifier (React key)
// title → article title
// url → link to article
// author → who posted it
// points → popularity score
// num_comments → number of comments

// React key should be objectID because it's unique.
// This structure is realistic since APIs

// Step 2: Fake data outside the component
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

// Step 3: list component (arrow + concise body)
const List = () => (
  <ul>
    {stories.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span> {item.author}</span>
      </li>
    ))}
  </ul>
);

// Step 4: Search Component (arrow + block body)
const Search = () => {
  const handleChange = (event) => {
    console.log(event); // Step 5: log the event object
    console.log(event.target.value); // Step 7: log only the input value
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
 );
};

// Step 5: Header Component (arrow function)
const Header = () => <h1>My Hacker Stories</h1>;

// Step 6: App Component (arrow function)
const App = () => (
  <div>
    <Header />
    <hr />
    <Search />
    <List />
  </div>
);

export default App;
