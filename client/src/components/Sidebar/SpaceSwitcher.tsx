import type { Space } from "@/types/graphql";

type Props = {
  selected: string;
  options: Space[];
  onChange: (value: string) => void;
};

function SpaceSwitcher(props: Props) {
  return <div></div>;
}

export default SpaceSwitcher;
