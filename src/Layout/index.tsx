import { Box } from "@mui/material";
import type { ReactNode } from "react";

export interface PageProps {
  appBar: ReactNode;
  sidebar: ReactNode;
}

export default function Page({ appBar, sidebar }: PageProps) {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        zIndex: 1,
        minHeight: "100vh",
        backgroundColor: "background.default",
        position: "relative",
        minWidth: "fit-contnet",
        width: 1,
        color: "text.primary",
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          marginTop: 6,
        }}
      >
        <>{appBar}</>
        <Box
          component="main"
          sx={{
            display: "flex",
            flexGrow: 1,
            position: "relative",
          }}
        >
          <>{sidebar}</>
        </Box>
      </Box>
    </Box>
  );
}
