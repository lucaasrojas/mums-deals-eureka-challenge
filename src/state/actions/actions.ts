export const TOGGLE_THEME = "TOGGLE_THEME";

export type ActionType = { type: typeof TOGGLE_THEME };

export const toggleTheme = (light: boolean): boolean => !light;
