import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary_dark: string;
      primary_base: string;
      primary_light: string;
      primary_lighter: string;
      primary_lightest: string;

      ink_darkest: string;
      sky_dark: string;
      sky_light: string;

      red_darkest: string;
      yellow_base: string;
      green_base: string;
    };
  }
}
