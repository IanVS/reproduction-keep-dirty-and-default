import { useController, type UseControllerProps } from "react-hook-form";
import type { FormValues } from "./App";

export default function Tags({
  control,
  name,
}: UseControllerProps<FormValues, "tags">) {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return (
    <fieldset>
      <legend>Tags</legend>
      <button
        type="button"
        onClick={() => onChange([...value, `tag${value.length + 1}`])}
      >
        Add
      </button>
      <ul>
        {value.map((tag, index) => (
          <li key={tag + index}>
            {tag}
            <button
              onClick={() =>
                onChange([...value.slice(0, index), ...value.slice(index + 1)])
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
