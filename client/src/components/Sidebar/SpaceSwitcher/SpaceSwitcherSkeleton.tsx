import { Select, MenuItem, Skeleton } from "@mui/material";
import StyledCard from "../../StyledCard";

type Props = {
  iconComponent?: React.ElementType;
};

function SpaceSwitcherSkeleton({ iconComponent }: Props) {
  return (
    <StyledCard variant="nav">
      <Select
        disabled
        value={"no-spaces"}
        fullWidth
        IconComponent={iconComponent}
        SelectDisplayProps={{
          style: {
            paddingTop: 0,
            paddingBottom: 0,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <MenuItem value="no-spaces">
          <Skeleton variant="text" sx={{ p: 0 }} />
        </MenuItem>
      </Select>
    </StyledCard>
  );
}

export default SpaceSwitcherSkeleton;
