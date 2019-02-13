import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { SPLASH_SCREEN } from '../path/index';
import noFound from '../asset/images/noFound.png'


export default class NoPageFound extends Component {
  render() {
    return (
      <div className="noPageFound">
      <span className="noFound">
        <img src={noFound} alt="NoFound"/>
        <br/>
        <label> OOPS !! No One is Here.</label><br/>
        <Link to={SPLASH_SCREEN} className="goBackSplashScreen">Go Back</Link>
        </span>
      </div>
    )
  }
}
