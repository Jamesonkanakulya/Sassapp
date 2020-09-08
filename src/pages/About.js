import React,{useEffect} from 'react'

import TitleTwo from '../components/TitleTwo'
import HomeVideo from '../components/HomeVideo'
import Services from '../components/Services'
import { Link } from 'react-router-dom'
import { Button, Background } from '../components/StyledComponent'
import Geometric from '../images/Geometric.jpg'
import author from '../images/author.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css';


function About() {
    useEffect(() =>{

        Aos.init({duration:2000})

    },[])

    const mission = [
        {
            title: "Our mission",
            content: `Work closely with leadership 
            to ensure alignment with the organization’s vision, mission and goal. 
            Choose your words carefully – they must be concise and inspiring. 
            Workshops with right stakeholders is a great way to develop
            your Design vision statement. Contact me if you need a hand with this.`
        },
        {
            title: "Our vision",
            content: `Our vision is to create attractive, 
            easy-to-use products that anticipate and exceed expectations for content,
             design, and quality in an efficient and timely manner`
        }
    ]



    return (
        < >

            <Background opacity=".5" height="25rem" />
            <TitleTwo title="About us" />



            <div className="container mt-4">
                <div className="row">
                    <div data-aos="fade-up" className="col-lg-6 col-md-6 ">
                        <Background image={Geometric} style={{ width: '100%', height: '40rem' }}
                            opacity="0.1" />
                        <div  className="aboutRight">

                            <h4>about</h4>
                            <h2>welcome to labettie design</h2>

                            <p className="aboutRightFirstPg">To become truly immortal, a work of art must escape all human limits:
                            logic and commonsense will only interfere.
                            But once these barriers are broken, it will
                            enter the realms ofchildhood visions and dreams
                         </p>
                            <p className="aboutRightSecondtPg">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur dolor sequi cum facilis libero! Blanditiis doloremque excepturi at
                                voluptatum id? Error corrupti quo aut qui laboriosam natus explicabo itaque maiores
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                                dolor sequi cum facilis libero! Blanditiis doloremque
                                excepturi at voluptatum id? Error corrupti quo a
                                ut qui laboriosam natus explicabo itaque maiores

                             </p>
                            <Button  style={{marginTop:"4rem"}}><Link to="#">Learn more</Link></Button>





                        </div>


                    </div>
                    <div data-aos="fade-up" className="col-lg-6 col-md-6 col-sm-12">
                        <div  className="aboutLeft">

                            <img src={author} alt="" />


                        </div>

                    </div>

                </div>


                <div data-aos="fade-up" className="mission" >
                    {mission.map((item, i) => {
                        return <section key={i}>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>

                        </section>
                    })
                    }
                </div>


            </div>

            <div data-aos="fade-up" style={{marginLeft:"-1.7rem",marginTop:"-5rem"}}>
            <HomeVideo/>
            </div>
            <div className="service">
            <Services/>
            </div>


        
        </>
    )
}

export default About
