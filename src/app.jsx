import { ConfigProvider, theme } from "antd";
import AppRoutes from "./routes/AppRoutes"
import { useEffect, useState } from "react";

const { defaultAlgorithm, darkAlgorithm } = theme;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Detect system preference on first load
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial mode
    setDarkMode(mediaQuery.matches);

    // Listen for changes in system theme
    const handleChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  );
}

export default App