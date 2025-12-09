import { useIncrementAnimation } from "@/hooks/useIncrementAnimation";
import { formatDecimal } from "@/utils/numberUtils";
import { Typography } from "@mui/material";

type Props = {
  value: number;
  specialSymbol?: string;
  roundNumber?: boolean;
  progressColor?: string;
};

function MetricCardValue({
  value,
  specialSymbol,
  roundNumber,
  progressColor,
}: Props) {
  const displayValue = useIncrementAnimation(value);
  const color =
    progressColor !== "rgba(255, 255, 255, 0.4)"
      ? progressColor
      : "text.secondary";

  return (
    <Typography
      variant="body2"
      sx={{
        fontSize: 34,
        fontWeight: 700,
        color,
      }}
    >
      {formatDecimal(displayValue, roundNumber)}
      {specialSymbol && (
        <Typography
          component="span"
          sx={{
            fontSize: 16,
            fontWeight: 700,
            verticalAlign: "super",
            color,
          }}
        >
          {specialSymbol}
        </Typography>
      )}
    </Typography>
  );
}

export default MetricCardValue;
