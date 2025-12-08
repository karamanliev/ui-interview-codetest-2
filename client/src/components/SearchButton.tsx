import { useTranslation } from "@/i18n";
import { Button, Input, styled } from "@mui/material";

function SearchButton() {
  const { t } = useTranslation();

  const StyledSearchButton = styled(Button)(({ theme }) => ({
    background:
      "linear-gradient(0deg, rgba(87, 52, 172, 0.77), rgba(87, 52, 172, 0.77)), radial-gradient(82.39% 94.21% at 90.1% 10.23%, #C723DC 0%, #6B1376 51.44%, #361376 98.56%)",
    padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
    borderRadius: 24,
    backdropFilter: "blur(24px)",
    transition: "all 0.3s ease-in-out",
    boxShadow:
      "101px 306px 129px rgba(0, 0, 0, 0.01), 57px 172px 109px rgba(0, 0, 0, 0.03), 25px 76px 80px rgba(0, 0, 0, 0.04), 6px 19px 44px rgba(0, 0, 0, 0.05), inset 0px 1px 2px rgba(255, 255, 255, 0.45)",

    "&:hover": {
      boxShadow:
        "101px 306px 129px rgba(0, 0, 0, 0.01), 57px 172px 109px rgba(0, 0, 0, 0.03), 25px 76px 80px rgba(0, 0, 0, 0.04), 6px 19px 44px rgba(0, 0, 0, 0.05), inset 0px 2px 6px rgba(255, 255, 255, 0.65)",
    },
    "& .MuiTouchRipple-child": {
      backgroundColor: theme.palette.primary.light,
    },
  }));

  return (
    <StyledSearchButton variant="contained">
      {t("common.search")}
    </StyledSearchButton>
  );
}

export default SearchButton;
