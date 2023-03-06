import { useState } from 'react'
import data from '../local-json/drivers'


function CardDriver({driver}){
    return (
        <div className='card-driver'>
            <div>{driver.permanentNumber}</div>
            <div className='color'>{driver.color}</div>
            <div>
                <small>{driver.givenName}</small>
                <h4 className='name'>{driver.familyName}</h4>
            </div>
        </div>
    )
}

export default function Drivers() {
    const [drivers, _] = useState(data.drivers ?? []);

    return (
        <div className='content-drivers'>
            {
                drivers.map((d) => <CardDriver driver={d} />)
            }
        </div>
    )
}