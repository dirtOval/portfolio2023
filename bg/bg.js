import * as THREE from 'three';

const animationManager = {
  counter: 0,
  init: () => {
  const renderer = new THREE.WebGLRenderer( {antialias: false} );
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio( window.devicePixelRatio * 0.5 );
  document.body.appendChild(renderer.domElement);

  //SCENE 0
  const scene0 = new THREE.Scene();
  const camera0 = new THREE.PerspectiveCamera( 75, window.innerWidth /
                                               window.innerHeight, 0.1, 1000);
  camera0.position.set(0, 0, 1000);

  const redMaterial0 = new THREE.MeshBasicMaterial( { color: 0xFF0000, wireframe: true } );
  const blueMaterial0 = new THREE.MeshBasicMaterial( { color: 0x0800FF, wireframe: true } );
  const greenMaterial0 = new THREE.MeshBasicMaterial( { color: 0x00FF23, wireframe: true } );

  const cubeGeo0 = new THREE.BoxGeometry(100, 100, 100);

  let redCubeArray = [];
  let blueCubeArray = [];
  let greenCubeArray = [];

  for (let i = 0; i < 10; i++) {
    const redMesh = new THREE.Mesh(cubeGeo0, redMaterial0);
    redCubeArray.push(redMesh);
    scene0.add(redMesh);

    const blueMesh = new THREE.Mesh(cubeGeo0, blueMaterial0);
    blueCubeArray.push(blueMesh);
    scene0.add(blueMesh);

    const greenMesh = new THREE.Mesh(cubeGeo0, greenMaterial0);
    greenCubeArray.push(greenMesh);
    scene0.add(greenMesh);
  }




  //SCENE 1
  const scene1 = new THREE.Scene();
  const camera1 = new THREE.PerspectiveCamera( 75, window.innerWidth /
                                              window.innerHeight, 0.1, 1000 );

  const plane1 = new THREE.PlaneGeometry( 26, 26);
  const bgMaterial1 = new THREE.MeshBasicMaterial( { color: 0xA600FF})

  const bg1 = new THREE.Mesh(plane1, bgMaterial1);
  scene1.add(bg1);

  const geometry1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 });
  material1.transparent = true;

  let cubeArray1 = [];
  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 18; j++) {
      const cube = new THREE.Mesh(geometry1, material1);
      bg1.add(cube);
      cube.position.x = i - 9;
      cube.position.y = j - 9;
      cubeArray1.push(cube);
    }
  }

  camera1.position.z = 5;
  // camera2.position.x = 0

  let cubeOpacity = 1;
  let opacitySwitch = false;


  function animate() {
    requestAnimationFrame(animate);

    if (animationManager.counter === 0) {

      const randNum = () => {
        return Math.random() * 2000 - 1000;
      }

      for (let cube of redCubeArray) {
        cube.position.set(randNum(), randNum(), randNum());
      }
      for (let cube of blueCubeArray) {
        cube.position.set(randNum(), randNum(), randNum());
      }
      for (let cube of greenCubeArray) {
        cube.position.set(randNum(), randNum(), randNum());
      }

      renderer.render(scene0, camera0);

    } else if (animationManager.counter === 1) {
      bg1.rotation.z += 0.01;

      let rotationSwitch = false;

      if (opacitySwitch) {
        cubeOpacity += 0.01
      } else {
        cubeOpacity -= 0.01;
      }
      if (cubeOpacity <= 0.75 || cubeOpacity >= 1) {
        opacitySwitch = !opacitySwitch
      }

      material1.opacity = cubeOpacity;

      for (let cube of cubeArray1) {
        if (rotationSwitch) {
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
        } else {
          cube.rotation.x -= 0.01;
          cube.rotation.y -= 0.01;
        }
        cube.rotation.z += 0.07
        rotationSwitch = !rotationSwitch;
      }

      renderer.render(scene1, camera1);
    }
  }
  animate();
  },
  updateCounter: () => {
    animationManager.counter++;
    if (animationManager.counter > 4) {
      animationManager.counter = 0;
    }
  },
}

export default animationManager;