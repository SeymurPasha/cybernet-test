import React, {useContext, useEffect, useState} from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import RegionItem from "./RegionItem"
import Region from "./Region"



function App() {

  const [regions, setregions] = useState([])
  const [currentRegion, setcurrentRegion] = useState()
  
  useEffect(() => {
    fetch('https://covid-api.com/api/regions?per_page=20')
    .then(res => res.json())
    .then(response => setregions(response.data))

 }, [])
 
  return (
    <div className="App">
      
      {regions.map(i => <RegionItem key={i.iso} regionName = {i.name} iso = {i.iso} />)}
      <Switch>
      <Route path="/region" exact component={Region} />
      </Switch>
    </div>
  )
}


export default App