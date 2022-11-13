import { BsWhatsapp } from "react-icons/bs";

export default function Form({ form, setForm, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) =>
      prev.map((item) => {
        if (item.name === name) {
          return { ...item, value: value };
        }
        return item;
      })
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      {form.map((field, index) => {
        if (field.type === "text") {
          return (
            <input
              key={index}
              className="input"
              {...field}
              value={field.value || ""}
              onChange={handleChange}
            />
          );
        }
        if (field.type === "textarea") {
          return (
            <textarea
              key={index}
              className="textarea"
              {...field}
              value={field.value || ""}
              onChange={handleChange}
            />
          );
        }
        if (field.type === "select") {
          return (
            <select
              key={index}
              className="select"
              name={field.name}
              onChange={handleChange}
              value={field.value || ""}
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
