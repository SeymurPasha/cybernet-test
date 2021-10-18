import React, {useEffect, useState} from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Region({regionName,iso}) {

   
    return (
        <div style = {{cursor:'pointer'}}>
           
            <Link to='/region'>{regionName}</Link>
        
        </div>
    )
}
