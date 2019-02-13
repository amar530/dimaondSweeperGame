import * as React from 'react';
import {Link} from 'react-router-dom'
import { SPLASH_SCREEN } from '../path';
const RefreshGame=()=>{
	return(
	<div className="refreshGame">
       	<Link to={SPLASH_SCREEN} style={{textDecoration:'none'}}><strong style={{cursor:'pointer'}}>Refresh Game </strong></Link>
    </div>
	)
}
export default RefreshGame;