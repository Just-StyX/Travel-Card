import Card from "./components/Card";
import data from "./components/data.js"

function App() {
  const item = data.map((element) => <Card element={element} key={element.title}/>)
  return (
    <div className="App">
      {item}
    </div>
  );
}

export default App;
