import React from "react"
import { useEffect, useState } from 'react';
import { Button } from "@mui/material";
export default function Time(props) {
    console.log(props)

    const [text,setText] = useState('調整可')
    const [canText,setCanText] = useState('調整不可')

    const time_ditail = (props) => {
        const p = props["props"]

        if (p.minites == 0) { p.minites = "00" }
        if (p.hour == 15) {
            return (
                <>
                    <td>{p.hour}:{p.minites}</td>
                    <td><Button variant="contained" color="primary">オンライン会議</Button></td>
                </>
            )
        }else if (p.hour == 10) {
            return (
                <>
                    <td>{p.hour}:{p.minites}</td>
                    <td><Button variant="contained" color="primary">オンライン会議</Button></td>
                </>
            )
        } else if (p.hour == 12) {
            return (
                <>
                    <td>{p.hour}:{p.minites}</td>
                        <td><Button variant="contained" color="error" >調整不可</Button></td>
                </>
            )
        }  
        else {
            if (p.day_class == 0) {
                return (
                    <>
                        <td>{p.hour}:{p.minites}</td>
                        <td><Button variant="contained" color="success" onClick={()=>setText('会議予定')}>{text}</Button></td>
                    </>
                )
            }
            else {
                return (
                    <>
                        <td>{p.hour}:{p.minites}</td>
                        <td><Button variant="contained" color="error" onClick={()=>setCanText('会議予定')}>{text}</Button></td>
                    </>
                )
            }
        }

    }
    return (
        <div className="Time">
            <tr>
                {time_ditail(props)}
            </tr>
        </div>
    )
}


