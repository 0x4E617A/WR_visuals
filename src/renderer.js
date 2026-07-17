/* animation loop, camera movement */

export function createRendererLoop (app) {

    const {
        camera,
        scene,
        renderer,
        controls,
        updateCompute
    } = app;

    function onWindowResize() {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }

    function calcPosition( phi ) {

        if ( phi >= 445.3 ) {
            phi = 0;
        }

        let y =
            5 + Math.sin( phi ) * 2;

        let z =
            9 + Math.cos( phi ) * 10;

        return {
            x: 3,
            y,
            z,
            phi
        };

    }

    function moveCamera(
        coords,
        angle
    ) {

        camera.position.set(
            coords.x,
            coords.y,
            coords.z
        );

        camera.userData.phi = angle;

        camera.updateProjectionMatrix();

    }

    async function animate() {

        controls.update();

        renderer.compute(
            updateCompute
        );

        renderer.render(
            scene,
            camera
        );

    }

    renderer.setAnimationLoop(
        animate
    );

    window.addEventListener(
        'resize',
        onWindowResize
    );

    setInterval(() => {

        const phiOffset = 0.003;

        const stats = calcPosition(
            camera.userData.phi +
            phiOffset
        );

        moveCamera(
            stats,
            stats.phi
        );

    }, 50);

    return {
        animate,
        onWindowResize,
        calcPosition,
        moveCamera
    };

}