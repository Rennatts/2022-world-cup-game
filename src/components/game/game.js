import React, { useState, useEffect } from 'react';
import {FlexBox} from './style';
import differenceBy from 'lodash/differenceBy';
import DataItems from './../../data';


const Game = () => {
    const [misses, setMisses] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winner, setWinner] = useState([]);
    const [winners, setWinners] = useState([]);
    const [loading, setLoading] = useState(false);
    const [updated, setUpdated] = useState([]);
    const [roundFinished, setRoundFinished] = useState(false);
    const [final, setFinal] = useState(false);
    const [loosers, setLoosers] = useState([]);



    useEffect(()=> {
        const random = DataItems.DataItems.sort(()=> Math.random() - 0.5);
        setMisses(random);
        setDisplays([random[0], random[1]]);

    },[]);


    function selectionHandler(miss) {
        setWinner(miss);
        setWinners([...winners, miss]);
        const looser = displays.filter(item => item !== miss);
        setLoosers([...loosers, looser[0]]);
        setLoading(true);
    };



    const handleData = () => {
        if(loading === true){
            const result = differenceBy(DataItems.DataItems, loosers, 'country');

            setUpdated(result);
            setRoundFinished(true);

            if(roundFinished === true){
                const random = updated.sort(()=> Math.random() - 0.5);
                setMisses(random);
                setDisplays([random[0], random[1]]);
                setLoading(false);

                if(updated.length === 1){
                    setFinal(true);
                }
            }

        }
    };

    handleData();



    return (
        <FlexBox>
            <h1 className="title">2022 World cup</h1>
            {final ? 
            (
                <div 
                className="final">
                    <div className="centered">
                    <h1>Winner</h1>
                        <img alt={winner.country} className="image" src={winner.src}></img>
                        <h5>{winner.country}</h5>
                    </div>
                </div>
                
            ) : 
            (
                displays.map(d => {
                    return (
                            <div 
                            className="flex-1" 
                            key = {d.country} 
                            onClick={()=> selectionHandler(d)}>
                                <img alt={d.country} className="image" src={d.src}></img>
                                <h1>{d.country}</h1>
                            </div>
                        )
                })
            )}
        </FlexBox>
    )

};


export default Game;