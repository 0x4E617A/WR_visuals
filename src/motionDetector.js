export class MotionDetector {

    constructor(video) {
        this.video = video;
        this.previousFrame = null;

        this.leftMotion = 0;
        this.rightMotion = 0;
    }

    update(ctx, width, height) {

        ctx.drawImage(this.video, 0, 0, width, height);
        const frame = ctx.getImageData(0, 0, width, height);

        if (this.previousFrame) {

            let leftSum = 0;
            let rightSum = 0;

            const half = Math.floor(width / 2);

            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {

                    const i = (y * width + x) * 4;

                    const diff = Math.abs(
                        frame.data[i] -
                        this.previousFrame.data[i]
                    );

                    if (x < half) {
                        leftSum += diff;
                    } else {
                        rightSum += diff;
                    }
                }
            }

            this.leftMotion = leftSum / (half * height);
            this.rightMotion = rightSum / (half * height);
        }

        this.previousFrame = frame;
    }

    getLeftMotion() { return this.leftMotion; }
    getRightMotion() { return this.rightMotion; }
}
