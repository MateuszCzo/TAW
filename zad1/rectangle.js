"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point2D = void 0;
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.move = function (vector) {
        this.x += vector.getX();
        this.y += vector.getY();
    };
    Point2D.prototype.getX = function () {
        return this.x;
    };
    Point2D.prototype.getY = function () {
        return this.y;
    };
    return Point2D;
}());
exports.Point2D = Point2D;
var Rectangle = /** @class */ (function () {
    /**
     * @param pointA - upper left point
     * @param pointB - upper right point
     * @param pointC - down left point
     * @param pointD - down right point
     */
    function Rectangle(pointA, pointB, pointC, pointD) {
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
    Rectangle.prototype.move = function (vector) {
        this.pointA.move(vector);
        this.pointB.move(vector);
        this.pointC.move(vector);
        this.pointD.move(vector);
    };
    Rectangle.prototype.getArea = function () {
        return Math.abs(this.pointA.getX() - this.pointB.getX()) * // width
            Math.abs(this.pointA.getY() - this.pointC.getY()); // haight
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
