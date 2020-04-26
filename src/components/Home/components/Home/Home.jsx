import React, { useState, useEffect } from 'react';
import { Cronograma } from '../Cronograma';
import dataProvider from '../../../../data-provider'
import endpoints from '../../../../constants/endpoints';


function renderCronogramas(cronogramas) {
  return cronogramas.map(cronograma => <Cronograma key={cronograma.uuid} cronograma={cronograma} />)
}

function Home() {
  const [cronogramas, setCronogramas] = useState(null)

  useEffect(() => {
    async function getTestCronogramas() {
      const data = await dataProvider.getList(endpoints.TESTS.CRONOGRAMAS)
      setCronogramas(data.cronogramas)
    }
    getTestCronogramas()
  }, [])

  return cronogramas && renderCronogramas(cronogramas)
}

export default Home
