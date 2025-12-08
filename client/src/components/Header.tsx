import { Stack, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

type Props = {
  title: string;
} & PropsWithChildren;

function Header({ title, children }: Props) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="body2" sx={{ fontSize: 36 }}>
        {title}
      </Typography>
      {children}
    </Stack>
  );
}

export default Header;
