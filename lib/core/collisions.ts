import { Point } from './shapes/point';
import { Circle } from './shapes/circle';
import { Rectangle } from './shapes/rectangle';
import { distanceBetweenTwoPoints } from './helpers/distance-between';
import { Line } from './shapes/line';

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
  const distance = distanceBetweenTwoPoints(
    point1.x,
    point1.y,
    point2.x,
    point2.y
  );

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
  const distance = distanceBetweenTwoPoints(
    point.x,
    point.y,
    circle.x,
    circle.y
  );

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
  const distance = distanceBetweenTwoPoints(
    circle1.x,
    circle1.y,
    circle2.x,
    circle2.y
  );

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

/**
 * Rectangle-Rectangle Collision.
 * @param rectangle1
 * @param rectangle2
 */
export function rectangleRectangleCollision(
  rectangle1: Rectangle,
  rectangle2: Rectangle
): boolean {
  if (
    rectangle1.x + rectangle1.width > rectangle2.x &&
    rectangle1.x < rectangle2.x + rectangle2.width &&
    rectangle1.y + rectangle1.height > rectangle2.y &&
    rectangle1.y < rectangle2.y + rectangle2.height
  ) {
    return true;
  }
  return false;
}

/**
 * Circle-Rectangle Collision
 * TODO: Not perfectly working yet.
 * @param circle
 * @param rectangle
 */
export function circleRectangleCollision(
  circle: Circle,
  rectangle: Rectangle
): boolean {
  const distance = distanceBetweenTwoPoints(
    circle.x,
    circle.y,
    rectangle.x + rectangle.width / 2,
    rectangle.y + rectangle.height / 2
  );

  const approximateRadiusOfRectangle =
    (rectangle.height / 2 + rectangle.width / 2) / 2;

  if (distance <= circle.radius + approximateRadiusOfRectangle) {
    return true;
  }
  return false;
}

/**
 * Point-Line Collision more natural with a buffer zone.
 * @param point
 * @param line
 * @param buffer
 */
export function pointLineCollision(
  point: Point,
  line: Line,
  buffer?: number
): boolean {
  let buf: number = buffer || 0.1;

  const lineLength = distanceBetweenTwoPoints(
    line.x1,
    line.y1,
    line.x2,
    line.y2
  );

  const lineStartToPointLength = distanceBetweenTwoPoints(
    line.x1,
    line.y1,
    point.x,
    point.y
  );

  const lineEndToPointLength = distanceBetweenTwoPoints(
    line.x2,
    line.y2,
    point.x,
    point.y
  );

  if (
    lineStartToPointLength + lineEndToPointLength >= lineLength - buf &&
    lineStartToPointLength + lineEndToPointLength <= lineLength + buf
  ) {
    return true;
  }

  return false;
}
