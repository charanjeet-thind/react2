import React, { Component } from 'react';
import Fade from 'react-reveal';

class Enroll extends Component {
    state={
        formError:false,
        formSuccess: '',
        formdata:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter your email'
                },
                validation:{
                     required:true
                }
            }
        }
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Enroll;