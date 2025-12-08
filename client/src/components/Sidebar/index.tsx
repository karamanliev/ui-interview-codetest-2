import logo from "@/assets/logo.svg";
import { useSpace } from "@/context/SpaceContext";
import { Box, Stack, styled } from "@mui/material";
import StyledCard from "../StyledCard";
import SidebarNav from "./SidebarNav";
import SidebarProfile from "./SidebarProfile";
import SpaceSwitcher from "./SpaceSwitcher";

const SidebarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  minWidth: 240,
  width: 240,
  height: "calc(100vh - 64px)",
  paddingLeft: theme.spacing(8),
  paddingRight: 0,
  top: theme.spacing(8),
  gap: theme.spacing(6),
  boxSizing: "content-box",
}));

function Sidebar() {
  const { currentSpaceId, spaces, setCurrentSpaceId, isUserLoading } =
    useSpace();

  return (
    <SidebarContainer>
      <StyledCard
        variant="nav"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <Stack
          sx={{
            py: 24,
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Stack>
        <Box sx={{ flexGrow: 1 }}>
          <SidebarNav currentSpaceId={currentSpaceId} />
        </Box>
        <SidebarProfile />
      </StyledCard>

      <SpaceSwitcher
        selected={currentSpaceId}
        options={spaces}
        onChange={setCurrentSpaceId}
        showSkeleton={isUserLoading}
      />
    </SidebarContainer>
  );
}

export default Sidebar;
