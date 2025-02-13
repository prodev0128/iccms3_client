import { DarkSpacesTheme } from './schemes/DarkSpacesTheme';
import { GreenFieldsTheme } from './schemes/GreenFieldsTheme';
import { GreyGooseTheme } from './schemes/GreyGooseTheme';
import { NebulaFighterTheme } from './schemes/NebulaFighterTheme';
import { PureLightTheme } from './schemes/PureLightTheme';
import { PurpleFlowTheme } from './schemes/PurpleFlowTheme';

const themeMap = {
  DarkSpacesTheme,
  GreenFieldsTheme,
  GreyGooseTheme,
  NebulaFighterTheme,
  PureLightTheme,
  PurpleFlowTheme,
};

export const themeCreator = (theme) => themeMap[theme];
