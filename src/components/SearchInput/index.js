import PropTypes from "prop-types";
import styles from "./SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      <input
        onChange={props.onChangeTitle}
        value={props.title}
        className={styles.input}
        type="text"
        placeholder="List"
      />
      <input
        onChange={props.onChangeDescription}
        value={props.description}
        className={styles.input}
        type="text"
        placeholder="Description"
      />
      <button className={styles.addButton} type="submit">
        add
      </button>
    </form>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onChangeDescription: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SearchInput;