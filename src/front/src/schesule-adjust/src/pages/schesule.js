import { useEffect, useState } from 'react';

import  Day  from "@/components/Day"
import {getDays}  from "pages/api/days"


export default function Schesule() {
    const [days,setDays] = useState([])
    useEffect(() => {
        async function fethDays(){
            const response = await getDays()
            setDays(response)
        }
        fethDays()
    },[])
    return (
        <Day props={days}/>
    )
}
