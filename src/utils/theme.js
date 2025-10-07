import { theme } from "antd";

const { defaultAlgorithm, darkAlgorithm } = theme;

export const lightTheme = {
    algorithm: defaultAlgorithm,
    token: {
        colorPrimary: "#1677FF",
        colorTextBase: "#000000",
        colorTextSecondary: "#595959",
        colorBgLayout: "#f0f2f5",
        colorBgContainer: "#ffffff",
        colorBorder: "#f0f0f0",
    },
    components: {
        Layout: {
            headerBg: "#ffffff",
        },
        Menu: {
            itemBg: "#ffffff",
            itemBgSelected: "#e6f7ff",
            itemTextColor: "#000000",
            itemTextColorSelected: "#1677FF",
        },
        Button: {
            colorPrimary: "#1677FF",
        },
    },
};

export const darkTheme = {
    algorithm: darkAlgorithm,
    token: {
        colorPrimary: "#1677FF",
        colorTextBase: "#ffffff",
        colorTextSecondary: "#cccccc",
        colorBgLayout: "#141414",
        colorBgContainer: "#1f1f1f",
        colorBorder: "#303030",
    },
    components: {
        Layout: {
            headerBg: "#1f1f1f",
        },
        Menu: {
            itemBg: "#1f1f1f",
            itemBgSelected: "#1677FF33",
            itemTextColor: "#ffffff",
            itemTextColorSelected: "#1677FF",
        },
        Button: {
            colorPrimary: "#1677FF",
        },
    },
};
