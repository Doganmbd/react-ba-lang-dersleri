import {useState} from "react";

function App() {
  const [name,setName] = useState("bilal");
  const [age,setAge] = useState(29) ;
  return (
    <div className="App">
      <h1>merhaba {name}</h1>
      <h2>benim yaşım {age}</h2>
      <button onClick={() => setName("Ömer")}>isim değiştir</button>
      <button onClick={()=> setAge(25)}>yaş değiştir</button>
    </div>
  );
}

export default App;
