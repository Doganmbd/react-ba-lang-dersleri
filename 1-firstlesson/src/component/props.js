/* function User(props) {
    console.log(props)
    return (
        <>
        <div>{props.name}</div>
        <div>selam</div>
        </>
    )
}

export default User ; */

import Prop from "prop-types";

 function User({age,name,surname,isLoggedIn,friends,address }) {
    
    return (
        <>
        <div>
            {isLoggedIn ? `${name} ${surname} (${age})` : "eminmisin yanlış giriş yaptınız"}

            {friends.map((friend,index)=> (
            <div key={index}>{index}--{friend}</div>
            ))}
            <br></br><br></br><br></br>
            {address.title}{address.zip}
            <br></br><br></br><br></br>
        </div>

        
        </>
    )
}

User.propTypes = {
    name :Prop.string.isRequired ,
    surname:Prop.string,
    isLoggedIn : Prop.bool,
    friends:Prop.array,
    age : Prop.oneOfType([
        Prop.string,
        Prop.number,
    ]),

    address: Prop.shape({
        title: Prop.string,
        zip :Prop.number,
    }),
    

}

User.defaultProps={
    isLoggedIn:false ,
    age:"yassiz"
}

export default User ; 