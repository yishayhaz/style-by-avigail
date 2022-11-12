import { BsWhatsapp } from "react-icons/bs";

export default function Form({ form }) {
  const handleChange = (e) => {};

  if (!form) return null;
  return (
    <form>
      {form.map((field) => {
        if (field.type === "text") {
          return <input className="input" {...field} onChange={handleChange} />;
        }
        if (field.type === "select") {
          return (
            <select
              className="select"
              name={field.name}
              onChange={handleChange}
            >
              {field.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          );
        }
      })}
      <button className="input-button">
        שליחה
        <BsWhatsapp />
      </button>
    </form>
  );
}
