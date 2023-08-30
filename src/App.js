import React, { useState } from 'react';
import './App.css';
import { Boxes } from './Boxes';
import { Button } from './Button';

export default function App() {
  const [numbers, setNumbers] = useState(Array(4));
  const [isCollected, setIsCollect] = useState(false);
  const [text, setText] = useState("");

  if (isCollected) {
    return (
      <div className='contents'>
        <p className='message'>最終問題、大正解！🌻<br />謎解きクリアです〜〜おめでとう！🎊🎉</p>
        <p className='message'>お誕生日おめでとうのメッセージが続く。</p>
      </div>
    );
  } else {
    return (
      <div className='contents'>
        <label>最終問題の答えをここに入力してね</label>
        <Boxes numbers={numbers} setNumbers={setNumbers} setText={setText} />
        <Button inputNumbers={numbers} setIsCollect={setIsCollect} setText={setText} />
        <p>{ text }</p>
      </div>
    );
  }
}
