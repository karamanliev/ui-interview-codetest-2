import { useIncrementAnimation } from "@/hooks/useIncrementAnimation";
import { formatDecimal } from "@/utils/numberUtils";
import { Typography } from "@mui/material";

type Props = {
  delta: number;
  value: number;
  specialSymbol?: string;
  roundNumber?: boolean;
  positiveDeltaIsBad?: boolean;
  greaterDeltaIsBad?: boolean;
};

function MetricCardDelta({
  delta,
  value,
  specialSymbol,
  roundNumber,
  positiveDeltaIsBad,
  greaterDeltaIsBad,
}: Props) {
  const isIncrease = greaterDeltaIsBad ? delta > value : delta > 0;
  const isDecrease = greaterDeltaIsBad ? delta < value : delta < 0;

  let deltaColor = "text.secondary";
  let deltaSymbol = "";

  if (isIncrease) {
    deltaColor =
      positiveDeltaIsBad || greaterDeltaIsBad ? "error.main" : "success.main";
    deltaSymbol = "↑";
  } else if (isDecrease) {
    deltaColor =
      positiveDeltaIsBad || greaterDeltaIsBad ? "success.main" : "error.main";
    deltaSymbol = "↓";
  }

  const displayValue = useIncrementAnimation(delta);

  const deltaLabel =
    deltaSymbol +
    formatDecimal(displayValue, roundNumber).toString().replace("-", "");

  return (
    <Typography
      variant="body2"
      sx={{
        fontSize: 13,
        fontWeight: 700,
        transition: "all 0.3s ease-in-out",
        color: deltaColor,
      }}
    >
      {deltaLabel}
      {specialSymbol && (
        <Typography
          component="span"
          sx={{
            fontSize: 9,
            fontWeight: 700,
            verticalAlign: "3px",
            transition: "all 0.3s ease-in-out",
            color: deltaColor,
          }}
        >
          {specialSymbol}
        </Typography>
      )}
    </Typography>
  );
}

export default MetricCardDelta;
