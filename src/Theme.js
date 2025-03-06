const MediaQueries = {
  t: {
    query: "only screen and (min-width:420px)",
  },
  ts: {
    query: "only screen and (min-width: 320px) and (max-width: 576px)",
  },
  s: {
    query: "only screen and (min-width:576px)",
  },

  m: {
    query: "only screen and (min-width:768px)",
  },
  mtl: {
    query: "only screen and (min-width:768px) and (max-width:992px) ",
  },
  l: {
    query: "only screen and (min-width:992px)",
  },
  xl: {
    query: "only screen and (min-width:1200px)",
  },
  xxl: {
    query: "only screen and (min-width:1400px)",
  },
};

const Fonts = {
  Quicksand: `'Quicksand', sans-serif`,
  Poppins: `'Poppins', sans-serif;`,
  Inter: `'Inter', sans-serif;`,
  Cabin : `'Cabin', sans-serif;`,
  Cinzel : `'Cinzel', sans-serif;`,
  Nats : `'Nats', sans-serif;`,
  Fruitos : `'Fruitos', sans-serif;`,
  Jost : `'Jost', sans-serif;`,
};

export const LightTheme = {
  Colors: {
    PrimaryColor: "#0a0a0a",
    SecondaryColor: "#2a2c39",
    BackgroundColor: "#FFFFFF",
    TextColor: "#333333",
    AccentColor: "#F0F8FF",
    SidenavColor: "#E6F7FF",
    FooterColor: "#043D5D",
    FooterTextColor: "#CAECFF",
    LightWhite: "#ffffff40",
    LightestWhite: "#ffffff1a",
    LightestBlack: "#0000001a",
    LightBlack: "#00000040",
    White: "#FFFFFF",
    Black: "#000000",
  },
  MediaQueries: MediaQueries,
  Fonts: Fonts,
};

export const DarkTheme = {
  Colors: {
    PrimaryColor: "#0a0a0a",
    SecondaryColor: "#2a2c39",
    BackgroundColor: "#1A1A1A",
    TextColor: "#E0E0E0",
    AccentColor: "#2C3E50",
    SidenavColor: "#2C3E50",
    FooterColor: "#06141C",
    FooterTextColor: "#CAECFF",
    LightWhite: "#ffffff40",
    LightestWhite: "#ffffff1a",
    LightestBlack: "#0000001a",
    LightBlack: "#00000040",
    White: "#FFFFFF",
    Black: "#000000",
    TechBg: "#171717",
  },
  MediaQueries: MediaQueries,
  Fonts: Fonts,
};
