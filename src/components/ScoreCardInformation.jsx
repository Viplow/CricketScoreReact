import React, { useEffect, useState } from 'react'
import { getData } from '../Api/ApiFunctions';
import BattingComponent from './BattingComponent';
import BowlingComponent from './BowlingComponent';
import DidNotBatComponent from './DidNotBatComponent';
import ExtrasComponent from './ExtrasComponent';

const ScoreCardInformation = () => {
  const [data, setData] = useState("")
  const [selectedTeam, setSelectedTeam] = useState(0)
  useEffect(() => {
    getData(2).then((data) => setData(data));
  }, [])
  let classForScore1 = "firstTeamScore"
  let classForScore2 = "secondTeamScore"
  if(selectedTeam == 0){
    classForScore1 = "firstTeamScore active"
  }
  else{
    classForScore2 = "secondTeamScore active"
  }
  return (
    data &&
    <>
      <div className={classForScore1} onClick={() => setSelectedTeam(0)}>
        <div>{data[0].name}</div>
        <div>{data[0].scores_full}</div>
      </div>
      <div className={classForScore2} onClick={() => setSelectedTeam(1)}>
        <div>{data[1].name}</div>
        <div>{data[1].scores_full}</div>
      </div>
      <div className='batting'>
        Batting
        <BattingComponent data={data[selectedTeam].batsmen} />
      </div>
      <div>
        <ExtrasComponent data={data[selectedTeam].extra_runs} />
      </div>
      <div>
        Yet To Bat
        <DidNotBatComponent data={data[selectedTeam].did_not_bat} />
      </div>
      <div className='bowling'>
        Bowling
        <BowlingComponent data={data[selectedTeam].bowlers} />
      </div>
    </>

  )
}

export default ScoreCardInformation