import MainBody from './MainBody'

function SubSection({count, setCount}) {

    return (
      <div style={{border: '5px solid red', padding:"10px"}}>
        <h1>Other Section</h1>
        <MainBody count={count} setCount={setCount}/>
      </div>
    )
  }
  
  export default SubSection
  