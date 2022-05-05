import { useEffect, useRef } from 'react';

import { AnimatedSprite } from 'pixi.js';

import { init } from './CanvasKeyframes';

export function CanvasPlayer() {
  // canvas ref
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // animatedSprite ref
  const animatedSpriteRef = useRef<AnimatedSprite>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      init(canvas, ({ animatedSprite }) => {
        animatedSprite.gotoAndStop(0);

        // @ts-ignore
        animatedSpriteRef.current = animatedSprite;
      });
    }

    return () => {};
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <canvas ref={canvasRef} />

      {/* <button
        type="button"
        onClick={() => {
          animatedSpriteRef.current?.gotoAndPlay(0);
        }}
      >
        play
      </button> */}
    </div>
  );
}
