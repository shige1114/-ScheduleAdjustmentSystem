import { useLayoutEffect, useEffect, useState } from 'react';

import Day from "@/components/Day"
import { getDays } from "pages/api/getDays"
import { Button } from '@mui/material';

export default function Schesule() {
    const [days, setDays] = useState([])
    useEffect(() => {
        async function fethDays() {
            const response = await getDays()
            setDays(response)
        }
        fethDays()
    }, [])

    return (
        <>
            <h2>3月</h2>
            
            <Day props={days} />
        </>

    )
}
