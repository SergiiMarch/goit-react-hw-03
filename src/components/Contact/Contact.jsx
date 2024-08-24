import style from "./Contact.module.css";

export default function Contact({ value, onDelete }) {
  return (
    <div className={style.container}>
      <h2 className={style.name}>{value.name}</h2>
      <p className={style.number}>{value.number}</p>
      <button className={style.buttonDelete} onClick={() => onDelete(value.id)}>
        Delete
      </button>
    </div>
  );
}
