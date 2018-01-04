export default {

  create() {
    var world = this.world;

    var carrot = this.carrot = this.add.image(world.width * 0.75, world.centerY, 'carrot');
    carrot.anchor.set(0.5);

    var duck = this.duck = this.add.sprite(world.centerX, world.centerY, 'duck');
    duck.anchor.set(0.5);
    duck.scale.set(2);
    duck.animations.add('walk', null, 5, true);
    duck.animations.play('walk');
  },

  update() {

  },

  restart() {
    this.state.restart();
  },

  quit() {
    this.state.start('menu');
  }

}
