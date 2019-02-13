import * as React from 'react';
import Route from 'react-router-dom/Route'
import {Switch} from 'react-router-dom';
import {SPLASH_SCREEN, GAME} from '../path/index'
import SplashScreen from './splashScreen';
import GameLayout from './gameLayout';
import NoPageFound from './noPageFound';
class Routes extends React.Component{
	render(){
		return(
			<Switch>
				<Route path={SPLASH_SCREEN} exact render={()=><SplashScreen/>}/>
				<Route path={GAME} exact render={()=><GameLayout/>}/>
				<Route component={NoPageFound}/>
			</Switch>
		)
	}
}
export default Routes