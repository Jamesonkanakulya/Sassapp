
import { Button } from './StyledComponent'
import useInput from '.././Hook/useInput'


import React, { Component } from 'react'

export class ContactForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [],
            show:false,
            currentItem: {
                name: '',
                email:'',
                subject:'',
                comment:'',
                key: ''
            }
        }
    }
    handleInput = e => {
        this.setState({
            currentItem: {
                 ...this.state.currentItem,
                [e.target.name]: e.target.value,
                key: Date.now()
                
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        })
    }

    addItems = e => {
        const newItem = this.state.currentItem
        if (newItem.name ||newItem.comment
            ||newItem.subject||newItem.email !== '') {

            const newItems = [...this.state.items, newItem]
            this.setState({
                items: newItems,
             
                currentItem: {
                    name: '',
                    email:'',
                    subject:'',
                    comment:'',
                    key: ''
                }
            })
        }



        e.preventDefault()
    }
    render() {
        const {currentItem,show} = this.state
        return (
            <>
                <div className="contact-form">

               

                    <form onSubmit={this.addItems}>
                        <h5 className={show ? "d-block" : "d-none"} style={{ color: "red" }}> Please fill in the missing spaces</h5>
                        <textarea value ={currentItem.comment}  name="comment"  onChange={this.handleInput} className="col-lg-12" placeholder="Enter message" >

                        </textarea>
                        <input  value ={currentItem.name}  name="name"  onChange={this.handleInput} className="col-lg-6 col-md-12 ml-0" placeholder="Enter your name" />
                        <input value={currentItem.email}  name="email" onChange={this.handleInput} className="col-lg-5 col-md-12  ml-" placeholder="Enter your email" />
                        <input  value={currentItem.subject}  name="subject" onChange={this.handleInput} className="col-lg-6 col-md-12 ml-0" placeholder="Enter the subject" />

                        <Button backColor="red">send message </Button>

                    </form>

                </div>




                
            </>
        )
    }
}

export default ContactForm


/*
function ContactForm({send}) {
    const[items,setitems] = useState({
        itemName:'',
        itemComment:'',
        itemSubject:'',
        key:''
    })
    const [name,handleName,resetName] = useInput('')
    const[show,setshow] = useState(false)
    const [itemList,setItemList]= useState([])
    const [email,handleEmail,resetEmail] = useInput('')
    const [comment,handleComment,resetComment] = useInput('')
    const [subject,handleSubject,resetSubject] = useInput('')

    const handleFormComments = e =>{
        e.preventDefault()

        if(!name || !comment || !subject ){
            setshow(true)
        }

        setitems( name,comment,subject,Date.now() )

        const newItemList = {...itemList,items}
        setItemList(newItemList)
        resetComment()
        resetEmail()
        resetName()
        resetSubject()

    }
    return (

        <div className="contact-form">

              <CommentSection itemList={itemList}/>

            <form onSubmit={handleFormComments}>
                 <h5 className={show?"d-block":"d-none"} style={{color:"red"}}> Please fill in the missing spaces</h5>
                <textarea {...handleComment} className="col-lg-12" placeholder="Enter message" >

                </textarea>
                <input  {...handleName} className="col-lg-6 col-md-12 ml-0" placeholder="Enter your name" />
                <input {...handleEmail} className="col-lg-5 col-md-12  ml-" placeholder="Enter your email" />
                <input  {...handleSubject} className="col-lg-6 col-md-12 ml-0" placeholder="Enter the subject" />

                <Button backColor="red">{!send?"send message":send}</Button>

            </form>

        </div>
    )
}

export default ContactForm
*/