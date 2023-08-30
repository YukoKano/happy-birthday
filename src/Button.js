import { collectNumbers } from "./constants";

export function Button({ inputNumbers, setIsCollect, setText }) {
  function click() {
    // console.log(inputNumbers);
    if (inputNumbers.toString() === collectNumbers.toString()) {
      setIsCollect(true);
    } else {
      setIsCollect(false);
      setText("答えが間違っているよ");
    }
  }
  return (
    <button onClick={click}>答えを送信！</button>
  )
}