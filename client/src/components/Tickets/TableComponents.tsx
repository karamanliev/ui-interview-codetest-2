import { useIncrementAnimation } from "@/hooks/useIncrementAnimation";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import {
  HealthBadge,
  TextCellContainer,
  TextCellLabel,
  StyledLinearProgress,
} from "./tableStyles";
import ticketIcon from "@/assets/ticket-icon.svg";

export const HealthCell = ({ value }: { value: number }) => {
  const displayValue = useIncrementAnimation(value);

  return <HealthBadge>+{displayValue.toFixed(2)}</HealthBadge>;
};

export const TextCell = ({
  title,
  showIcon,
}: {
  title: string;
  showIcon?: boolean;
}) => {
  return (
    <TextCellContainer>
      {showIcon && (
        <img
          src={ticketIcon}
          style={{ width: 16, height: 16, flexShrink: 0 }}
        />
      )}
      <TextCellLabel noWrap>{title}</TextCellLabel>
    </TextCellContainer>
  );
};

export const AnimatedProgressBar = ({ value }: { value: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 200);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        pr: 2,
      }}
    >
      <StyledLinearProgress variant="determinate" value={progress} />
    </Box>
  );
};
