import '~/styles/index.scss';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 480;
canvas.height = 720;

context.fillRect(0, 0, canvas.width, canvas.height);
