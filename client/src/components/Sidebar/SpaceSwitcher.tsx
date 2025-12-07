import type { Space } from "@/types/graphql";

type Props = {
  selected: string | undefined;
  options: Space[];
  onChange: (value: string | undefined) => void;
};

function SpaceSwitcher({ selected, options, onChange }: Props) {
  if (options.length === 0) {
    return <div>No spaces</div>;
  }

  return (
    <select
      value={selected || ""}
      onChange={(e) => {
        const value = e.target.value;
        onChange(value || undefined);
      }}
    >
      {options.map((space) => (
        <option key={space.id} value={space.id}>
          {space.name}
        </option>
      ))}
    </select>
  );
}

export default SpaceSwitcher;
