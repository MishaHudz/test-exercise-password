export function checkingCyrillicIncluded(password: string) {
  if (/^[a-zA-Z0-9!@#$%^&*()_+{}|:;<>,.?~\-=/\[\]]*$/.test(password))
    return false;
  return true;
}

export function passwordIsEasy(password: string) {
  if (
    /^\d+$/.test(password) ||
    /^[a-zA-Z]+$/.test(password) ||
    /^[^a-zA-Z0-9]+$/.test(password)
  ) {
    return true;
  }
  return false;
}

export function passwordIsMedium(password: string) {
  if (
    /^[^\d]+$/.test(password) ||
    /^[a-zA-Z\d\s]+$/.test(password) ||
    /^[^a-zA-Z]+$/.test(password)
  ) {
    return true;
  }
  return false;
}
