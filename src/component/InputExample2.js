import {useState} from 'react'

/* inputta yaptığımın aynısı olur sadece biraz daha kısa olmuş oldu. */

function InputExample() {/* 


    /* yukarıdaki yazdıklarımı teke düşürdüm. */

    const[form,setForm] = useState({name:"",surname:""});

    const onChangeInput = (e)=> {
        console.log(e.target.name);
        /* formun tamamını aldım virgül koydum köşeli parantez e.target.name bir atama yapacam.*/
        setForm({...form , [e.target.name] : e.target.value})
    }

    /* burada tek tek input için bir fonksiyon yazdım . bundan kurtulmanın yöntemi kütüphane leri kullanmak . kütüphane arka planda bunları yapıyor. 
     */
   return (

    <div>
        Name 
        <br></br>

        
        <br></br>
        {form.name}          {/* input içinde yapılan değişikliği görebiliriz. */}
        <br></br>
        <br></br>
        <input name='name' value={form.name} onChange={onChangeInput}/>  {/*  yukarıda fonk. altına tanımlamayı yaptım. */}

        <br></br>
        <br></br>

        Surname 
        <br></br>
        <input  name='surname' value={form.surname} onChange={onChangeInput}/> 
        <br></br>
        <br></br>
        {form.surname}

        <br></br>
        <br></br>

        {form.name} {form.surname}

    </div>
  )
}

export default InputExample