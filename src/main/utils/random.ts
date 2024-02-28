export function getRandom() {
  return String(Math.round(Math.random() * 100)) + String(Date.now());
}
