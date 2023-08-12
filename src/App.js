import React, { useState } from 'react';
import './App.css';

export default function App() {
  function Box({ onBoxChange }) { // 関数渡す時は{}で囲うのが大事っぽい
    return (
      <input className="box" type="text" inputMode="numeric" maxLength="1" pattern='\d' onChange={onBoxChange} />
    );
  }

  function Boxes() {
    const [collectText, setIsCollectText] = useState("");
    const [numbers, setNumbers] = useState(Array(4));

    function Button() {
      function click() {
        const collectNumbers = ['2', '2', '4', '0'];

        if (numbers.toString() === collectNumbers.toString()) {
          setIsFinished(true);
        } else {
          setIsCollectText("残念！答えが間違っているよ😢");
        }
      }
      return (
        <button onClick={click}>答えを送信！</button>
      )
    }

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
        <Button />
        <p>{ collectText }</p>
      </>
    )
  }

  const [isFinished, setIsFinished] = useState(false);

  if (!isFinished) {
    return (
      <div className='contents'>
        <label>最終問題の答えをここに入力してね</label>
        <Boxes />
      </div>
    );
  } else {
    return (
      <div className='contents'>
        <p className='message'>最終問題、大正解！🌻<br />謎解きクリアです〜〜おめでとう！🎊🎉</p>
        <p className='message'>お誕生日おめでとうのメッセージ</p>
      </div>
    )
  }
}
