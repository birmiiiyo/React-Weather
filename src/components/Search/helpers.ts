export const noDigits = (event) => {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
  }