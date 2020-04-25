import { Point } from './shapes/point';
import { Circle } from './shapes/circle';
import { Rectangle } from './shapes/rectangle';

/**
 * Pixel-perfect Point-Point Collision without buffer zone.
 * @param point1
 * @param point2
 */
export function pointPointCollision(point1: Point, point2: Point): boolean {
  if (point1.x === point2.x && point1.y === point2.y) {
    return true;
  }
  return false;
}

/**
 * Point-Point Collision more natural with a buffer zone.
 * @param point1
 * @param point2
 * @param buffer
 */
export function pointPointWithBufferCollision(
  point1: Point,
  point2: Point,
  buffer: number
): boolean {
  const distX = point1.x - point2.x;
  const distY = point1.y - point2.y;
  const distance = Math.sqrt(distX * distX + distY * distY);

  if (distance <= buffer * 2) {
    return true;
  }

  return false;
}

/**
 * Point-Circle Collision.
 * @param point
 * @param circle
 */
export function pointCircleCollision(point: Point, circle: Circle): boolean {
  const distX = point.x - circle.x;
  const distY = point.y - circle.y;
  const distance = Math.sqrt(distX * distX + distY * distY);

  if (distance <= circle.radius) {
    return true;
  }

  return false;
}

/**
 * Circle-Circle Collision.
 * @param circle1
 * @param circle2
 */
export function circleCircleCollision(
  circle1: Circle,
  circle2: Circle
): boolean {
  const distX = circle1.x - circle2.x;
  const distY = circle1.y - circle2.y;
  const distance = Math.sqrt(distX * distX + distY * distY);

  if (distance <= circle1.radius + circle2.radius) {
    return true;
  }

  return false;
}

/**
 * Point-Rectangle Collision.
 * @param point
 * @param rectangle
 */
export function pointRectangleCollision(
  point: Point,
  rectangle: Rectangle
): boolean {
  if (
    point.x >= rectangle.x &&
    point.x < rectangle.x + rectangle.width &&
    point.y >= rectangle.y &&
    point.y < rectangle.y + rectangle.height
  ) {
    return true;
  }

  return false;
}
