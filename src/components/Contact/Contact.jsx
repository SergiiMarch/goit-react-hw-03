export default function Contact({ value }) {
  console.log(value);
  return (
    <div>
      <h2>{value.name}</h2>
      <p>{value.number}</p>
    </div>
  );
}
