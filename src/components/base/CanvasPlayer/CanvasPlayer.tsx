import { FC, useEffect, useRef } from 'react';

import { AnimatedSprite, Application } from 'pixi.js';

import { init } from './CanvasKeyframes';

interface CanvasPlayerProps {
  frame: number;
  // all image url array
  images: string[];
  width: number;
  height: number;
}

export const CanvasPlayer: FC<CanvasPlayerProps> = (props) => {
  const { frame, images, width, height } = props;
  // is initialized
  const isInitialized = useRef(false);
  const application = useRef<Application | null>(null);

  // canvas ref
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // animatedSprite ref
  const animatedSpriteRef = useRef<AnimatedSprite | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas && images && !isInitialized.current && !application.current) {
      isInitialized.current = true;

      application.current = init(
        {
          element: canvas,
          images,
          width,
          height,
        },
        ({ animatedSprite }) => {
          animatedSprite.gotoAndStop(0);

          // @ts-ignore
          animatedSpriteRef.current = animatedSprite;
        },
      );
    }

    return () => {
      if (application.current) {
        // application.current.destroy();
        // application.current = null;
      }
    };
  }, [images, width, height]);

  useEffect(() => {
    // application resize
    if (application.current && animatedSpriteRef.current) {
      application.current.renderer.resize(width, height);
      animatedSpriteRef.current.width = width;
      animatedSpriteRef.current.height = height;
    }
  }, [width, height]);

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
