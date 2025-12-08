import { Stack, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

type Props = {
  title: string;
} & PropsWithChildren;

function Header({ title, children }: Props) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="body2" sx={{ fontSize: 36, flexGrow: 1 }}>
        {title}
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
}

export default Header;
