// import ham Create Context trong react 
import React from 'react'
import { useState } from 'react';

import { createContext } from "react";

export const Context = createContext(); //neu truyen gia tri vao trong createContext thi do la gia tri mac dinh


const data = {
    isEdit: true,
    datainput: {}
}
export default function Addcontext(props) {

    const [datastate, setDatastate] = useState(data)
    let closeEdit = function () {
        setDatastate({
            ...datastate, isEdit: !datastate.isEdit

        })
    }

    let showform = function (data) {
        console.log(data)
        let data1 = { ...datastate, datainput: data }


        console.log("data1", data1)
        setDatastate({
            isEdit: false,
            datainput: data1.datainput
        })
    }
    console.log(datastate)
    const datacontext = { datastate, closeEdit, showform }
    console.log(datacontext)
    console.log(props.children)
    console.log(datacontext)

    return (
        <Context.Provider value={datacontext}>
            {props.children}

        </Context.Provider>
    )
}
