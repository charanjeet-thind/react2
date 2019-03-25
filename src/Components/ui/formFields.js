import React from 'react';

const FormField= (formdata,id)=>{
    const renderTemplate=()=>{ 
        let formTemplate=null;
        console.log('formdata');
        console.log(formdata);
        switch(formdata.element){
            case('input'):
            alert('hellow');formTemplate = (
                    <div>
                        input with something
                    </div>
                )
            break;
            default:
            formTemplate="jj";



        }
    }
    return (
        <div>
            {renderTemplate()}
        </div>
    )
}

export default FormField;