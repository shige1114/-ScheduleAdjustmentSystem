import React from "react"
import { useEffect, useState } from 'react';

function Time(props){
    return (
        <div className="Time">
            <tr>
                <td>{props.hour}:{props.minutes}</td>
                <td>{props.class}</td>
            </tr>
        </div>
    )
}


export default Time