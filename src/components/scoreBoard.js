import * as React from 'react';

const ScoreBoard=(props)=>{
	return(
	<div className="score_board">
       	<strong>Diamond Left  : {props.diamondLeft} </strong>
    </div>
	)
}
export default ScoreBoard;