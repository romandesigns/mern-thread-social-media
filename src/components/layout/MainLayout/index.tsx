import { Outlet } from "react-router-dom";
import { useTheme } from "../../theme-provider";
import { Button } from "../../ui/button";

export default function MainLayout() {
  const { toggleTheme, theme } = useTheme();
  return (
    <>
      <Button onClick={toggleTheme}>
        Toggle theme to {theme === "light" ? "dark" : "light"}
      </Button>
      <Outlet />
    </>
  );
}
