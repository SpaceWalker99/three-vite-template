import * as THREE from "three";

class Main {
  constructor() {
    this.canvas = document.querySelector("#canvas");
    // scene
    this.scene = new THREE.Scene();
    // camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 1);
    // renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });

    this.addMeshes();
    this.resize();
    this.render();
  }

  addMeshes() {
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(geometry, material);
    this.scene.add(plane);
  }

  resize() {
    const height = document.body.offsetHeight;
    const width = document.body.offsetWidth;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
  }

  render() {
    this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);

    window.requestAnimationFrame(() => this.render());
  }
}

new Main();