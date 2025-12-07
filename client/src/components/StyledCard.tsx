import { Card, styled, type CardProps } from "@mui/material";

type Props = {
  variant?: "content" | "nav";
} & Omit<CardProps, "variant">;

const NavCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
  borderRadius: 24,
  backdropFilter: "blur(24px)",
  boxShadow:
    "0px 16px 16px rgba(0, 0, 0, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.32)",
}));

const ContentCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  borderRadius: 24,
  backdropFilter: "blur(12px)",
  padding: theme.spacing(8),
  boxShadow:
    "0px 489px 196px rgba(0, 0, 0, 0.01), 0px 275px 165px rgba(0, 0, 0, 0.05), 0px 122px 122px rgba(0, 0, 0, 0.09), 0px 31px 67px rgba(0, 0, 0, 0.1)",
}));

function StyledCard({ children, variant = "content", ...props }: Props) {
  const CardComponent = variant === "content" ? ContentCard : NavCard;

  return (
    <CardComponent elevation={0} {...props}>
      {children}
    </CardComponent>
  );
}

export default StyledCard;
