import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {

  const [userchoice,setuserchoice]=useState(0);
  const [option,setoption]=useState('');
  const [winner,setwinner]=useState('');
  const [compchoiceoption,setcompchoiceoption]=useState('');


  const rockhandler=()=>{
    setuserchoice(1);
    setoption('ROCK');
  }
  const paperhandler=()=>{
    setuserchoice(2);
    setoption('PAPER')
  }
  const scissorhandler=()=>{
    setuserchoice(3);
    setoption('SCISSOR')
  }

  useEffect(()=>{
    if(userchoice>=1)
    {
      setTimeout(()=>{
        computerchoice();
        setTimeout(()=>{
          resultfunction();
        },500)
      },1000)
    }
    
  },[userchoice])

  var compchoice=0;
  const computerchoice=()=>{
    compchoice=Math.floor(Math.random()*3)+1;
    if(compchoice==1)
    {
      setcompchoiceoption('ROCK');
    }
    else if(compchoice==2)
    {
      setcompchoiceoption('PAPER');
    }
    else{
      setcompchoiceoption('SCISSOR');
    }
  }

  

  const resultfunction=()=>{
    if(userchoice===compchoice)
    {
      setwinner('TIE');
    }
    else if(userchoice===1)
    {
      if(compchoice===2)
      {
        setwinner('COMPUTER');
        return;
      }
      else if(compchoice===3)
      {
        setwinner('USER');
        return;
      }
    }
    else if(userchoice===2)
    {
      if(compchoice===1)
      {
        setwinner('USER');
        return;
      }
      else if(compchoice==3)
      {
        setwinner('COMPUTER');
        return;
      }
    }
    else{
      if(compchoice===1)
      {
        setwinner('COMPUTER');
        return;
      }
      else if(compchoice===2)
      {
        setwinner('USER');
        return;
      }
    }
  }

  return (
    <div className='body'>
      <div className='choice'>
          <div><button onClick={rockhandler}>ROCK</button></div>
          <div><button onClick={paperhandler}>PAPER</button></div>
          <div><button onClick={scissorhandler}>SCISSOR</button></div>
      </div>
      <div className='choice-user'>
        YOUR CHOICE: {option}
      </div>
      <div className='choice-comp'>
        COMPUTER CHOICE: {compchoiceoption}
      </div>
      <div className='winner'>
        WINNER: {winner}
      </div>
    </div>
  )
}

export default App
