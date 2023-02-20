import { useLayoutEffect, useEffect, useState } from 'react';

import Day from "@/components/Day"
import { getDays } from "pages/api/getDays"
import Time from '@/components/Time';
import { Button } from '@mui/material';
import styles from '../styles/Home.module.css'
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
            <table >
                <td><Button variant="text" color="primary">6</Button></td>
                <td><Button variant="text" color="primary">7</Button></td>
                <td><Button variant="text" color="primary">8</Button></td>
                <td><Button variant="text" color="primary">9</Button></td>
                <td><Button variant="text" color="primary">10</Button></td>
            </table>
            <Day props={days} />
        </>

    )
}
