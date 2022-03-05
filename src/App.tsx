import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import A from "./A";
import settings from "./settings";
import { TitleBar } from "./TitleBar";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <React.StrictMode>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TitleBar {...{ title: settings.info.name }}></TitleBar>
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
              <Box sx={{ marginBottom: 1 }}>Yo {count}</Box>
              <Button onClick={() => setCount(count + 1)} color="secondary">
                +1
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.StrictMode>
  );
}
