import { useTranslation } from "@/i18n";
import { ArrowRightRounded } from "@mui/icons-material";
import { ClickAwayListener, Collapse, styled, TextField } from "@mui/material";
import { useState, type KeyboardEvent } from "react";

const StyledSearchButton = styled("div")<{ isOpen: boolean }>(
  ({ theme, isOpen }) => ({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
    height: 51,
    borderRadius: 24,
    backdropFilter: "blur(24px)",
    transition: "all 0.3s ease-in-out",
    background: isOpen ? STYLES.bgOpen : STYLES.bgClosed,
    boxShadow: STYLES.shadowDefault,
    "&:hover": { boxShadow: STYLES.shadowHover },
  }),
);

const TextLabel = styled("span")<{ isOpen: boolean }>(({ isOpen }) => ({
  opacity: isOpen ? 0 : 1,
  width: isOpen ? 0 : "auto",
  transition: "all 0.3s ease-in-out",
  overflow: "hidden",
  transform: isOpen ? "translateX(-10px)" : "translateX(0)",
}));

const IconWrapper = styled("span")<{ isOpen: boolean }>(({ isOpen }) => ({
  display: "flex",
  alignItems: "center",
  width: isOpen ? "24px" : 0,

  transition: "all 0.3s ease-in-out",
  opacity: isOpen ? 1 : 0,
}));

function SearchButton() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onSubmit = () => {
    if (!searchValue) return;
    console.log("Submitted:", searchValue);
    setSearchValue("");
    setOpen(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "Enter":
        onSubmit();
        break;
      case "Escape":
        setSearchValue("");
        setOpen(false);
        break;
    }
  };

  return (
    <ClickAwayListener onClickAway={() => !searchValue && setOpen(false)}>
      <StyledSearchButton
        onClick={() => (open ? onSubmit() : setOpen(true))}
        isOpen={open}
        tabIndex={0}
        role="button"
      >
        <Collapse
          in={open}
          timeout={300}
          orientation="horizontal"
          unmountOnExit
        >
          <TextField
            autoFocus
            placeholder={t("common.search") + "..."}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={onKeyDown}
            sx={{
              minWidth: "200px",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
        </Collapse>

        <TextLabel isOpen={open}>{t("common.search")}</TextLabel>
        <IconWrapper isOpen={open}>
          <ArrowRightRounded />
        </IconWrapper>
      </StyledSearchButton>
    </ClickAwayListener>
  );
}

const STYLES = {
  bgOpen:
    "linear-gradient(85deg, rgba(87, 52, 172, 0.6), rgba(87, 52, 172, 0.6)),radial-gradient(80% 100% at 30% 0%, #C723DC 0%, #6B1376 56.44%, #361376 98.56%)",
  bgClosed:
    "linear-gradient(0deg, rgba(87, 52, 172, 0.77), rgba(87, 52, 172, 0.77)), radial-gradient(82.39% 94.21% at 90.1% 10.23%, #C723DC 0%, #6B1376 51.44%, #361376 98.56%)",
  shadowDefault:
    "101px 306px 129px rgba(0, 0, 0, 0.01), 57px 172px 109px rgba(0, 0, 0, 0.03), 25px 76px 80px rgba(0, 0, 0, 0.04), 6px 19px 44px rgba(0, 0, 0, 0.05), inset 0px 1px 2px rgba(255, 255, 255, 0.45)",
  shadowHover:
    "101px 306px 129px rgba(0, 0, 0, 0.01), 57px 172px 109px rgba(0, 0, 0, 0.03), 25px 76px 80px rgba(0, 0, 0, 0.04), 6px 19px 44px rgba(0, 0, 0, 0.05), inset 0px 2px 6px rgba(255, 255, 255, 0.65)",
};

export default SearchButton;
