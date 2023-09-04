class Road{
    constructor(x,width,lanecount=3){
        this.x=x;
        this.width=width;
        this.lanecount=lanecount;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=1000000;
        this.tops-=infinity;
        this.bottom=infinity;
    }
    draw(ctx){
        ctx.laneWidth=5;
        ctx.strokeStyle ="white";

        ctx.beginPath();
        ctx.moveTo(this.right,this.top);
        ctx.lineTo(this.right,this.bottom);
        ctx.stroke();

    }

}