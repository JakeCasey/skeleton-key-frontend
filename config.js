// This is client side config only - don't put anything in here that shouldn't be public!
export const endpoint = `http://localhost:4444/graphql`;
// export const endpoint = `https://backend.mydirigible.com`;
export const prodEndPoint = `https://backend.mydirigible.com`;
// export const prodEndPoint = `http://localhost:4444`;
export const frontend = `http://localhost:7777`;
// export const frontend = `http://adee6621.ngrok.io`;

export const prodFrontend = 'https://portal.mydirigible.com';
export const devFrontend = 'http://localhost:7777';

export const analyticsHeadTag = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XMGLZPVXE3', {
              page_path: window.location.pathname,
            });
`;

export const analyticsBodyTag = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T7G32SN"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

// export const prodFrontend = "http://localhost:7777";
