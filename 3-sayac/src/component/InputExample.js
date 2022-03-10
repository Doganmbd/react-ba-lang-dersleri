/* rfce ile yeni bir component oluşturuyorum ve bunu index.js e import ediyorum */

import {useState} from 'react'

function InputExample() {

    const [name,setName] = useState("Bilal") ;
    const [surname,setSurname] = useState(""); /* sayfa ilk açıldığında inputun içi boş gözüksün  */

    const onChangeName = (e)=> setName(e.target.value);
    const onChangeSurname = (e) => setSurname(e.target.value)

    /* yukarıdaki yazdıklarımı teke düşürdüm. */



    /* burada tek tek input için bir fonksiyon yazdım . bundan kurtulmanın yöntemi kütüphane leri kullanmak . kütüphane arka planda bunları yapıyor. 
     */
   return (

    <div>
        Name 
        <br></br>
        {/* <input></input> */}

        {/* <input value={name} onChange={(event)=> setName(event.target.value)}/> */}
        {/* burada value verdiğim değer sayfada silinmiyor ve başka değerlerde girilmiyor. bunun sebebi biz bir state tanımladık ve bunun ifade ettiği bir değer var "bilal" .inputa value olarak bu değeri verdik state indeksi ifade sabit olduğu için ("bilal"). inputa bir veri girildiğinde onchange olduğunda input içindeki datayı state de yazdırmak lazım .bu yüzden inputtaki onchange değerlidir.bana onchange den dönen event var.bu event dan yola çıkarak değişikliğide setName in içine yazabilirim. */}
        
        <br></br>
        {name}          {/* input içinde yapılan değişikliği görebiliriz. */}
        <br></br>
        <br></br>
        <input value={name} onChange={onChangeName}/>  {/*  yukarıda fonk. altına tanımlamayı yaptım. */}

        <br></br>
        <br></br>

        Surname 
        <br></br>
        <input  value={surname} onChange={onChangeSurname}/> 
        <br></br>
        <br></br>
        {surname}

        <br></br>
        <br></br>

        {name} {surname}






    </div>
  )
}

export default InputExample