import { Stack, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

type Props = {
  title: string;
} & PropsWithChildren;

function Header({ title, children }: Props) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="h1" component="div">
        {title}
      </Typography>
      {children}
    </Stack>
  );
}

export default Header;
