import SubSection from './SubSection'

function Section({count, setCount}) {

    return (
      <div style={{ border: '5px solid blue', padding:"10px"}}>
        <h1>Section</h1>
        <SubSection count={count} setCount={setCount}/>
      </div>
    )
  }
  
  export default Section
  