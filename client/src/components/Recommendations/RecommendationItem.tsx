import { useTranslation } from "@/i18n";
import { Check } from "@mui/icons-material";
import { Box, Button, Fade, styled, Typography, Zoom } from "@mui/material";
import { useState } from "react";

type Props = {
  recommendation: number | string;
  translationKey: string;
  translationTemplate?: string;
  actionLabel?: string;
  onClick?: () => void;
};

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isClicked",
})<{ isClicked: boolean }>(({ isClicked, theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(3),
  background: "rgba(0, 0, 0, 0.1)",
  borderRadius: "6px",
  height: 38,
  flex: 1,
  cursor: isClicked ? "default" : "pointer",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: isClicked ? "transparent" : "rgba(245, 245, 245, 0.1)",
  },
  "& .MuiTouchRipple-child": {
    backgroundColor: theme.palette.success.main,
  },
}));

function RecommendationItem({
  recommendation,
  translationKey,
  translationTemplate = "count",
  actionLabel,
  onClick,
}: Props) {
  const { t } = useTranslation();
  const [isClicked, setIsClicked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const hasRecommendation = recommendation !== 0;

  const handleClick = () => {
    if (isClicked) return;
    onClick?.();
    setIsClicked(true);

    setTimeout(() => {
      setIsFinished(true);
    }, 600);
  };

  if (!hasRecommendation) {
    return null;
  }

  return (
    <StyledButton
      onClick={handleClick}
      disableRipple={isClicked}
      isClicked={isClicked}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "success.main",
          transform: isClicked ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isFinished ? (
          <>
            <Fade in={true} timeout={500}>
              <Typography sx={{ fontWeight: 600 }}>
                {t("common.done")}
              </Typography>
            </Fade>

            <Zoom
              in={true}
              style={{ transitionDelay: "200ms" }}
              timeout={{ enter: 500 }}
              easing={{ enter: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
            >
              <Check sx={{ fontSize: 16 }} />
            </Zoom>
          </>
        ) : (
          <>
            <Typography noWrap>
              {t(translationKey, { [translationTemplate]: recommendation })}
            </Typography>
            {actionLabel && (
              <Box
                sx={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  padding: 1,
                  minWidth: 0,
                }}
              >
                {actionLabel}
              </Box>
            )}
          </>
        )}
      </Box>
    </StyledButton>
  );
}

export default RecommendationItem;
