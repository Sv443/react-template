import { Close } from "@mui/icons-material";
import { Drawer, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { dispatch } from "../store";
import { getSidebar, setSidebar } from "../store/sidebar";

interface SidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const drawerOpen = useSelector(getSidebar);

  return (
    <Drawer
      {...{
        open: drawerOpen,
        onClose: () => dispatch(setSidebar(false)),
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { sm: 280, md: 350 },
        }}
      >
        <Grid
          container
          sx={{
            fontSize: 22,
            padding: 1,
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ padding: 1 }} variant="h5">
            Menu
          </Typography>
          <IconButton
            title="Close menu"
            size="large"
            edge="start"
            onClick={() => dispatch(setSidebar(false))}
          >
            <Close fontSize="medium" />
          </IconButton>
        </Grid>
        <Box sx={{ overflowY: "auto" }}>{children}</Box>
      </Box>
    </Drawer>
  );
}
