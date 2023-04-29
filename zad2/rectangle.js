"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point2D = void 0;
class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(vector) {
        this.x += vector.getX();
        this.y += vector.getY();
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}
exports.Point2D = Point2D;
class Rectangle {
    /**
     * @param pointA - upper left point
     * @param pointB - upper right point
     * @param pointC - down left point
     * @param pointD - down right point
     */
    constructor(pointA, pointB, pointC, pointD) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
        this.pointD = pointD;
        if (pointA.getY() !== pointB.getY() ||
            pointA.getX() !== pointC.getX() ||
            pointB.getX() !== pointD.getX() ||
            pointC.getY() !== pointD.getY()) {
            throw new Error("This is not a rectangle! Read comment.");
        }
    }
    move(vector) {
        this.pointA.move(vector);
        this.pointB.move(vector);
        this.pointC.move(vector);
        this.pointD.move(vector);
    }
    getArea() {
        return Math.abs(this.pointA.getX() - this.pointB.getX()) * // width
            Math.abs(this.pointA.getY() - this.pointC.getY()); // haight
    }
}
exports.Rectangle = Rectangle;
