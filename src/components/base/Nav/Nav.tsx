import { FC, ReactNode } from 'react';

import { Logo } from '../Logo';

export interface NavProps {
  children?: ReactNode;
}

export const Nav: FC<NavProps> = () => (
  <div
    css={{
      paddingLeft: 64,
      paddingRight: 64,
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
      <img
        alt="Button.png"
        src="data:image/png;base64,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"
        css={{ width: 151, height: 44 }}
      />
    </div>
  </div>
);
