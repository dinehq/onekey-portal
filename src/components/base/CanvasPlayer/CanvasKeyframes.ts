import {
  AnimatedSprite,
  Application,
  Loader,
  Resource,
  Texture,
} from 'pixi.js';

export function init(
  element: HTMLCanvasElement,
  onLoad: (arg0: { app: Application; animatedSprite: AnimatedSprite }) => void,
) {
  const app = new Application({
    view: element,
    width: 1288 / 2,
    height: 1004 / 2,
    // resolution: 3,
    resolution: window.devicePixelRatio,
    autoDensity: true,
    antialias: true,
    transparent: false,
  });

  // settings.SCALE_MODE = SCALE_MODES.LINEAR

  // set black background
  app.renderer.backgroundColor = 0xffffff;

  const loader = new Loader();

  // from 0 to 60 images
  for (let i = 0; i < 60; i += 1) {
    loader.add(`/canvas/image${i}.jpg`);
  }

  loader.load(() => {
    // create textures from resources
    const textures: Texture<Resource>[] = [];

    for (let j = 0; j < 60; j += 1) {
      const t = Texture.from(`/canvas/image${j}.jpg`);

      textures.push(t);
    }

    // create a new SpriteBatch
    const animatedSprite = new AnimatedSprite(textures);

    // animatedSprite speed
    animatedSprite.animationSpeed = 0.5;

    animatedSprite.loop = false;

    animatedSprite.scale.set(0.5, 0.5);

    // add the sprite to the stage
    app.stage.addChild(animatedSprite);

    // start playing the animation
    // animatedSprite.gotoAndPlay(0)
    // animatedSprite.play()

    onLoad({
      app,
      animatedSprite,
    });
  });
}
