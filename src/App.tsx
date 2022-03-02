import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import A from "./A";

export default function App()
{
    const [count, setCount] = useState(0);

    return (
        <React.StrictMode>
            <Box sx={{ margin: 2 }}>
                <Box sx={{ marginBottom: 1 }}>
                    <h2>Yo {count}</h2>
                    <Button onClick={() => setCount(count + 1)}>+1</Button>
                </Box>

                <A href="https://github.com/Sv443">Sv443</A>
            </Box>
        </React.StrictMode>
    );
}
