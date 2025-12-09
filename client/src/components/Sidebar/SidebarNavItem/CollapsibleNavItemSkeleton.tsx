import { ListItemButton, ListItemText, Skeleton } from "@mui/material";

function CollapsibleNavItemSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <ListItemButton key={i} disabled>
          <Skeleton variant="circular" sx={{ width: 12, height: 12, mr: 2 }} />
          <ListItemText primary={<Skeleton variant="text" />} />
        </ListItemButton>
      ))}
    </>
  );
}

export default CollapsibleNavItemSkeleton;
