import useSpace from "@/hooks/useSpace";
import { Avatar, Collapse, Stack, Typography } from "@mui/material";
import { useState } from "react";

function SidebarProfile() {
  const [showEmail, setShowEmail] = useState(false);
  const { user } = useSpace();

  return (
    <Stack
      sx={{
        py: 24,
        alignItems: "center",
        cursor: "pointer",
      }}
      onMouseEnter={() => setShowEmail(true)}
      onMouseLeave={() => setShowEmail(false)}
    >
      <Avatar
        alt={user?.name}
        src={user?.avatar}
        sx={{ width: 36, height: 36, cursor: "pointer" }}
      />
      <Collapse in={showEmail} timeout={300}>
        <Typography
          sx={{
            mt: 1,
          }}
        >
          {user?.email}
        </Typography>
      </Collapse>
    </Stack>
  );
}

export default SidebarProfile;
