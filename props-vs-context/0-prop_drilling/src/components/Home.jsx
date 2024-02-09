import Section from './Section'

function Home({count, setCount}) {

  return (
    <div style={{ border: '5px solid yellow', padding:"10px"}}>
      <h1>HOME</h1>
      <Section count={count} setCount={setCount}/>
    </div>
  )
}

export default Home
