import { DevelopmentWrap } from '../../../base';

export const Start = () => (
  <DevelopmentWrap>
    <div
      css={{
        paddingLeft: 64,
        paddingRight: 64,
        paddingTop: 164,
        paddingBottom: 164,
        backgroundColor: '#f0f1f2',
        display: 'flex',
        flexDirection: 'column',
        gap: 117,
        label: 'End',
      }}
    >
      <div css={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
        <span css={{ fontSize: 84, color: '#101111' }}>
          Start Using OneKey Wallet Today
        </span>
        <img
          alt="arrow.svg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABkCAYAAABuK6XnAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOfSURBVHgB7d3PURsxFMfxt87Fw0l2BXDLLSnB3JIbHSQdkA5iOqAEOggdxOkgqSA+5rg3fELRz7YIAf9Z72r13tO+78zCcIAZ9jMyWnkkKjeZeCq/OlzL9eX9j/B5Udf1T1JUNRCoXQHtJoDdkYKGDBVTAWZQsaq6o8dHgC1JYAb1fxhdlxKxRmQ97zyMrO/OuXMSlkG9LmI5EpRB7Q5Y30hQBrW/WRhUX0hINpk4XB0mFxdhclETczaiDudoNBIxqgzqWN5fk4AM6niYAM6IOYNq0mh0RcwZVJO8f0fMGVSz3hNzFRXedoVhHh5gu00KvJ9wTtOLH1HbmzunzZuHXWJdUhrES98Wi/2htUv2N0pJBqUkg1KSQSnJoJRkUEoyKCUZlJIMSkkGpSSDUpJBKcmglGRQSjIoJRmUkgxKSQalJINSkkEpyaCUZFBKMiglGZSSDEpJBqUkg1KSQSnJoJQkEso590niMTepwp4tN52etF9LHBSQ1id9CT2TqGvrjXVVtSDvbwPW16bfJwrqCWmT2AOk2vaERLTZE+z9vCmWGKgXSLFisF4hxRpiiYDagxRTj7UXKdYAix3qCFJMLdZRpNgRLFaohkgxdViNkWIHsNigTkSKqcE6GSm2B4sFqiVSTDxWa6TYDqzsUB2RYmKxOiPFXmBlhQq/w3UCpJg4rGRIsWdY2aDWR6lV1S2lTQxWcqQYsJz7nA2qrmssm9xQ+tixekPa9Ctc91lf+gLWvDSs3pG8n+GIoOyTiZKwciHhC5bpeQlYOZEQ2wOvZqzcSIh1CUkjFgcSYl+U1YTFhYREvM2hBIsNCb0hIa1Wq8V4PK7CzZhR2nCDr2hz1OiY2lZVH8LHt5S+o0hIDBTqFasL0r+fkbpGSEgUFOoRS1qNkZA4KDQArJOQkEgoVDDWyUhILBQqEKsVEhINhQrCao2ExEOhNdbZ2QUJ+B8ZLeuEhFRAodXDw71SrM5ISA0UUoiVBAmpgkKKsJIhIXVQSAFWUiSkEgoJxkqOhNRCIYFYvSAh1VBIEFZvSEg9FBKA1SsSKgIKMWL1joSKgUIMWMuA9DEY/aGeKwoKZcQC0mVAWlKGioNCGbCyIqEioVCPWNmRULFQqAcsFiRUNBRKiMWGhIqHQgmwWJHQIKBQByx2JDQYKNQCSwQSGhQUOgFLDBIaHBRqgCUKCQ0SCh3AEoeEBguFdmCJRLK2uen0zk0mvzUc3TP41pvUBPcXoIJVxUusNzsAAAAASUVORK5CYII="
          css={{ width: 40.000003814697266, height: 50 }}
        />
      </div>
      <div css={{ display: 'flex', gap: 23, flexGrow: 1 }}>
        <div
          css={{
            paddingTop: 1,
            paddingBottom: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            flexGrow: 1,
          }}
        >
          <div css={{ height: 1, width: '100%', backgroundColor: '#101111' }} />
          <div css={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <img
              alt="icon-download-extension.png"
              src="data:image/png;base64,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"
              css={{ width: 88, height: 88 }}
            />
            <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span css={{ fontSize: 24, color: '#101111' }}>
                Browser Extension
              </span>
              <span css={{ fontSize: 14, color: '#101111' }}>
                Chrome, Firefox, Edge
              </span>
            </div>
          </div>
        </div>
        <div
          css={{
            paddingTop: 1,
            paddingBottom: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            flexGrow: 1,
          }}
        >
          <div css={{ height: 1, width: '100%', backgroundColor: '#101111' }} />
          <div css={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <img
              alt="icon-download-mobile.png"
              src="data:image/png;base64,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"
              css={{ width: 88, height: 88 }}
            />
            <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span css={{ fontSize: 24, color: '#101111' }}>Mobile App</span>
              <span css={{ fontSize: 14, color: '#101111' }}>
                iOS and Android
              </span>
            </div>
          </div>
        </div>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            flexGrow: 1,
          }}
        >
          <div css={{ height: 1, width: '100%', backgroundColor: '#101111' }} />
          <div css={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <img
              alt="icon-download-desktop.png"
              src="data:image/png;base64,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"
              css={{ width: 88, height: 88 }}
            />
            <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span css={{ fontSize: 24, color: '#101111' }}>Desktop App</span>
              <span css={{ fontSize: 14, color: '#101111' }}>
                Mac, Windows, Linux
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DevelopmentWrap>
);