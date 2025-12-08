import { Stack } from "@mui/material";
import type { PropsWithChildren } from "react";
import Header from "@/components/Header";

type Props = {
  title: string;
  headerComponents?: React.ReactNode;
} & PropsWithChildren;

function PageLayout({ title, headerComponents, children }: Props) {
  return (
    <>
      <title>{title}</title>
      <Stack gap={8}>
        <Header title={title}>{headerComponents}</Header>
        {children}
      </Stack>
    </>
  );
}

export default PageLayout;
