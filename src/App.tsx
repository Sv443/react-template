import { Box, Button, MenuItem } from "@mui/material";
import React, { ReactNode, useState } from "react";
import A from "./A";
import settings from "./settings";
import { TitleBar } from "./TitleBar";
import Sidebar from "./Sidebar";
import { dispatch } from "./store";
import { setSidebar } from "./store/sidebar";
import { debounce } from "lodash-es";

export default function App() {
  const [count, setCount] = useState(0);

  const sidebarItems: ReactNode[] = [];

  for (let i = 0; i < 3; i++)
    sidebarItems.push(
      <A href={`#itm-${i}`} target="_self" noDecoration>
        <MenuItem
          sx={{ fontSize: 20 }}
          onClick={debounce(() => dispatch(setSidebar(false)), 70)}
        >
          Item {i}
        </MenuItem>
      </A>
    );

  return (
    <React.StrictMode>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TitleBar {...{ title: settings.info.name }}></TitleBar>
        <Sidebar>{sidebarItems}</Sidebar>
        <Box sx={{ margin: 2 }}>
          <Box>
            TS React template using Vite & Material UI, originally based on{" "}
            <A href="https://github.com/pubcore/vite-mui">pubcore/vite-mui</A>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: 3,
            }}
          >
            <Box sx={{ margin: 1, marginBottom: 1 }}>
              <Box sx={{ marginBottom: 1 }}>Count: {count}</Box>
              <Button onClick={() => setCount(count + 1)} color="secondary">
                Increase
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.StrictMode>
  );
}
