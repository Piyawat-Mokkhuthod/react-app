import PropTypes from 'prop-types';


function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <div>I`m a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
  
}
ModalContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default ModalContent;
