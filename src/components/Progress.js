import React from 'react'

const Progress = ({points, index, numQuestions, maxPossiblePoints, answer}) => {
  return (<>    <progress max={numQuestions} value={index + Number(answer!=null)} />
    <header className='progress'>
        <p>Questions<strong> {index+1}</strong> / {numQuestions}</p>
        <p><strong>{points}</strong>/ {maxPossiblePoints}Points</p>
    </header>
    </>

  )
}

export default Progress