import PropTypes from "prop-types";

function CarHeader(props){
    console.log(props)
    return (
        <div>
            <h1>{props.name} in {props.location}</h1>
        </div>
    )
}

CarHeader.propTypes = {
    name: PropTypes.String,
    location: PropTypes.String,
}

export default CarHeader;