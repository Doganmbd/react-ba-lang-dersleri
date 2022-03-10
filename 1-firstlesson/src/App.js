
import './App.css';
import Header from "./component/header";
import User from "./component/props";
import Listem from "./component/list";

const name = "Mustafa Bilal"
const surname = "DOĞAN"

const isLog = false


const kanks= [
  {
    id:1,
    ad:"ömer",
  },
  {
    id:2,
    ad:"ali",
  },
  {
    id:3,
    ad:"mbd",
  }
]

function App() {
  return (
    <div>
      <h1>Merhaba Bilal</h1>
      <Header/>
      <Header></Header>
      <h1>{name}{surname}</h1>
      <h1>{`benim adım ${name},  soyadım ${surname}`}</h1>
      <h1>{isLog && `İkinci defa söylüyorum Benim adım ${name}`}</h1>
      <h1>{!isLog && ` değil. `}</h1>
      <h1>{isLog ? `İkinci defa söylüyorum Benim adım ${name}` : `İkinci defa değil. `}</h1>

  {/* props  
  User a eklediğim property i componentmde kullanmak istiyorum.*/}
      <User
      name="{123} "  // kapatırsam hata veririr çünkü isRequired ile tanımladım.
      surname= "doğan"  //kapatırsaaka undefined döner.
      isLoggedIn={true} 
      /* age={29}  */
      friends = {["ahmet" , "mehemt","ali","veli"]} 
      address = {{
        title:"Batman",
      zip:7270,
    }}
      />

      
      <Listem 
      kanki ={kanks}
      />
    </div>
  );
}
export default App ;