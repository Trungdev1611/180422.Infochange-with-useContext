import React from 'react'
import { useContext } from 'react';
import { Context } from '../Context/Context';

export default function Showinfo(props) { //props la mot doi so cua component, la mot object 
    //function open Edit component
    const getcontext = useContext(Context)
    let { closeEdit } = getcontext
    let datainput = getcontext.datastate.datainput
    console.log(datainput)

    //du lieu nhan duoc tu Edit-App-Showinfo

    return (


        <div className="showinfo">
            <div className="info">
                <img
                    src={datainput.srcimg}
                    alt="khong hien thi duoc" />
                <div className="infomation">

                    <div> <span>Name: </span><span>{datainput.fullname}</span></div>
                    <div><span>Sex: </span><span>{datainput.sex}</span></div>
                    <div><span>Age: </span><span>{datainput.age}</span></div>
                    <div><span>Description: </span><span>{datainput.desc}</span></div>
                </div>
            </div>
            <button className="editbtn" onClick={closeEdit}>Edit</button>
        </div>
    )
}
