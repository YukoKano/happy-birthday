import { Box } from './Box';

export function Boxes({ numbers, setNumbers, setText }) {
  function handleClick(i, value) {
    const nextNumbers = [...numbers];
    nextNumbers[i] = value;
    setNumbers(nextNumbers);
    setText("");
  }

  const boxesArray = Array(4).fill(null);

  return (
    <div className='boxes'>
      {boxesArray.map((_, index) =>(
        <Box value={numbers[index]} onBoxChange={(event) => handleClick(index, event.target.value)} key={index}/> // keyを渡す必要がある
      ))}
    </div>
  )
}