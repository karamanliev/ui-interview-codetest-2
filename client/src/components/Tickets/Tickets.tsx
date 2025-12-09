import { GET_TICKETS } from "@/graphql/queries/GetTickets";
import { useTranslation } from "@/i18n";
import { useQuery } from "@apollo/client/react";
import { Button, Stack, styled, Typography } from "@mui/material";
import { useState } from "react";
import StyledCard from "../StyledCard";
import RemediationTable from "./RemediationTable";

type Props = {
  currentSpaceId?: string;
};

function Tickets({ currentSpaceId }: Props) {
  const { t } = useTranslation();
  const [showAllTickets, setShowAllTickets] = useState(false);

  const { data: ticketsData, loading: isTicketsLoading } = useQuery(
    GET_TICKETS,
    {
      variables: {
        spaceId: currentSpaceId!,
      },
      skip: !currentSpaceId,
    },
  );

  const StyledButton = styled(Button)(({ theme }) => ({
    height: 26,
    px: 4,
    py: "6px",
    borderRadius: "2px",
    borderColor: theme.palette.text.secondary,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.text.secondary,
      ".MuiTypography-root": {
        color: theme.palette.primary.dark,
        transition: "all 0.3s ease-in-out",
      },
    },
  }));

  return (
    <StyledCard sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "top",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Stack gap={1}>
          <Typography variant="body2" sx={{ fontSize: 16, lineHeight: 1.2 }}>
            {t("home.tickets.title")}
          </Typography>
          <Typography>{t("home.tickets.subtitle")}</Typography>
        </Stack>
        <StyledButton
          variant="outlined"
          onClick={() => setShowAllTickets((prev) => !prev)}
        >
          <Typography>
            {t(showAllTickets ? "common.showLess" : "common.viewAll", {
              count: ticketsData?.tickets?.length ?? 0,
            })}
          </Typography>
        </StyledButton>
      </Stack>

      <RemediationTable
        tableData={ticketsData?.tickets ?? []}
        loading={isTicketsLoading}
        showPagination={!showAllTickets}
      />
    </StyledCard>
  );
}

export default Tickets;
