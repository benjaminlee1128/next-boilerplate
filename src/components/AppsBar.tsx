import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useThemeContext } from "@modules/ThemeContext";

const link = [{ title: "", link: "/ad" }, { title: "/asd" }];

export default function AppsBar() {
  const { toggleDarkMode } = useThemeContext();

  React.useEffect(() => {}, []);

  const handleChangeDarkMode = () => {
    localStorage.setItem("dark-mode");
  };

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography>ad</Typography>
          <Button onClick={toggleDarkMode}>
            <Typography color={"secondary"}>Dark Mode</Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}