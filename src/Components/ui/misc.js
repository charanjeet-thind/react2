import React from 'react';
import {Link} from 'react-router-dom';

export const Tag =(props)=>{
    const template =<div
        style={{
            background:props.bck,
            fontSize:props.size ,
            color:props.color,
            padding:'5px 10px',
            display:'inline-block',
            fontFamily:'Righteous',
            display:'inline-block',
            ...props.add
        }}
    >
        {props.children}
    </div>;
    if(props.link){
        return (
            <Link to={props.linkto}>
                {template}
            </Link>
        )
    }else{
        return template;
    }
}

export const firebaseLooper = (snapshot)=>{
    const data = [];
    snapshot.forEach((childSnapshort)=>{
        data.push({
            ...childSnapshort.val(),
            id:childSnapshort.key
        })
    })
    return data;
}

export const reverseArray =(actualArray)=>{
    let reversedArray  = [];
    for(let i=actualArray.length-1;i>=0;i--){
        reversedArray.push(actualArray[i]);
    }
    return reversedArray;
}