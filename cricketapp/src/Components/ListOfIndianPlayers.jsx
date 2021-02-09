import React, { Component } from 'react';

export const ListOfIndianPlayers=()=>{
    const T20players=["FirstPlayer","SecondPlayer","ThirdPlayer"]
    const Ranjiplayers=["FourthPlayer","FifthPlayer","SixthPlayer"];
    const IndianPlayers=[...T20players,...Ranjiplayers];
    return (
        <ul>
            {IndianPlayers.map(player=>{
                return (
                    <li><span> M : {player}</span></li>
                );
            })}
        </ul>
    );
}