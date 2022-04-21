import { FC, useRef } from 'react';

interface Props {
  children?: React.ReactNode;
  path?: string;
}

export const DevelopmentWrap: FC<Props> = (props: Props) => {
  const { children, path } = props;
  const ref = useRef<HTMLDivElement>(null);
  let filename = '';

  const position = ref.current?.getBoundingClientRect();

  if (!path) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }

  filename = path.split('/').pop() || '';

  return (
    <div
      css={{
        position: 'relative',
      }}
      ref={ref}
    >
      {children}
      <div
        css={{
          position: 'absolute',
          zIndex: 999999,
          top: position?.top || 0,
          left: position?.left || 0,
        }}
      >
        {path && (
          <a
            css={{
              color: 'red',
              fontWeight: 'bold',
            }}
            href={`vscode://file/${path}`}
          >
            {filename}
          </a>
        )}
      </div>
    </div>
  );
};
