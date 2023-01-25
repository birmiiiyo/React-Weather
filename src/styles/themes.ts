const theme = {
  colors: {
    white: '#ffffff',
    grey: '#787c87',
    dark: '#000000',
  },
  FONT_SIZE: {
    XS: 12,
    S: 16,
    M: 20,
    L: 24,
    XL: 32,
  },
  FONT_WEIGHT: {
    XS: 300,
    S: 400,
    M: 500,
    L: 600,
    XL: 800,
  },
  BORDER_RADIUS: {
    XS: 4,
    S: 6,
    M: 8,
    L: 12,
    CIRCLE: 50,
  },
  RANGE: {
    NONE: 0,
    XS: 4,
    S: 8,
    M: 16,
    L: 24,
    XL: 48,
  },
}

const CENTER = `
  display: flex;
  justify-content: center;
  align-items:center;
  `
const SPACE_BETWEEN = `
  display: flex;
  justify-content: space-between;
  align-items:center;
  `
const COLUMN = `
  display: flex;
  flex-direction:column;
`

export { CENTER, COLUMN, SPACE_BETWEEN, theme }
