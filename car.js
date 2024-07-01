class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls();
    }

    update() {
        this.#move();
    }

    #move() {
        if (this.controls.forward) {
            this.speed += this.acceleration;
        }
        if (this.controls.reverse) {
            this.speed -= this.acceleration;
        }

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.speed < -this.maxSpeed / 2) {
            this.speed = -this.maxSpeed / 2;
        }

        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }
        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }

        if (this.speed != 0) {
            const flip = this.speed > 0 ? 1 : -1;
            if (this.controls.left) {
                this.angle += 0.03 * flip;
            }
            if (this.controls.right) {
                this.angle -= 0.03 * flip;
            }
        }

        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);

        // Car body
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.moveTo(-this.width / 2, -this.height / 4);
        ctx.lineTo(this.width / 2, -this.height / 4);
        ctx.lineTo(this.width / 2, this.height / 4);
        ctx.lineTo(-this.width / 2, this.height / 4);
        ctx.closePath();
        ctx.fill();

        // Car roof
        ctx.fillStyle = 'darkblue';
        ctx.beginPath();
        ctx.moveTo(-this.width / 4, -this.height / 4);
        ctx.lineTo(this.width / 4, -this.height / 4);
        ctx.lineTo(this.width / 4, this.height / 4);
        ctx.lineTo(-this.width / 4, this.height / 4);
        ctx.closePath();
        ctx.fill();

        // Car wheels
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(-this.width / 2.5, -this.height / 2.5, this.height / 6, 0, Math.PI * 2);
        ctx.arc(this.width / 2.5, -this.height / 2.5, this.height / 6, 0, Math.PI * 2);
        ctx.arc(-this.width / 2.5, this.height / 2.5, this.height / 6, 0, Math.PI * 2);
        ctx.arc(this.width / 2.5, this.height / 2.5, this.height / 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }
}
