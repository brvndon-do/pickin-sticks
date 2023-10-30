import { Game } from 'phaser';
import { Example } from './scenes/Example';

const game = new Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: Example,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
});

if (!game.isPaused) {
  console.log('Game is running!');
}
