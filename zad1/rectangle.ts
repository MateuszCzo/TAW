class Point2D {
    constructor(
        private x: number, 
        private y: number
        ) {
    }

    move(vector: Point2D): void {
        this.x += vector.getX();
        this.y += vector.getY();
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }
}

class Rectangle {
    /**
     * @param pointA - upper left point
     * @param pointB - upper right point
     * @param pointC - down left point
     * @param pointD - down right point
     */
    constructor(
        private pointA: Point2D,
        private pointB: Point2D,
        private pointC: Point2D,
        private pointD: Point2D
        ) {
        if(
            pointA.getY() !== pointB.getY() || 
            pointA.getX() !== pointC.getX() || 
            pointB.getX() !== pointD.getX() || 
            pointC.getY() !== pointD.getY()
            ) {
            throw new Error("This is not a rectangle! Read comment.")
        }
    }

    move(vector: Point2D) {
        this.pointA.move(vector);
        this.pointB.move(vector);
        this.pointC.move(vector);
        this.pointD.move(vector);
    }

    getArea(): number {
        return Math.abs(this.pointA.getX() - this.pointB.getX()) *    // width
            Math.abs(this.pointA.getY() - this.pointC.getY());        // haight
    }
}

export { Point2D, Rectangle };