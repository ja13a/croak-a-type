// eslint-disable-next-line @typescript-eslint/no-unused-vars
import jsx from 'texsaur';
import * as THREE from 'three';
import { Camera, Color, Mesh, Scene, WebGLRenderer } from 'three';

import '~/static/styles/index.scss';

type GameProps = {
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  GUINode: Node;
  backgroundColor: Color;
};

const gameData: GameProps = {
  width: 480,
  height: 720,
  canvas: document.querySelector('canvas'),
  GUINode: document.querySelector('div.gui-container'),
  backgroundColor: new THREE.Color('black')
};

// Многое позаимствовал отсюда: https://habr.com/ru/company/simbirsoft/blog/560980/
class Main {
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  renderer: WebGLRenderer;
  scene: Scene;
  camera: Camera;
  rect: Mesh;
  backgroundColor: THREE.Color;
  GUINode: Node;

  constructor(data: GameProps) {
    this.width = data.width;
    this.height = data.height;
    this.canvas = data.canvas;
    this.GUINode = data.GUINode;
    this.backgroundColor = data.backgroundColor;

    this.initRenderer();
    this.initMenu();
    this.initScene();
    this.initCamera();
    this.renderRect(100, 100, new THREE.Color('green'));
    this.render();
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setSize(this.width, this.height);
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = this.backgroundColor;
  }

  initCamera() {
    this.camera = new THREE.OrthographicCamera(
      this.width / -2,
      this.width / 2,
      this.height / 2,
      this.height / -2,
      100,
      -100
    );

    this.camera.position.set(this.width / 2, this.height / -2, 1);
  }

  initMenu() {
    const gameTitle = <div className="gui-container__game-title">croak-a-type</div>;

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'gui-container__menu-container');

    // TODO: создание меню...

    this.GUINode.appendChild(gameTitle);
    this.GUINode.appendChild(menuContainer);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  renderRect(width: number, height: number, color: Color) {
    const geometry = new THREE.PlaneGeometry(width, height);
    const material = new THREE.MeshBasicMaterial({ color });

    this.rect = new THREE.Mesh(geometry, material);
    this.rect.position.x = this.width / 2;
    this.rect.position.y = -this.height / 2;

    this.scene.add(this.rect);
  }
}

new Main(gameData);
