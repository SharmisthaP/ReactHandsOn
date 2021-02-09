import React, { Component } from 'react';

export const ListOfPlayers = (props) => {
    const players=props.players;
    return ( 
        <ul>
        {players.map((player,i)=>{
            return(<li key={i}>
                Mr. {player.name} <span>{player.score}</span>
            </li>)
        })}
        </ul>
     );
}
