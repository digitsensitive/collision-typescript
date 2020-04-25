/**
 * Returns the distance between two points.
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 */
export function distanceBetween(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}
