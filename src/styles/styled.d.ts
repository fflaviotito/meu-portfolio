import "styled-components";
import { theme } from "./theme";

type ThemeType = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {
        // Hack para evitar erro de supertipo igual
        _?: never;
    }
}