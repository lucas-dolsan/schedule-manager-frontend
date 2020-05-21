import React, { useState, useEffect } from "react"
import dataProvider from "../../data-provider"
import endpoints from "../../constants/endpoints"

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
    {cronogramas}   
    </>
  )
}

export default Cronogramas
