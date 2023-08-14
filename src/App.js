import React, { useState } from 'react';
import './App.css';

const collectNumbers = ['2', '2', '4', '0'];

function Box({ onBoxChange }) { // 関数渡す時は{}で囲うのが大事っぽい
  return (
    <input className="box" type="text" inputMode="numeric" maxLength="1" pattern='\d' onChange={onBoxChange} />
  );
}

function Button({ inputNumbers, isFinishedEvent, changeTextEvent }) { // numbersも{}に入れる必要がある？
  function click() {
    if (inputNumbers.toString() === collectNumbers.toString()) {
      isFinishedEvent(true);
    } else {
      changeTextEvent("残念！答えが間違っているよ😢");
    }
  }
  return (
    <button onClick={click}>答えを送信！</button>
  )
}

function Boxes({ isFinishedFunction}) {
  const [collectText, setIsCollectText] = useState("");
  const [numbers, setNumbers] = useState(Array(4));

  function handleClick(i, value) {
    const nextNumbers = numbers.slice();
    nextNumbers[i] = value;
    setNumbers(nextNumbers);
    setIsCollectText("");
  }

  return (
    <>
      <div className='boxes'>
        <Box value={numbers[0]} onBoxChange={(event) => handleClick(0, event.target.value)}/>
        <Box value={numbers[1]} onBoxChange={(event) => handleClick(1, event.target.value)}/>
        <Box value={numbers[2]} onBoxChange={(event) => handleClick(2, event.target.value)}/>
        <Box value={numbers[3]} onBoxChange={(event) => handleClick(3, event.target.value)}/>
      </div>
      <Button inputNumbers={ numbers } isFinishedEvent={isFinishedFunction} changeTextEvent={ setIsCollectText } />
      <p>{ collectText }</p>
    </>
  )
}

export default function App() {
  const [isFinished, setIsFinished] = useState(false);

  if (!isFinished) {
    return (
      <div className='contents'>
        <label>最終問題の答えをここに入力してね</label>
        <Boxes isFinishedFunction={ setIsFinished } />
      </div>
    );
  } else {
    return (
      <div className='contents'>
        <p className='message'>最終問題、大正解！🌻<br />謎解きクリアです〜〜おめでとう！🎊🎉</p>
        <p className='message'>お誕生日おめでとうのメッセージが続く。</p>
      </div>
    )
  }
}
