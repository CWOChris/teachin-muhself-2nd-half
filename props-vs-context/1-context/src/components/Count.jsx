import { useCountContext } from '../utils/CountContext';

function Count() {
    const { count, setCount } = useCountContext();
    return (
      <div style={{ border: '5px solid white', padding:"10px"}}>
        <h1>Count</h1>
        <p>count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Add</button>
      </div>
     
    )
  }
  
  export default Count
  