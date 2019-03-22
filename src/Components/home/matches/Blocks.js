import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import {firebaseLooper,reverseArray } from '../../ui/misc';
import MatchesBlock from  '../../ui/matches-block';
import Slide from 'react-reveal/Slide';

class Blocks extends Component {

    state={
        matches:[]
    }

    componentDidMount(){
        firebaseMatches.limitToLast(6).once('value').then((snapshort)=>{
            const matches = firebaseLooper(snapshort);
            this.setState({
                matches:reverseArray(matches)
            })
        })
    }

    showMatches=(matches)=>(
        matches? 
            matches.map((match)=>(
                <Slide bottom key={match.id}>
                    <div className="item">
                        <div className="wrraper">
                            <MatchesBlock match={match}/>
                        </div>
                    </div>
                </Slide>
            ))
        :null
    )

    render() {
        console.log(this.state.matches);
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        );
    }
}

export default Blocks;