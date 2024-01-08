import { useForm } from "react-hook-form";
import Tags from "./Tags";
import "./App.css";

export type FormValues = {
  tags: string[];
};

const defaultValues = {
  tags: ["tag1"],
};

function App() {
  const { handleSubmit, reset, formState, watch, getValues, control } = useForm(
    {
      defaultValues,
    },
  );

  const { isValid } = formState;

  // const values = watch();
  const values = getValues();

  console.log("VALUES", values);

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <code>
        <pre>getValues: {values.tags.toString()}</pre>
      </code>
      <Tags control={control} name="tags" />
      <button
        type="button"
        onClick={() =>
          reset(
            { ...defaultValues },
            { keepDirty: true, keepDirtyValues: true },
          )
        }
      >
        Reset
      </button>
    </form>
  );
}

export default App;
