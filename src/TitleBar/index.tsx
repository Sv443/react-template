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

interface TitleBarProps {
  title: string;
}

export function TitleBar({ title }: TitleBarProps) {
  const sidebar = useSelector(getSidebar);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" enableColorOnDark={true} color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={() => dispatch(setSidebar(!sidebar))}
            sx={{ mr: 2 }}
          >
            {sidebar ? <MenuOpen /> : <Menu />}
          </IconButton>
          <Typography noWrap={true} variant="h5">
            {title}
          </Typography>
          <Button color="secondary">Yo</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
