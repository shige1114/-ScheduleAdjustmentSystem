import React from "react"
import Time from "components/Time";
export default function Day(props) {
    const isArray = (props) => { 
        if (Array.isArray(props)){
            props.map((time, index) => <Time props={time} key={index} />) 
        }else{
            <h1>kk</h1>
        }
    }
    return (
        <div className="Day">
            <table>
                <thead>
                    <tr>
                        <th>時間</th>
                        <th>空き時間</th>
                    </tr>
                </thead>

            </table>
            <table>
                <tbody>
                    {isArray(props)}
                </tbody>
            </table>

        </div>
    )
}


