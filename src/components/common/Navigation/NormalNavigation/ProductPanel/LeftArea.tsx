import { FC, ReactNode, useCallback, useState } from 'react';

import { useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import ReactDOM from 'react-dom';

import { useOneKeyMiniData } from '../../../../../data';
import { isBrowser } from '../../../../../utils';
import { Box, Li, Ul } from '../../../../base/Box';
import { Link } from '../../../../base/Link';

export interface LeftAreaProps {
  children?: ReactNode;
}

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const LeftArea: FC<LeftAreaProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const [backgroundColor] = useState(theme.background.test100);
  const [currentSelected, setCurrentSelected] = useState('OneKey Mini');

  const oneKeyData = useOneKeyMiniData();
  const items = [
    {
      name: 'OneKey Mini',
      link: oneKeyData.shopLink,
    },
    {
      name: 'OneKey Lite',
      link: '',
    },
  ];

  const handleMouseMove = useCallback(
    (type: string) => {
      setCurrentSelected(type);
    },
    [setCurrentSelected],
  );

  return (
    <Box
      xs={{
        display: 'flex',
        width: '100%',
        height: '100%',
        transition: theme.transitions.allEase,
        background: backgroundColor,
      }}
    >
      <Box xs={{ width: '50%', display: 'flex', alignItems: 'center' }}>
        <Ul xs={{ margin: 0, padding: 0 }}>
          {items.map((item) => (
            <Link key={item.name} to={item.link}>
              <Li
                onMouseMove={() => handleMouseMove(item.name)}
                xs={{
                  ...theme.text.medium400,
                  listStyle: 'none',
                  lineHeight: '44px',
                  height: 44,
                  cursor: 'pointer',
                  color: theme.colors.test400,
                  ':hover': {
                    color: theme.background.test300,
                  },
                }}
              >
                <motion.div variants={itemVariants}>{item.name}</motion.div>
              </Li>
            </Link>
          ))}
        </Ul>
      </Box>

      <Box
        xs={{
          width: '50%',
          height: '100%',
          position: 'relative',
        }}
        xxl={{
          height: '340px',
        }}
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={currentSelected}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            {currentSelected === 'OneKey Mini' && (
              <StaticImage
                loading="eager"
                draggable={false}
                css={{
                  width: '100%',
                  height: '100%',
                }}
                src="./images/OneKeyMini.png"
                alt="OneKeyMini"
              />
            )}
            {currentSelected === 'OneKey Lite' && (
              <StaticImage
                loading="eager"
                draggable={false}
                css={{
                  width: '90%',
                  height: 'auto',
                  marginTop: '-30%',
                }}
                src="./images/OneKeyLite.png"
                alt="OneKeyLite"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </Box>
      {children}

      {isBrowser() &&
        ReactDOM.createPortal(
          <Box
            css={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 1,
              height: 1,
              opacity: 0.1,
              overflow: 'hidden',
            }}
          >
            <StaticImage src="./images/OneKeyLite.png" alt="OneKeyLite" />
            <StaticImage src="./images/OneKeyMini.png" alt="OneKeyMini" />
          </Box>,
          document.body,
        )}
    </Box>
  );
};