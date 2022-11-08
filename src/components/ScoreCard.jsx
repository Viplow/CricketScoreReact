import React, { useEffect, useState } from 'react'
import { getData } from '../Api/ApiFunctions'
const ScoreCard = () => {
  const [data, setData] = useState("")
  useEffect(() => {
    getData(1).then((data) => setData(data));
  }, [])
  return (
    data &&
    <div className='scoreDiv whitebox'>
      <div className='header'>
        {data.competition.title} - {data.title} , {data.subtitle}
      </div>
      <div className='scorecardsection'>
        <div>
          <div className='firstTeamDiv'>
            <img src={data.teama.thumb_url} alt="none" className='firstTeamImage'/>
            {data.teama.short_name}
            <div className='scoresFirst'>
              {data.teama.scores_full}
            </div>
          </div>
          <div className='secondTeamDiv'>
            <img src={data.teamb.thumb_url} alt="none" className='secondTeamImage'/>
            {data.teamb.short_name}
          <div className='scoresFirst'>
              {data.teamb.scores_full}
            </div>
          </div>
        </div>
      </div>
      <div className='status center'>
        {data.status_note}
      </div>
    </div>
  )
}

export default ScoreCard