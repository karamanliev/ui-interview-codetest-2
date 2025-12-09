import { Fade, Box, CircularProgress } from "@mui/material";
import type { PropsWithChildren } from "react";

type Props = {
  value: number;
  total: number;
  progressColor: string;
} & PropsWithChildren;

function MetricProgress({ value, total, progressColor, children }: Props) {
  const arcSizePx = 155;
  const arcStrokePx = 1.5;

  const arcFilledPercentage = (value / total) * 100;
  const arcVisiblePercentage = 75;
  const arcVisibleDegrees = (75 * 360) / 100;
  const arcRotationDegrees = 135;

  // dot calc
  const progressDegrees = (arcFilledPercentage / 100) * arcVisibleDegrees;
  const dotRotation = arcRotationDegrees + progressDegrees;
  const radius = arcSizePx / 2 - arcStrokePx * 2;

  return (
    <Fade in timeout={800}>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          ...(!value && {
            animation: "pulse 1.5s ease-in-out infinite",
            "@keyframes pulse": {
              "0%, 100%": { opacity: 0.35 },
              "50%": { opacity: 1 },
            },
          }),
        }}
      >
        <CircularProgress
          variant="determinate"
          value={arcVisiblePercentage}
          size={arcSizePx}
          thickness={arcStrokePx}
          sx={{
            color: "rgba(217, 217, 217, 0.13)",
            transform: `rotate(${arcRotationDegrees}deg) !important`,
            "& .MuiCircularProgress-circle": {
              strokeLinecap: "round",
            },
          }}
        />
        <CircularProgress
          variant="determinate"
          value={(arcFilledPercentage / 100) * arcVisiblePercentage}
          size={arcSizePx}
          thickness={arcStrokePx}
          sx={{
            color: progressColor,
            position: "absolute",
            left: 0,
            transform: `rotate(${arcRotationDegrees}deg) !important`,
            "& .MuiCircularProgress-circle": {
              strokeLinecap: "round",
              transition: "stroke-dashoffset 0.8s ease-in-out",
            },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: arcSizePx,
            height: arcSizePx,
            transition: "transform 0.8s ease-in-out",
            transform: `rotate(${dotRotation}deg)`,
            top: 0,
            left: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: 11,
              height: 11,
              borderRadius: "50%",
              backgroundColor: "text.secondary",
              left: `${arcSizePx / 2 + radius}px`,
              top: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow:
                "-7px 9px 3px rgba(0, 0, 0, 0.01), -5px 6px 3px rgba(0, 0, 0, 0.04), -3px 3px 3px rgba(0, 0, 0, 0.15), -1px 1px 2px rgba(0, 0, 0, 0.26), 0px 0px 1px rgba(0, 0, 0, 0.29)",
            }}
          />
        </Box>

        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {children}
        </Box>
      </Box>
    </Fade>
  );
}

export default MetricProgress;
