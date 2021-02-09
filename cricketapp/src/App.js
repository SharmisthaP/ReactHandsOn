import logo from './logo.svg';
import './App.css';
import {ListOfPlayers} from './Components/ListOfPlayers';
import ListOfPlayersBelow70 from './Components/ListOfPlayersBelow70';
import { OddPlayers } from './Components/OddPlayers';
import { EvenPlayers } from './Components/EvenPlayers';
import { ListOfIndianPlayers } from './Components/ListOfIndianPlayers';


function App() {
  const players=[
    {name:"White",score:50},
    {name:"Michael",score:70},
    {name:"John",score:40},
    {name:"Ann",score:61},
    {name:"Eizabeth",score:61},
    {name:"Sachin",score:95},
    {name:"Dhoni",score:100},
    {name:"Virat",score:84},
    {name:"Jadeja",score:64},
    {name:"Raina",score:75},
    {name:"Rohit",score:80}
  ];

  const indianPlayers=[
    "Sachin1",
    "Dhoni2",
    "Virat3",
    "Rohit4",
    "Yuvraaj5",
    "Raina6"
  ];

  var flag=true;
  if(flag){
    return (
      <div>
        <h1>List of Players</h1>
        <ListOfPlayers players={players}/>
        <hr/>
        <h1>List of Players having Scores Less than 70</h1>
        <ListOfPlayersBelow70 players={players}/>
      </div>
    );
  }
  else{
    return (
      <div>
        <div>
          <h1>Odd Players</h1>
          {OddPlayers(indianPlayers)}
          <hr/>
          <h1>Even Players</h1>
          {EvenPlayers(indianPlayers)}
        </div>
        <hr/>
        <div>
          <h1>List of Indian Players merged</h1>
          <ListOfIndianPlayers players={indianPlayers}/>
        </div>
      </div>
    );
  }
}

export default App;
