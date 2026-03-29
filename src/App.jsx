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

// Step 3–5: Render list using map()
function App() {
  return (
    <div>
      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a href={story.url} target="_blank">{story.title}</a>
          </h3>
          <p>Author: {story.author}</p>
          <span>Points: {story.points}</span> | 
          <span>Comments: {story.num_comments}</span>
        </div>
      ))}
    </div>
  );
}

export default App;

// Step 7: Reflection
// Why is map() essential → Because it returns a new array of JSX elements for rendering lists.
// Why is objectID the correct key? → Because it's unique and stable, unlike array index.
// What will change with real API? → Instead of fake data, stories will come dynamically from Hacker News API.n