
function Count({count, setCount}) {

    return (
      <div style={{ border: '5px solid white', padding:"10px"}}>
        <h1>Count</h1>
        <p>count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Add</button>
      </div>
     
    )
  }
  
  export default Count
  