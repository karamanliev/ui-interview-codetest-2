import type { PropsWithChildren } from "react";

type Props = {
  title: string;
} & PropsWithChildren;

function Header({ title, children }: Props) {
  return (
    <>
      <div>{title}</div>
      {children}
    </>
  );
}

export default Header;
