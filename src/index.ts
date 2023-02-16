import * as THREE from 'three';

import '~/static/styles/index.scss';

const canvas = document.querySelector('canvas');

canvas.width = 480;
canvas.height = 720;

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(canvas.width, canvas.height);
renderer.setClearColor('#000000');
renderer.clear();
