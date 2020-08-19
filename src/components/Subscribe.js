import React,{useState} from 'react'

function Subscribe() {

    const [myEmail,setEmail]= useState('')
    const handleEmail = e =>{
        e.preventDefault()
        setEmail(e.target.value)
    }


    return (
        <div className="subscribe">
            <h2>get promotions and updates</h2>
            <p>     Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur dolor sequi cum facilis libero! Blanditiis doloremque excepturi at
                                voluptatum id? Error corrupti quo aut qui laboriosam natus explicabo itaque maiores</p>


            <form>
                <input type="text"  placeholder="Enter Your Email" onChange={handleEmail}  value={myEmail}/>
                <button type="submit">Subscribe</button>
            </form>

        </div>
    )
}

export default Subscribe
