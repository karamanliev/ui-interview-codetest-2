import { Box, Typography } from "@mui/material";
import StyledCard from "../StyledCard";
import MetricCardDelta from "./MetricCardDelta";
import MetricCardValue from "./MetricCardValue";
import MetricProgress from "./MetricProgress";

type BaseProps = {
  title: string;
  subtitle: string;
  value?: number;
  delta?: number;
  total?: number;
  progressColor?: string;
  specialSymbol?: string;
  roundNumber?: boolean;
};

type Props =
  | (BaseProps & { positiveDeltaIsBad: true; greaterDeltaIsBad?: never })
  | (BaseProps & { positiveDeltaIsBad?: never; greaterDeltaIsBad: true })
  | (BaseProps & { positiveDeltaIsBad?: never; greaterDeltaIsBad?: never });

function MetricCard({
  title,
  subtitle,
  value = 0,
  delta = 0,
  total = value,
  progressColor = "rgba(255, 255, 255, 0.4)",
  specialSymbol,
  roundNumber = false,
  positiveDeltaIsBad,
  greaterDeltaIsBad,
}: Props) {
  return (
    <StyledCard
      sx={{
        p: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "background.paper",
        },
      }}
    >
      <MetricProgress value={value} total={total} progressColor={progressColor}>
        <MetricCardValue
          value={value}
          specialSymbol={specialSymbol}
          roundNumber={roundNumber}
          progressColor={progressColor}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
          }}
        >
          <MetricCardDelta
            delta={delta}
            value={value}
            specialSymbol={specialSymbol}
            positiveDeltaIsBad={positiveDeltaIsBad}
            roundNumber={roundNumber}
            greaterDeltaIsBad={greaterDeltaIsBad}
          />
        </Box>
      </MetricProgress>

      <Box>
        <Typography
          variant="body2"
          sx={{ fontSize: 13, textAlign: "center", letterSpacing: "0.12em" }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: 11, textAlign: "center" }}>
          {subtitle}
        </Typography>
      </Box>
    </StyledCard>
  );
}

export default MetricCard;
