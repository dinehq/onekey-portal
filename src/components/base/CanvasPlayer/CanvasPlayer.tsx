import { FC, useEffect, useRef } from 'react';

import { AnimatedSprite } from 'pixi.js';

import { init } from './CanvasKeyframes';

interface CanvasPlayerProps {
  frame: number;
}

export const CanvasPlayer: FC<CanvasPlayerProps> = (props) => {
  const { frame } = props;

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

  useEffect(() => {
    const animatedSprite = animatedSpriteRef.current;

    if (animatedSprite) {
      animatedSprite.gotoAndStop(frame);
    }
  }, [frame]);

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
};
