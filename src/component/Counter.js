// rfce ile hızlıca bir component oluşturdum. 
// bu componenti kullancağım için istersem App.js componentinde bunu kullanırım istersemde gider index.js de bir import işlemi yaparım(import Counter from "./component/Counter";)yazarım ve altına da (ReactDOM.render() ) altına Counter yazarım.

import {useState} from 'react';



function Counter() {
    const [count,setCount] = useState(0); 

    const inc = () => {
        setCount(count + 1)
    }
  return (
      // counter ';lem' yapacam 2 buton ve b'r tane sayi artirma ve azaltma işlemi yapacağım.bunun için useState hook unu kullanacağım

     // 0 ile varsayılan değeri atamış olurum
    <div>
        {/* h1 içerisindeki 0 bizim değişebilme poansiyeli olması lazım dolayısıyla function Counter() altına bunu tanımlıyorum */}
        <h1>{count}</h1>
        <button onClick={()=> setCount(count - 1)}>Decrease</button>
        <button onClick={inc}>Increase</button>  {/* burada çok kod yazılabileceği için yukarıda inc tanımladım */}
        {/* react ın sürekli aynı şeyi render etmedğini görmek istersek bu şekilde jquery ile karşılaştırabilirim.  */}
         
        <button onClick={()=> setCount(1)}>make a number one.</button>  {/* burada butona bastiğimda  sadece 1 yapmak için  çalışır ama jquey de her zaman çalışmış olur */}

        {/* bunu görebilmek için incele kısmını açıp soldaki 3 noktaya basıyoruz ve  more tools ve rendering ve paint flashing i seçiyorum.*/}
    </div>

    
  )
}

export default Counter

