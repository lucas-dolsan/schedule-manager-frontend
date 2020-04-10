import React from 'react';
import data from '../../test_data/scheduler_data.json'

function renderSchedules(schedules) {
    return schedules.map(schedule => JSON.stringify(schedule))
}


function Home() {
    return (
        renderSchedules(data.cronogramas)
    )
}

export default Home