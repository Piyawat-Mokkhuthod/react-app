
import PropTypes from 'prop-types';

function ShowStudents(props) {
  return (
    <ol>
      { props.id} :{props.firstName} {props.lastName}
    </ol>
  )
}

ShowStudents.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default ShowStudents