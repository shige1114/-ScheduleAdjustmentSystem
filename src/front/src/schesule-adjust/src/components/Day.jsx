import React from "react"
import Time from "components/Time";

export default function Day(props) {
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
                    {props.map((time,index) =>
                        <Time props={time} key={index} />
                    )}
                </tbody>
            </table>

        </div>
    )
}


