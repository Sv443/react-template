import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu, MenuOpen } from "@mui/icons-material";
import { getSidebar, setSidebar } from "../store/sidebar";
import { dispatch } from "../store";
import { useSelector } from "react-redux";

interface TitlebarProps {
  title: string;
}

export default function Titlebar({ title }: TitlebarProps) {
  const sidebar = useSelector(getSidebar);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" enableColorOnDark={true} color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            title="Open menu"
            onClick={() => dispatch(setSidebar(!sidebar))}
            sx={{ mr: 2 }}
          >
            {sidebar ? (
              <MenuOpen fontSize="medium" />
            ) : (
              <Menu fontSize="medium" />
            )}
          </IconButton>
          <Typography noWrap={true} variant="h5">
            {title}
          </Typography>
          <Box
            sx={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              textAlign: "right",
            }}
          >
            <div>Top text</div>
            <div>Bottom text</div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
