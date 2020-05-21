import React, { useState, useEffect } from "react"
import dataProvider from "../../data-provider"
import endpoints from "../../constants/endpoints"
import { Card } from 'react-bootstrap'
import Cronograma from "./components/Cronograma"

function Cronogramas() {
  const [cronogramas, setCronogramas] = useState(null)

  useEffect(() => {
    async function getCronogramas() {
      const { cronogramas } = await dataProvider.getList(endpoints.CRONOGRAMAS)
      setCronogramas(cronogramas)
    }
    getCronogramas()
  }, [])

  if(!cronogramas)
    return null

  return (
    <>
    {cronogramas.map(cronograma => {
      return  <Cronograma key={cronograma.id} cronograma={cronograma} />
    })}
    </>
  )
}

export default Cronogramas
