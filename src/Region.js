import React, {useState} from 'react'

export default function Region() {
    const [regionData, setData] = useState(['no data to display'])
    const [date, setdate] = useState('set new date')

    const request = () => {
        fetch(`https://covid-api.com/api/reports?date=${date}&iso=USA`)
        .then(res => res.json())
        .then(response => setData(response.data))
 
     }

    const setDate = (e) => {
        setDate(e.target.value)
    }

    return (
        <div>
        Single region information review
        <input onChange = {setDate} />
        <button onClick={request}>request report for {date}</button>
        </div>
    )
}
