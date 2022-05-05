import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Button } from '../Button';
import { Container } from '../Container';
import { Logo } from '../Logo';

export interface NavProps {
  children?: ReactNode;
}

export const Nav: FC<NavProps> = () => {
  const theme = useTheme();

  return (
    <Container>
      <div
        css={{
          paddingTop: 38,
          paddingBottom: 38,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          label: 'Navgation',
        }}
      >
        <Logo
          css={{
            width: 45,
            height: 45,
            color: 'black',
            ':hover': {
              cursor: 'pointer',
              color: theme.colors.brand400,
            },
          }}
        />

        <div css={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          <span css={{ fontSize: 16, color: '#101111' }}>Product</span>
          <span css={{ fontSize: 16, color: '#101111' }}>Community</span>
          <span css={{ fontSize: 16, color: '#101111' }}>Security</span>
          <span css={{ fontSize: 16, color: '#101111' }}>Developer</span>
          <span css={{ fontSize: 16, color: '#101111' }}>Store</span>
          <span css={{ fontSize: 16, color: '#101111' }}>Download</span>
          <span css={{ fontSize: 16, color: '#101111' }}>Help Center</span>
          <div css={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <img
              alt="languageIcon.png"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR5SURBVHgB7Vnvcds6DAd17/uTvUDZCZI3QfQmaDtB0wniDeJOUHuCuBM0ncDqBHUmMDOB3QXEAiRoMRJJUYp77V3zu5MliyD+kABIQgAveMHfDQFnQlmWFd4uQYgrc8dXfBGOeClzaf2A9/p4PNZwBjzLAFS6hKK4QaUW0CqbC4XG1tA0H9EYBRNRwASQ4uV8/gkVOKDyS7DKk0Jrj+wB216bC2B3eqv1BuxsSHy+xj575HWHHCVMwGgDUNANCeVRtwpp/f/xcHiNo3lgMnKVikbWjC62g1UaJRaPhlbr/5DPZ+ZBhmyR9zX8StCol7OZNldZbv1Ro2evTfb6Yoxw+8G4nt9vPt+c+tLMnl1xwmy29RRYQMy4sryL8nE85vNlQMbC8LYyvvtGPt+A2WzHjPfI9zJCs2cDqigfbxYi7fLEB42Fsyjfus0+FmieYvtBfgOGPjEiw52SQWyCygbr0QRqPN29Nb9CfIUhaG1piuJtqJmD/h3LXITc1UfUADPaQtyy0HSutosXYBa6h2HcM8+rGAHK2pFM5n07KR5OmSERlIbOBrjJIJDD19IfmHdSMS/oo65URITQIvOe/36ENFxQ15ABHF23rfD7hqH1B74vYsaGXagoltxxk7HMWyWEeIBc2P1Q2zcCI9stdkURjIUiIsD55xqGIc1v0yjIx46VkoOUTbMBq9NNqLlnAKc3iZcywTQEISQ/KciHYuXkECHvWpVVrZ96QzNQsWLDKdHiXycL8qFYxqssapd6Ay7XN0AIS9Q0NeRBgq9UHpyxuenReULVbQjNwKuRCvmHllyMNaA2v0JcdBtCBki+K8iDUYLTYxY82lwDovS9E1nugvS7gGeJJzpPOpH9Sfgn8I6mq8TIn+W4hZux7sics59Zhen4Goiz0AxM8s8xGy6PNjduJN9VtyFkgFvmK8jDWIN92nEGaP3YbegboHVtW4r0RqvFFAMk31UmfcX33s4gNAOWSOs3kIfHjlI5KFnGjyxqIZwudbepZwDvPWhUZep8e4LWip8k5MPSFoUaIuQzONGrUDUvthtds4D3MAzF9wvIhzS/OTtYt412rt1tjnRbcafrjIqZdTm3h8pBuyVI7nZzDlZBA0z+d7MgRPJI6SkhR6TSqtM3jIyDVWolXoKNhSpVGeDFjhQh5QdnwYurXWqhNCVMO/oKEsfaIqnY08pAXDmtv1lu4VJJB64E8y1GwBWRJfNOVkSSeyHsuGJXoqX8SyIe7lnYcOp1KTFSgmHltyxzjTps4Lnw6qLx6lxbKqmifAYqeDTLXmkxHR+MvN2orZQRQxqd78GYaIP+Ni6tuGba3uhz2X4L9rtBTeV5ODdQyMorg991yutlahZi5Xd+v/X4ruBXguql3jQ7Qy65bem5Wtkxbu+X1o07+d8FImX7IUz6RmZGkHJ0u8gQlMks7bsdux65FbnMBT+vOdhlqwW+a5rlmGPpswxw8Ay5gnF7IYJbLFdTFHc492dWumikJRe8/H0/KUyJgPL/7lyfWV/wgr8dPwE7PQlDDSuHAQAAAABJRU5ErkJggg=="
              css={{ width: 24, height: 24 }}
            />
            <span css={{ fontSize: 16, color: '#101111' }}>English</span>
          </div>

          <Button
            variant="outline"
            rightIcon={
              <Logo
                css={{
                  width: 26,
                  height: 26,
                }}
              />
            }
          >
            Launch App
          </Button>
        </div>
      </div>
    </Container>
  );
};
