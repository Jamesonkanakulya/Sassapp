import React, { Component } from 'react'
import Animate from 'animate.css-react'
import gld from '../images/gld.png'
import FeaturedItems from '../components/FeaturedItems'
import Services from '../components/Services'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myshow: true,
            count: 0
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                myshow: !this.state.myshow,
                count: this.state.count + 1
            })
        }, 3000)

    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { count, myshow } = this.state

        return (
            <>
                <div className="home_container">


                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12  ">
                            <div className={myshow ? "homeHeader" : "home_hide"}>
                                <h1>select your new perfect product</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Blanditiis, maxime tempora officia nihil expedita porro
             pariatur rem omnis nemo voluptatum beatae!</p>
                                <button>shop now</button>


                            </div>


                        </div>
                        <div className="col-lg-5 col-md-12 d-sm-none d-md-block pt-4 mt-4   position-relative">

                            <img src={gld} alt="success" />

                        </div>


                    </div>

                </div>
                <FeaturedItems />
                <Services/>

            </>
        )
    }
}

export default React.memo(Home)









// import React,{useEffect,useState} from 'react'
// 


// const [myshow,setmyshow] = useState(false)

// const changeAnimation = () =>{

//         setmyshow(!myshow)
// }

// useEffect(() => {
//     const interval = setInterval( changeAnimation, 1000);

//     return () => clearInterval(interval);
//   }, [myshow]);

// function Home() {
//     return (
//         < className="container">
//             < className="home_container">

//                 <Animate
//                     appear="fadeInDown"
//                     durationAppear={1000}
//                     component=""
//                     durationEnter={1000}
//                     durationLeave={1000}
//                     durationChange={1000}
//                     animate={myshow}
//                     animateChangeIf={myshow}
//                 >
//                     <h1>react animate.css</h1>

//                 </Animate>
//             hello from home_container

//             </>

//         </>
//     )
// }

// export default Home
