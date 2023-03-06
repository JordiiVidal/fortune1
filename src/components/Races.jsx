import data from '../local-json/races'
import { useState } from 'react';

export default function Races(){
    const [races, _] = useState(data.races ?? []);
    console.log(races);
    return (
        <ul>
            {
                races.map((race) => <li key={race.round}>{race.raceName}</li>)
            }
        </ul>
    )
}