
function Cars(props){

    return (
      <ul>
        {props.carsArray.map(car => (
          <>
          <li key={car.id}>
           {car.year} {car.make} {car.model}
          </li>
          <button onClick={props.increasePurchase}>PURCHASE</button>
          </>
        ))}
      </ul>
    )
}


export default Cars;