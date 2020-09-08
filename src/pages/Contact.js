import React from 'react'
import { Background } from '../components/StyledComponent';
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';
import TitleTwo from '../components/TitleTwo';

function Contact() {
    return (<>
    
    
    
    <Background opacity=".5" height="25rem" />
        <TitleTwo title="contact" />
        <div className="container">

            
              <div className="row">
                        <div className="col-lg-7 mt-2">

                            <div className="row">
                               
                                <ContactForm/>
                               


                            </div>

                        </div>
                        <div className="col-lg-4 mt-4">
                            <div className="mycontainer">
                                
                                <ContactDetails />

                            </div>


                        </div>

                    </div>







           
        </div>
    
    </>


    )
}

export default Contact

