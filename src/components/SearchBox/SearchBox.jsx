import css from "./SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchContainer}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        className={css.searchInput}
      />
    </div>
  );
}
