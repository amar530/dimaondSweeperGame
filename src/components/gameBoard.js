import * as React from 'react';
const GameBoard =(props)=>{
	return(
		  <table>
			<tbody>
				{props.gameTable}
			</tbody>
        </table>
	)
}
export default GameBoard;