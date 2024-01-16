import { useForm } from "react-hook-form";
import "./App.css";

type FormValues = {
  firstName: string;
  lastName: string;
};

const defaultValues = {
  firstName: "",
  lastName: "",
};

function App() {
  const { handleSubmit, register, reset, formState } = useForm<FormValues>(
    {
      defaultValues,
    },
  );

  const { dirtyFields } = formState;

  function resetForm() {
    reset(
      { ...defaultValues, firstName: "was reset, is dirty" },
      { keepDefaultValues: true }
    );
  }

  function resetKeepDirty() {
    reset(
      { ...defaultValues, firstName: "was reset, should be dirty" },
      { keepDefaultValues: true, keepDirtyValues: true }
    );
  }

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <code>
        <pre>dirtyFields: {JSON.stringify(dirtyFields)}</pre>
      </code>
      <input {...register("firstName")} placeholder="First Name" />
      <input {...register("lastName")} placeholder="Last Name" />
      <button type="button" onClick={resetKeepDirty}>
        Reset with keepDirtyValues
      </button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
}

export default App;
