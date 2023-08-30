import { Box } from './Box';

export function Boxes({ numbers, setNumbers, setText }) {
  function handleClick(i, value) {
    const nextNumbers = [...numbers];
    nextNumbers[i] = value;
    setNumbers(nextNumbers);
    setText("");
  }

  const boxesArray = [0, 1, 2, 3]; // ここ本当にあってる？

  return (
    <div className='boxes'>
      {boxesArray.map((myKey) => {
        return (
          <Box value={numbers[myKey]} onBoxChange={(event) => handleClick(myKey, event.target.value)} key={myKey.toString()}/> // keyを渡さないといけない？
        )}
      )}
    </div>
  )
}