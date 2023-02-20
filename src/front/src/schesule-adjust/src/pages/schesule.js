import { useEffect, useState } from 'react';

import { Day } from "components/Day"
import { getDays } from "pages/api/days"


function Schesule() {
    useEffect(() => {
        async () => {
            const days = await getDays()
        }
    },[])
    return (
        <Day props={days}/>
    )
}


export default Schesule()