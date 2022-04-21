import { FC, useState } from 'react';

import { revueFromSubscriptionSubmit } from '@dinehq/revue-form-subscriber';

export const Footer: FC = () => {
  const [email, setEmail] = useState('');

  function subscribe() {
    revueFromSubscriptionSubmit({
      customUrl: 'http://news.onekey.so/add_subscriber',
      memberEmail: email,
    });
  }

  return (
    <div>
      <div
        css={{
          paddingLeft: 133,
          paddingRight: 133,
          paddingTop: 88,
          paddingBottom: 138,
          borderTopLeftRadius: 64,
          borderTopRightRadius: 64,
          backgroundColor: '#101111',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          label: 'Footer',
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <img
            alt="brand.svg"
            src="data:image/png;base64,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"
            css={{ width: 232, height: 55.887245178222656 }}
          />
          <div css={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div css={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              <img
                alt="twitter.svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgB7ZqBcdswDEXhXgdwN5AnaLqBM0HTCaps4A3iTFBnAqsTuBtIncDOBPIGzga/wJG+6HSxBEqiRPX47nB0LBkkQBCExBBFIpFIJBKJRCJBAmDNsmM5slzwjvx9YEnpf8QankNH2eYIvp6w/BK95MrYXub+ntCNXAyt6FnWHHkkV6wC4YlGgPvZox8lS2r1XGrXEnKFf5RVFPwkj6D7zGvYUhdgkk2VNXkAZo2OYryTDR8ok7B6oIGBPuE5Gw+TC2RZ7Oz4U+2gmmZlQwOB9zwzNGJsWftu6zKwtrCUbWVJPYGZmTHYuQ5sqVBastxRD+Av/Ku4GV8ZXKnsYI8u24zp4wK/bKkrcA/PPRwdAb+kTX1/UozvD7mRspQwYZ0qnfFG/jg3XVyQAjGGmzV1p2B5te15sVicavpLbhLywz33V9y6qHVAwo3U0b0zfoUzmZkXuRtYd5X+DhDsWtrT/FixA863LjbmANgKSj6zkoybZ5oZTcYLbUlQwnIPsxUeyIRrRvPh1HZD4xKAqfIuNF8KjoD7phsaI4B/LDNe0Hz523aDpg5oVRIwRdsNrbuAXQayT/vapnzyxUbxTVojwCqYXfYns/5bK0zNEhAnyJNUQfPit+Yml0JIloBUgwnNg1VbDSCoIkCw4fSNlJ6dmExjvKB2gCBOYEn54yO1PGVNzDiTBLfTm7HIXWz4TI5wB1IZXrPrksLbHp12LKclYHkhkwhFQjM+a3r0/Qj1LnAFYRdGK23yu+IcAXY3+EHh8exqfC84EjYIB6fEN6QTHqB/be6LEh1fxw/lBDk9yjAdvQ5lnJPgLewsrFm+k9kheg1MyaN9VRcWNipK+CWlEIHJC76PulIKDYxTFotj1xQKMKG+wTjPAyd4yPaLJuNqX0nll1j5SibhJTQOL5zsBvuHDBV2do+YlhxThzzMCW+JccknN7wOTJI7wC95cIbXgVkaKYZLfDlMIp3k6bJ3JWhnTKq+hExylLb+ouStInJe92rbk+bVdSQSiUQikYgP/gF6HmxxawvypQAAAABJRU5ErkJggg=="
                css={{ width: 32, height: 32 }}
              />
              <img
                alt="github.svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO1SURBVHgB7ZqLcZtAEIZXaSDuILgCKxUEd+AOrA6kDkQqsFIBSgVOKhCuwE4F0IHsCv7czR1jjI5j9wCBEr6ZHUanhdvdez+IZmZm/mcWNDAArtRjaeXGPnVaVFMtrLwqeVLyslgsMrpEtNNK7pQclBwRjn73UcmKLgHr+BbdnG4iV5IqiWhqDOy4i+1kAgFT1c/leJUcYzYNmFJ/wPhoG64okKBRAKb6Hei0Jx+LQsmtGjUKEiIOwASdLykoIAiiAEzY+ZKChEFgB+ACnC8pSBAEVgBsJ/NM03e+pFDyVQXhtU3xE/HYkt/5vZIfSjIanszm9dOjE5GxuTuq9FeMoSiq6Ef2nRz9oecZSX24Q/v8467NP28TAK/dZ6qq3Ta8n6jHmsziR1NU5I3Mwqfki82nXDyVfFeyc1Vn9f29etxTM/qda05TcAIz5WwjbflGWSPYkxW8L6aWLXobhn0JhWAN55DQSIDXPI++4Ps6wYR4BE9Dz4S2b9P0py8A34jHZxqPJVNv3VQLnAGAWWVFxKO1px2QG6aedj52/dFUAyRO/aLxeBLortma4K/vc3RYivYBzLYbhyPLVqUUg8+KRkZob1x/39UEuB1LoSYYexoZu3OcMdVPfHMFICYeGU2H30y9k07TFQDusPaHpsMLU49VAyLqN9NzUDD1TjrBLgG4RKJ6Anc/4J+lSwCmtAYItmUOgCOtIB7c+cI5YM9d6gmuAHB3T7irxXMQM/WKeoIrANzxfYmR1wEVuIXxVk9wBUAyvm9oZOx6hFsQWauGcHHBW2ENCGS7zzHng1eQHXc/0kiAt2lbcpR8+AAZ/RxCCFB5rmUmgr9xA95ua50HOhOQlXzJSpKBrxn4mkeOATdJYPqnA+TkJAXmKKpOWvnfd/yl01NrcHAnCVMQ+htbdDtqS0Mzr5e2/r2q6ERMw54haCJK9x79ni1GFALctUCzregsGQbkEiNggp+jHxIKBf6+YFPRazujE1dBNAdfQo6u1+lgDildfJgEtRgckxDwzyZ9rKgP1Id2DRkkNT3dYe1h2ryWFJWaEpBvF3bUF2huk4NOhRFO3rtdaO7x5UMMP89Q5yMaAk8QdFpMPQM5udT5vi9K6s2UF/t8tTqROr25pgC0RwL1ggJvi4oBfwIEoRP1fAYr+c7AdIy7CQRA2zDengQYV+IokBbH9Qg05uWMd2CahG8iFFEAHsdP7gxOAhuIvaNGBBmLj9Pw6TruAqZppOgwHYWZhqcQ3jOcmZmZmWHyF+48id/ovuphAAAAAElFTkSuQmCC"
                css={{ width: 32, height: 32 }}
              />
              <img
                alt="discord.svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQsSURBVHgB7VvhVdwwDNbd6/9eJ6iZoDBB0wl63eA6AWwATNBjgjsmgE6QdAJggoQJoBOo0rPvNfgcW3ZykIR87+kFHFm2FUWWrAvAhAkT3jNmMcyIuKDLiugLkTIEtetro6pdH4juiYrZbFZBl6CFK6Ich4MNkYIuQIJOiZ5weOA5n0EbkIBzHD7OIQWon/xY0GgJs4bFK7rcES1gHHgmOnE5x3lDhwsYz+IZvJaN68aeBZinX8I48Yms4Lne4LKADMaLld3gUsAxjBdf7Ia5hGlEUHbDXMI0Iii74QMcBgXRH9CxORM7nhzkr1dB9BO092bKiL7CAfyTaxdASAMv8opovfO0JGpJl1N4OXG+V5mrDVZQffstiK5J3tbIU3ThoOY7JFoqyfIngJiGNepMcSdjRVSijsc3HIkRHdd5POMviDLT58bIYVrVeJQZMxqh8WMVUPJkrYndmMll0BGMQraoM1JltZcYAclgMchq/Zaon/xBI0gzxqr2fxYzYckAUuS1Pm8aNmPEWYXddw7puN79YYeXb4BLSETqLlDRoo+gR6BpP4EggbN3gVQLuIL+IWlOqRZw1PnBY0sYP/QU4uvCAoq+LZ5h/FABkUhRwDX0F7+hLQQ7iYKeAnUgFrUNuoT40PuTIgxEhjZ/7CtQxDCjjtpyM6kbifWgzhl2fe6wFvUJ0e41QD+WEXLOHf05OTr29FHoLsKICxxG6WILcAnwQZTPo/9dzD39ck8/UbgdGLuVAoJ7bE2G9ym4FoM6DfYhxgoaS3k2b4wPuI/gVYH7C2FbzP06KiljjAIeInirwP3nhjZfUhXzAMRzjVFATMZ3C81K2LqyR9PW5ME5+boFOWKU9RKed1C8Axg5vJ2Vlox79Dgz4wfsPt6do0FOow+yeWNOhaNyfnpivNhvoKsxn4keqG0d6MNjHKHe+/kU+BFqh6wRqCAVzQbQ3xDYBnq2Qpu3zYmQPaCCV0KX44nPA0Ln6aj36Y/Elnw8FYLxH1xn+Bt6naTrEFtASONmQjPjxDo9HTbOkX/qUuqhgotX0GKwJpQoS2YyfFkUWaYoA/8XSNZGVo6CWoN5PUqpD4g9EquIfrCHh/BEMtA7AJexWAEF6AClAndpTBk+vnKFOjPtW9DlsQJkY27AE4l2VRoT/fIKwzmBBMEcALW1/JIIk0xaihI9uTo2p7axYBnKs/AzjCiP2TJcrwA7GgVysClzmLorh1em/Q4SK7gOVEQn5u96uXwJkUmSXc/oQgFDwp4CXNtgBeNFZTe4FPAI48VemuxSQHoq2X/src3lA0QlpoFir6S3ZwGpJaYBYOsq6U0/lnZxG8aDZXVvgMukgi5ZwgUOHxfQBqhDzff5yUxNCRzXb3E4yFF4JhD72ZwCHYfzKe3u0zmAfnw2x8SBzrYHP9qaMGHCQPAPcHN8Q/gLAIsAAAAASUVORK5CYII="
                css={{ width: 32, height: 32 }}
              />
            </div>
            <span css={{ fontSize: 12, color: '#ffffff99' }}>
              2022 OneKey, Inc. All rights reserved.
            </span>
          </div>
        </div>
        <div css={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          <div css={{ display: 'flex', flexGrow: 1 }}>
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
                flexGrow: 1,
              }}
            >
              <span css={{ fontSize: 14, color: '#ffffff99' }}>Product</span>
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  flexGrow: 1,
                }}
              >
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Crowdfunding
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Mobile Wallet
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Hardware Device
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Browser Extension
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>Swap</span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>Token List</span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Recovery Phrase Converter
                </span>
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
              <span css={{ fontSize: 14, color: '#ffffff99' }}>Resource</span>
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  flexGrow: 1,
                }}
              >
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  System Status
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Open Source Community
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>Media Kits</span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Privacy Agreement
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  User Agreement
                </span>
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
              <span css={{ fontSize: 14, color: '#ffffff99' }}>
                Information
              </span>
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  flexGrow: 1,
                }}
              >
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Submit Dapp
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Submit Token
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Venture Capital
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Sales Alliance
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Advertising
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Investor Relations
                </span>
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
              <span css={{ fontSize: 14, color: '#ffffff99' }}>
                Crypto Assets
              </span>
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  flexGrow: 1,
                }}
              >
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Bitcoin (BTC)
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Ethereum (ETH)
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Litecoin (LTC)
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Dogecoin (DOGE)
                </span>
                <span css={{ fontSize: 16, color: '#ffffff' }}>
                  Dash (DASH)
                </span>
              </div>
            </div>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              flexGrow: 1,
            }}
          >
            <span css={{ fontSize: 14, color: '#ffffff99' }}>
              Subscribe to our notifications
            </span>
            <div
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span css={{ fontSize: 14, color: '#ffffff' }}>
                Enter your email
              </span>
              <div
                css={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#ffffff',
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 15,
                  paddingBottom: 15,
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                  backgroundColor: '#ffffff99',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span css={{ fontSize: 14, color: '#ffffff' }}>Subscribe</span>
              </div>
            </div>
            <div
              css={{ height: 1, width: '100%', backgroundColor: '#ffffff' }}
            />
            <span css={{ fontSize: 12, color: '#ffffff99' }}>
              Subscribe to our notifications (for privacy reason, use different
              email than the one you use to purchase onekey. we also
              periodically delete those order information)
            </span>
          </div>
        </div>
      </div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="button" onClick={subscribe}>
        subscribe
      </button>
    </div>
  );
};
