import {useState} from "react";

function App() {
  const [name,setName] = useState("bilal");
  const [age,setAge] = useState(29) ;

  const [friends,setFriends] = useState(["ali","ömer"]) ; // array
  const [address,setAddress] =useState({title:"Batman" , zip :7270})
  return (
    <div className="App">
      <h1>merhaba {name}</h1>
      <h2>benim yaşım {age}</h2>
      <button onClick={() => setName("Ömer")}>isim değiştir</button>
      <button onClick={()=> setAge(25)}>yaş değiştir</button>
      <hr/>
      <br></br>
      <h2>Friends</h2>
      {friends.map((friend,index) =>(
        <div key="index">{friend}</div>
      ) )}
      <br></br>
      <button onClick={()=>setFriends(["mbd",...friends])}>isim ekle</button>
      <hr/>
      <br></br>

      <h2>Address</h2>
      <div>
        {address.title}  {address.zip}
      </div>
        <br></br>
      {/* <button onClick={()=>setAddress({title:"istanbul",zip:3430})}>adres değiştir</button> */}
      <button onClick={()=>setAddress({...address,title:"istanbul"})}>adres değiştir</button>




    </div>
  );
}

export default App;
