import { ConfigProvider, theme } from "antd";
import AppRoutes from "./routes/AppRoutes"
import { useEffect, useState } from "react";

const { defaultAlgorithm, darkAlgorithm } = theme;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Detect system preference on first load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
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