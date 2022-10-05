import { Box } from "@mui/material";
import { NavBar } from "../componentes";

export const MainPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
};
