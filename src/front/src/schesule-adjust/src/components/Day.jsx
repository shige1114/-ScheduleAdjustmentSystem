import React from "react"
import Time from "components/Time";
export default function Day(props) {
    const isArray = (props) => { 
        if (props["props"].length > 0){
            return(
                props["props"].map((time, index) => <Time props={time} key={index} />) 
            )
        }else{
            console.log(props.length)
        }

    }
    console.log(props)
    return (
        
        <div className="Day">
            <table>
                <thead>
                    <tr>
                        <th>時間</th>
                        <th>空き時間か否か</th>
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


