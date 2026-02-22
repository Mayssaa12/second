// Step 1: Create the App component
function App() {
  // Step 2: Variable inside component
  const studentName = "Mayssa";

  // Step 3: Variable outside component
  const courseTitle = "React Basics";

  // Step 6: Object
  const student = { name: "Mayssa", age: 20, track: "Web Development" };

  // Step 7: Function
  function sayHello() {
    return "Hello " + studentName;
  }

  return (
    <div>
      <h1>My First React Component</h1>
      <p>{studentName}</p>
      <p>{courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>

      <label htmlFor="studentInput">Enter your name:</label>
      <input type="text" id="studentInput" />

      <p>{student.name}</p>
      <p>{student.age}</p>
      <p>{student.track}</p>

      <p>{sayHello()}</p>
    </div>
  );
}

export default App;

// Step 8: Reflection
// One thing I understand well in this lab: JSX variables
// One thing that is still confusing: Why {} are required
// One mistake I made and fixed: Forgot export default