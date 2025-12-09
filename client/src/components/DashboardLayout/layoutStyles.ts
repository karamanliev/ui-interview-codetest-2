import { styled, Box } from "@mui/material";
import bgImage from "@/assets/bg.webp";

export const DashboardLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
}));

export const MainContainer = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(16),
}));
