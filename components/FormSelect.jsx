export default function FormSelect({ name, options }) {
  return (
    <>
      <select
        class="form-select"
        aria-label="Default select example"
        name={name}
      >
        <option selected>Select City</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}
