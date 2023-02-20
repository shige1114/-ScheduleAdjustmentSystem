import React from "react"
import Time from "components/Time";

function Day(props) {
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
                    {props.map((time) =>
                        <Time props={time} />
                    )}
                </tbody>
            </table>

        </div>
    )
}


export default Day