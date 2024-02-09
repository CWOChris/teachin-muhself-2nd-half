import Count from './Count'

function MainBody({count, setCount}) {

    return (
      <div style={{border: '5px solid purple',  padding:"10px"}}>
        <h1>Count</h1>
        <Count count={count} setCount={setCount} />
      </div>
    )
  }
  
  export default MainBody
  