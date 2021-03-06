import React, { Component } from 'react';

const ListOfPlayersBelow70 = (props) => {
    const players=props.players;
    const players70=[];
    players.map(player=>{
        if(player.score<70)
            players70.push(player);     
    });

    return (
        <div>
            <ul>
            {players70.map(player=>{
                return (
                    <li>{player.name} <span> {player.score}</span></li>
                )
            })}
            </ul>
        </div>
    );
}
 
export default ListOfPlayersBelow70;