import { useState } from 'react'
import data from '../local-json/drivers'


export default function Drivers(){
    const [drivers, _] = useState(data.drivers ?? []);

    return (
        <ul>
            {
                drivers.map((driver) => <li key={driver.driverId}>{driver.givenName}</li>)
            }
        </ul>
    )
}