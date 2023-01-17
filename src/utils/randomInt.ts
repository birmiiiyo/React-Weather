export const randomInteger = () => {
  const rand = 0 - 0.5 + Math.random() * 11
  return Math.round(rand);
}
