import type { Space } from "@/types/graphql";

type Props = {
  selected: string | null;
  options: Space[];
  onChange: (value: string | null) => void;
};

function SpaceSwitcher({ selected, options, onChange }: Props) {
  return (
    <select value={selected || ""} onChange={(e) => onChange(e.target.value)}>
      {options.map((space) => (
        <option key={space.id} value={space.id}>
          {space.name}
        </option>
      ))}
    </select>
  );
}

export default SpaceSwitcher;
