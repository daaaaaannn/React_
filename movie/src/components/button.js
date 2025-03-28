import PropTypes from 'prop-types';
import styles from '../styles/button.module.css';

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
