import { Point } from '../shapes/point';

export interface ILineLineCollisionObject {
  isColliding: boolean;
  pointOfIntersection?: Point;
}
