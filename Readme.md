# WR Particle Attractor

The Particle Attractor is a Three.js application to run visuals inside a web browser. 
This WebGPU/TSL animation is based on the opensource example taken from the official [Three.js example](https://threejs.org/examples/#webgpu_tsl_compute_attractors_particles) [github](https://github.com/mrdoob/three.js/blob/master/examples/webgpu_tsl_compute_attractors_particles.html).

## Installation

For official support and questions, use the [Three.js installation manual](https://threejs.org/manual/#en/installation).
Otherwise, you can follow these simple steps:

### Install with NPM and a build tool
1. Install [Node.js](nodejs.org), since it is needed to run JavaScript and install Dependencies.
2. Download this project, and open a terminal in it's folder.
3. Install three.js and vite by executing the following commands:
```bash
# three.js
npm install --save three

# vite
npm install --save-dev vite
```
4. Run vite from terminal:
   `npx vite`
5. If everything went well, you'll see a URL like http://localhost:5173 appear in your terminal, and can open that URL to see your web application.

## Control

This version is intended for sensory control. This can mean optical (via webcam or video), acoustic (via microphone) or 
any other information you are able to plug into your computer.
This version, however, supports only webcam input and calculates the motion between two frames, which is in return translated into a variable of the particles.