import React, { Component } from 'react';
import ScoreBoard from './scoreBoard';
import GameBoard from './gameBoard';
import RefreshGame from './refreshGame';
import diamond from '../asset/images/diamond.png'
import question from '../asset/images/question.png'


export default class GameLayout extends Component {
	constructor(props) {
	    super(props);
        this.state={
            hiddenImage:question,
            diamond_list:[],
            countDiamond:0,
        }    
        this._click=this._click.bind(this);
    }
    
    countRandom(n){
        for(var i=0;i<n;i++){
            var randomValue=Math.floor((Math.random()*64)+1);
            this.state.diamond_list.push(`image_${randomValue}`)
            if(this.state.diamond_list.includes(`image_${randomValue}`)) continue;
            this.setState({
                diamond_list:this.state.diamond_list,
            })
        }
    }
    componentDidMount=()=>{
        this.countRandom(8)
        // console.log(this.state.diamond_list)
    }
	// click on question    
    _click=(e)=>{
        if(e.target.src===diamond)return;
      const{diamond_list}=this.state;
      for(var i=0;i<diamond_list.length;i++){
          if(diamond_list[i]===e.target.id){
            this.setState({
                [e.target.name]:e.target.src=diamond,
                countDiamond:this.state.countDiamond+1
            })
            break;
          }
          else{
            this.setState({
                [e.target.name]:e.target.src='',
               })
          }
      }
    }
		
// render Table
    renderTable=()=>{
        var trs=[];
        var idCount=0;
        for (let index = 1; index <=8; index++) {
            var tds=[];
            for (let tds_index = 1; tds_index <=8; tds_index++) {
                idCount++
                tds.push(
                    <td onClick={this._click} key={tds_index}>
                        <img className={"hiddenImage image_"+idCount } id={"image_"+idCount} name={"name_"+idCount} src={this.state.hiddenImage} alt=""/>
                    </td>
                )                
            }
        trs.push(<tr key={index}>{tds}</tr>)
        }
        return trs;
    }
	render(){
			const {countDiamond}=this.state;
		  const diamondLeft=8-countDiamond;
		return(
			<div className="game_layout">
					<ScoreBoard diamondLeft={diamondLeft}/>
					<GameBoard gameTable={this.renderTable()}/>
					<RefreshGame/>
			</div>
		)
	}
}
