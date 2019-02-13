import * as React from 'react';
import { GAME } from '../path';
import {withRouter} from 'react-router-dom';
import splashScreenImage from '../asset/images/loading.gif'
class SplashScreen extends React.Component{
	componentDidMount(){
		setTimeout(() => {
			this.props.history.push(GAME)
		}, 3000);
	}
	render(){
		return(
			<div className="splashScreenLayout">
				<img src={splashScreenImage} alt="Loading.."/>
				<p>Diamond Sweeper Game</p>
			</div>
		)
	}
}
export default withRouter(SplashScreen);