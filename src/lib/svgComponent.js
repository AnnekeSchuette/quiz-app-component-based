import createElement from './createElement'
export default function SvgComponent(props) {
  const svgSrc = createElement('svg', {
    innerHTML: `
      <defs>
      <symbol id="icon-add-outline" viewBox="0 0 20 20">
        <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 000-16 8 8 0 000 16z" />
      </symbol>
      <symbol id="icon-add-solid" viewBox="0 0 20 20">
        <path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
      </symbol>
      <symbol id="icon-adjust" viewBox="0 0 20 20">
        <path d="M10 2v16a8 8 0 000-16zm0 18C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
      </symbol>
      <symbol id="icon-airplane1" viewBox="0 0 20 20">
        <path d="M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 110 4h-5.2L8 20H6l2.4-8z" />
      </symbol>
      <symbol id="icon-album" viewBox="0 0 20 20">
        <path d="M0 0h20v20H0V0zm10 18a8 8 0 000-16 8 8 0 000 16zm0-5a3 3 0 110-6 3 3 0 110 6z" />
      </symbol>
      <symbol id="icon-align-center" viewBox="0 0 20 20">
        <path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM4 5h12v2H4V5zm0 8h12v2H4v-2z" />
      </symbol>
      <symbol id="icon-align-justified" viewBox="0 0 20 20">
        <path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM1 5h18v2H1V5zm0 8h18v2H1v-2z" />
      </symbol>
      <symbol id="icon-align-left" viewBox="0 0 20 20">
        <path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM1 5h12v2H1V5zm0 8h12v2H1v-2z" />
      </symbol>
      <symbol id="icon-align-right" viewBox="0 0 20 20">
        <path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2z" />
      </symbol>
      <symbol id="icon-anchor1" viewBox="0 0 20 20">
        <path d="M4.34 15.66a7.948 7.948 0 004.62 2.276l.04.004V10H5V8h4V5.83a3.006 3.006 0 01-2-2.828 3 3 0 114.021 2.822L11 5.831v2.17h4v2h-4v7.94a7.97 7.97 0 004.66-2.28l-1.42-1.42h5.66l-2.83 2.83c-1.81 1.809-4.309 2.928-7.07 2.928s-5.26-1.119-7.07-2.928L.1 14.241h5.66l-1.42 1.42zM10 4a1 1 0 000-2 1 1 0 000 2z" />
      </symbol>
      <symbol id="icon-announcement" viewBox="0 0 20 20">
        <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 01-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
      </symbol>
      <symbol id="icon-apparel" viewBox="0 0 20 20">
        <path d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 11-6 0z" />
      </symbol>
      <symbol id="icon-arrow-down1" viewBox="0 0 20 20">
        <path d="M9 16.172l-6.071-6.071-1.414 1.414L10 20l8.485-8.485-1.414-1.414L11 16.172V0H9z" />
      </symbol>
      <symbol id="icon-arrow-left1" viewBox="0 0 20 20">
        <path d="M3.828 9l6.071-6.071-1.414-1.414L0 10l8.485 8.485 1.414-1.414L3.828 11H20V9H3.828z" />
      </symbol>
      <symbol id="icon-arrow-outline-down" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 000-16 8 8 0 000 16zm-2-8V5h4v5h3l-5 5-5-5h3z" />
      </symbol>
      <symbol id="icon-arrow-outline-left" viewBox="0 0 20 20">
        <path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10zm2 0a8 8 0 0016 0 8 8 0 00-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z" />
      </symbol>
      <symbol id="icon-arrow-outline-right" viewBox="0 0 20 20">
        <path d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zm-2 0a8 8 0 00-16 0 8 8 0 0016 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
      </symbol>
      <symbol id="icon-arrow-outline-up" viewBox="0 0 20 20">
        <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2a8 8 0 000 16 8 8 0 000-16zm2 8v5H8v-5H5l5-5 5 5h-3z" />
      </symbol>
      <symbol id="icon-arrow-right1" viewBox="0 0 20 20">
        <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-8.485 8.485-1.414-1.414L16.172 11H0V9z" />
      </symbol>
      <symbol id="icon-arrow-thick-down" viewBox="0 0 20 20">
        <path d="M7 10V2h6v8h5l-8 8-8-8h5z" />
      </symbol>
      <symbol id="icon-arrow-thick-left" viewBox="0 0 20 20">
        <path d="M10 13h8V7h-8V2l-8 8 8 8v-5z" />
      </symbol>
      <symbol id="icon-arrow-thick-right" viewBox="0 0 20 20">
        <path d="M10 7H2v6h8v5l8-8-8-8v5z" />
      </symbol>
      <symbol id="icon-arrow-thick-up" viewBox="0 0 20 20">
        <path d="M7 10v8h6v-8h5l-8-8-8 8h5z" />
      </symbol>
      <symbol id="icon-arrow-thin-down" viewBox="0 0 20 20">
        <path d="M9 16.172l-6.071-6.071-1.414 1.414L10 20l8.485-8.485-1.414-1.414L11 16.172V0H9z" />
      </symbol>
      <symbol id="icon-arrow-thin-left" viewBox="0 0 20 20">
        <path d="M3.828 9l6.071-6.071-1.414-1.414L0 10l8.485 8.485 1.414-1.414L3.828 11H20V9H3.828z" />
      </symbol>
      <symbol id="icon-arrow-thin-right" viewBox="0 0 20 20">
        <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-8.485 8.485-1.414-1.414L16.172 11H0V9z" />
      </symbol>
      <symbol id="icon-arrow-thin-up" viewBox="0 0 20 20">
        <path d="M9 3.828L2.929 9.899 1.515 8.485 10 0l8.485 8.485-1.414 1.414L11 3.828V20H9V3.828z" />
      </symbol>
      <symbol id="icon-arrow-up1" viewBox="0 0 20 20">
        <path d="M9 3.828L2.929 9.899 1.515 8.485 10 0l8.485 8.485-1.414 1.414L11 3.828V20H9V3.828z" />
      </symbol>
      <symbol id="icon-artist" viewBox="0 0 20 20">
        <path d="M15.75 8l-3.74-3.75a3.99 3.99 0 016.819-3.08A4 4 0 0115.737 8l.012.001zm-13.9 7.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z" />
      </symbol>
      <symbol id="icon-at-symbol" viewBox="0 0 20 20">
        <path d="M13.6 13.47A4.99 4.99 0 015 10.025v-.026V10a5 5 0 018.013-3.991L13 6V5h2v6.5a1.5 1.5 0 003 0V10a8 8 0 00-16 .006 8 8 0 0011.625 7.133l-.045.021.9 1.79A9.866 9.866 0 0110 20.01c-5.523 0-10-4.477-10-10s4.477-10 10-10c5.519 0 9.994 4.472 10 9.99v.001h-.01v1.51a3.5 3.5 0 01-6.392 1.972l-.008-.012zM10 13a3 3 0 100-6 3 3 0 100 6z" />
      </symbol>
      <symbol id="icon-attachment2" viewBox="0 0 20 20">
        <path d="M15 3H7a7 7 0 100 14h8v-2H7A5 5 0 017 5h8a3 3 0 110 6H7a1 1 0 010-2h8V7H7a3 3 0 100 6h8a5 5 0 000-10z" />
      </symbol>
      <symbol id="icon-backspace" viewBox="0 0 20 20">
        <path d="M0 10l7-7h13v14H7l-7-7zm14.41 0l2.13-2.12-1.42-1.42L13 8.6l-2.12-2.13-1.42 1.42L11.6 10l-2.13 2.12 1.42 1.42L13 11.4l2.12 2.13 1.42-1.42L14.4 10z" />
      </symbol>
      <symbol id="icon-backward1" viewBox="0 0 20 20">
        <path d="M19 5v10l-9-5 9-5zm-9 0v10l-9-5 9-5z" />
      </symbol>
      <symbol id="icon-backward-step" viewBox="0 0 20 20">
        <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
      </symbol>
      <symbol id="icon-badge" viewBox="0 0 20 20">
        <path d="M10 12a6 6 0 110-12 6 6 0 110 12zm0-3a3 3 0 100-6 3 3 0 100 6zm4 2.75V20l-4-4-4 4v-8.25c1.115.79 2.502 1.262 4 1.262s2.885-.473 4.022-1.277L14 11.75z" />
      </symbol>
      <symbol id="icon-battery-full" viewBox="0 0 20 20">
        <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7zm5 0h4v6h-4V7z" />
      </symbol>
      <symbol id="icon-battery-half" viewBox="0 0 20 20">
        <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7z" />
      </symbol>
      <symbol id="icon-battery-low" viewBox="0 0 20 20">
        <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7z" />
      </symbol>
      <symbol id="icon-beverage" viewBox="0 0 20 20">
        <path d="M9 18v-7L0 2V0h20v2l-9 9v7l5 1v1H4v-1l5-1zm2-10a2 2 0 100-4 2 2 0 100 4z" />
      </symbol>
      <symbol id="icon-block" viewBox="0 0 20 20">
        <path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10zm16.32-4.9L5.09 16.31a7.948 7.948 0 004.908 1.683 8 8 0 006.308-12.92l.013.018zm-1.41-1.42a7.946 7.946 0 00-4.928-1.698 8 8 0 00-6.289 12.945l-.013-.017L14.91 3.68z" />
      </symbol>
      <symbol id="icon-bluetooth" viewBox="0 0 20 20">
        <path d="M9.41 0l6 6-4 4 4 4-6 6H9v-7.59l-3.3 3.3-1.4-1.42L8.58 10l-4.3-4.3L5.7 4.3 9 7.58V0h.41zM11 4.41V7.6L12.59 6 11 4.41zM12.59 14L11 12.41v3.18L12.59 14z" />
      </symbol>
      <symbol id="icon-bolt" viewBox="0 0 20 20">
        <path d="M13 8V0L3 12h4v8L17 8h-4z" />
      </symbol>
      <symbol id="icon-book-reference" viewBox="0 0 20 20">
        <path d="M6 4H5a1 1 0 010-2h11V1a1 1 0 00-1-1H4a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V5a1 1 0 00-1-1h-7v8l-2-2-2 2V4z" />
      </symbol>
      <symbol id="icon-bookmark1" viewBox="0 0 20 20">
        <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v18l-8-4-8 4V2z" />
      </symbol>
      <symbol id="icon-bookmarkcopy2" viewBox="0 0 20 20">
        <path d="M18 12v1H8v5l-6-6 6-6v5h8V2h2z" />
      </symbol>
      <symbol id="icon-bookmarkcopy3" viewBox="0 0 20 20">
        <path d="M3.5 13H12v5l6-6-6-6v5H4V2H2v11z" />
      </symbol>
      <symbol id="icon-bookmark-outline" viewBox="0 0 20 20">
        <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4z" />
      </symbol>
      <symbol id="icon-bookmark-outline-add" viewBox="0 0 20 20">
        <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4zm5 5V5h2v2h2v2h-2v2H9V9H7V7h2z" />
      </symbol>
      <symbol id="icon-border-all" viewBox="0 0 20 20">
        <path d="M11 11v6h6v-6h-6zm0-2h6V3h-6v6zm-2 2H3v6h6v-6zm0-2V3H3v6h6zm-8 9V1h18v18H1v-1z" />
      </symbol>
      <symbol id="icon-border-bottom" viewBox="0 0 20 20">
        <path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h18v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm4-8h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm4-12h2v2h-2V1zm0 8h2v2h-2V9zm4-8h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2z" />
      </symbol>
      <symbol id="icon-border-horizontal" viewBox="0 0 20 20">
        <path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h18v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 16h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 8h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 16h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 8h2v2h-2v-2zm0 4h2v2h-2v-2z" />
      </symbol>
      <symbol id="icon-border-inner" viewBox="0 0 20 20">
        <path d="M9 9V1h2v8h8v2h-8v8H9v-8H1V9h8zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 8h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 16h2v2H5v-2zm8-16h2v2h-2V1zm0 16h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 8h2v2h-2v-2zm0 4h2v2h-2v-2z" />
      </symbol>
      <symbol id="icon-border-left" viewBox="0 0 20 20">
        <path d="M1 1h2v18H1V1zm4 0h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
      </symbol>
      <symbol id="icon-border-none" viewBox="0 0 20 20">
        <path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
      </symbol>
      <symbol id="icon-border-outer" viewBox="0 0 20 20">
        <path d="M2 19H1V1h18v18H2zm1-2h14V3H3v14zm10-8h2v2h-2V9zM9 9h2v2H9V9zM5 9h2v2H5V9zm4-4h2v2H9V5zm0 8h2v2H9v-2z" />
      </symbol>
      <symbol id="icon-border-right" viewBox="0 0 20 20">
        <path d="M5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM17 1h2v18h-2V1z" />
      </symbol>
      <symbol id="icon-border-top" viewBox="0 0 20 20">
        <path d="M1 1h18v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm4-8h2v2H5V9zm0 8h2v2H5v-2zM9 5h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-8h2v2h-2V9zm0 8h2v2h-2v-2zm4-12h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
      </symbol>
      <symbol id="icon-border-vertical" viewBox="0 0 20 20">
        <path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v18H9V1zm4 0h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
      </symbol>
      <symbol id="icon-box" viewBox="0 0 20 20">
        <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v2H0V2zm1 3h18v13a2 2 0 01-2 2H3a2 2 0 01-2-2V5zm6 2v2h6V7H7z" />
      </symbol>
      <symbol id="icon-brightness-down" viewBox="0 0 20 20">
        <path d="M10 13a3 3 0 110-6 3 3 0 110 6zM9 4a1 1 0 012 0 1 1 0 01-2 0zm4.54 1.05a1 1 0 111.412 1.408l-.001.001a1 1 0 11-1.412-1.408l.001-.001zM16 9a1 1 0 010 2 1 1 0 010-2zm-1.05 4.54a1 1 0 11-1.408 1.412l-.001-.001a1 1 0 111.408-1.412l.001.001zM11 16a1 1 0 01-2 0 1 1 0 012 0zm-4.54-1.05a1 1 0 11-1.412-1.408l.001-.001a1 1 0 111.412 1.408l-.001.001zM4 11a1 1 0 010-2 1 1 0 010 2zm1.05-4.54a1 1 0 111.408-1.412l.001.001a1 1 0 11-1.408 1.412L5.05 6.46z" />
      </symbol>
      <symbol id="icon-brightness-up" viewBox="0 0 20 20">
        <path d="M10 14a4 4 0 010-8 4 4 0 010 8zM9 1a1 1 0 012 0v2a1 1 0 01-2 0V1zm6.65 1.94a1 1 0 111.412 1.408l-.001.001-1.4 1.4a1 1 0 11-1.412-1.408l.001-.001 1.4-1.4zM18.99 9a1 1 0 010 2h-1.98a1 1 0 010-2h1.98zm-1.93 6.65a1 1 0 11-1.408 1.412l-.001-.001-1.4-1.4a1 1 0 111.408-1.412l.001.001 1.4 1.4zM11 18.99a1 1 0 01-2 0v-1.98a1 1 0 012 0v1.98zm-6.65-1.93a1 1 0 11-1.412-1.408l.001-.001 1.4-1.4a1 1 0 111.412 1.408l-.001.001-1.4 1.4zM1.01 11a1 1 0 010-2h1.98a1 1 0 010 2H1.01zm1.93-6.65a1 1 0 111.408-1.412l.001.001 1.4 1.4a1 1 0 11-1.408 1.412L4.34 5.75l-1.4-1.4z" />
      </symbol>
      <symbol id="icon-browser-window" viewBox="0 0 20 20">
        <path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2z" />
      </symbol>
      <symbol id="icon-browser-window-new" viewBox="0 0 20 20">
        <path d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zM0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2z" />
      </symbol>
      <symbol id="icon-browser-window-open" viewBox="0 0 20 20">
        <path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2zm8 3l4 5H6l4-5z" />
      </symbol>
      <symbol id="icon-bug1" viewBox="0 0 20 20">
        <path d="M15.3 14.89l2.77 2.77a.996.996 0 010 1.41.996.996 0 01-1.41 0l-2.59-2.58a5.967 5.967 0 01-3.034 1.505L11 18V9.04a1 1 0 00-2 0V18a5.988 5.988 0 01-3.074-1.513l.004.003-2.59 2.58a.996.996 0 01-1.41 0 .996.996 0 010-1.41l2.77-2.77a5.843 5.843 0 01-.626-1.856L4.07 13H1a1 1 0 010-2h3V8.41L.93 5.34a.996.996 0 010-1.41.996.996 0 011.41 0l2.1 2.1h11.12l2.1-2.1a.996.996 0 011.41 0 .996.996 0 010 1.41L16 8.41V11h3a1 1 0 010 2h-3.07c-.1.67-.32 1.31-.63 1.89zM15 5H5a5 5 0 0110 0z" />
      </symbol>
      <symbol id="icon-buoy" viewBox="0 0 20 20">
        <path d="M17.16 6.42a8.087 8.087 0 00-3.535-3.559l-.045-.021-1.34 2.69a5.057 5.057 0 012.217 2.202l.013.028 2.69-1.34zm0 7.16l-2.69-1.34a5.057 5.057 0 01-2.202 2.217l-.028.013 1.34 2.69a8.087 8.087 0 003.559-3.535l.021-.045zM6.42 2.84a8.087 8.087 0 00-3.559 3.535l-.021.045 2.69 1.34a5.057 5.057 0 012.202-2.217l.028-.013-1.34-2.69zM2.84 13.58a8.087 8.087 0 003.535 3.559l.045.021 1.34-2.69a5.057 5.057 0 01-2.217-2.202l-.013-.028-2.69 1.34zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-7a3 3 0 100-6 3 3 0 100 6z" />
      </symbol>
      <symbol id="icon-calculator1" viewBox="0 0 20 20">
        <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm3 1v2h10V3H5zm0 4v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9zm4 0v6h2v-6h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9z" />
      </symbol>
      <symbol id="icon-calendar2" viewBox="0 0 20 20">
        <path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z" />
      </symbol>
      <symbol id="icon-camera2" viewBox="0 0 20 20">
        <path d="M0 6c0-1.1.9-2 2-2h3l2-2h6l2 2h3a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm10 10a5 5 0 000-10 5 5 0 000 10zm0-2a3 3 0 110-6 3 3 0 110 6z" />
      </symbol>
      <symbol id="icon-chart" viewBox="0 0 20 20">
        <path d="M4.13 12H4a2 2 0 101.795 1.099l.005.011L7.86 10a2.064 2.064 0 00.664-.073l-.014.003 1.55 1.55a2 2 0 103.714-.381l.005.011L15.869 8h.13a2 2 0 10-1.795-1.099l-.005-.011-2.06 3.11a2.064 2.064 0 00-.664.073l.014-.003-1.56-1.55a2 2 0 10-3.714.381L6.21 8.89 4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4z" />
      </symbol>
      <symbol id="icon-chart-bar" viewBox="0 0 20 20">
        <path d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z" />
      </symbol>
      <symbol id="icon-chart-pie" viewBox="0 0 20 20">
        <path d="M19.95 11c-.525 5.076-4.779 9-9.95 9-5.523 0-10-4.477-10-10C0 4.829 3.924.575 8.957.054L9 .05V11h10.95zm-.08-2.6H11.6V.13c4.252.708 7.562 4.018 8.262 8.212l.008.058z" />
      </symbol>
      <symbol id="icon-chat-bubble-dots" viewBox="0 0 20 20">
        <path d="M10 15l-4 4v-4H2a2 2 0 01-2-2V3c0-1.1.9-2 2-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z" />
      </symbol>
      <symbol id="icon-checkmark1" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </symbol>
      <symbol id="icon-checkmark-outline" viewBox="0 0 20 20">
        <path d="M2.93 17.07A9.97 9.97 0 01-.123 9.877c0-5.523 4.477-10 10-10a9.968 9.968 0 017.19 3.05l.003.003a9.963 9.963 0 012.807 6.947c0 5.523-4.477 10-10 10-2.7 0-5.151-1.07-6.95-2.81l.003.003zm12.73-1.41A8.004 8.004 0 104.34 4.34a8.004 8.004 0 1011.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z" />
      </symbol>
      <symbol id="icon-cheveron-down" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </symbol>
      <symbol id="icon-cheveron-left" viewBox="0 0 20 20">
        <path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" />
      </symbol>
      <symbol id="icon-cheveron-outline-down" viewBox="0 0 20 20">
        <path d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zM10 2a8 8 0 000 16 8 8 0 000-16zm-.7 10.54L5.75 9l1.41-1.41L10 10.4l2.83-2.82L14.24 9 10 13.24l-.7-.7z" />
      </symbol>
      <symbol id="icon-cheveron-outline-left" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm8-10a8 8 0 00-16 0 8 8 0 0016 0zM7.46 9.3L11 5.75l1.41 1.41L9.6 10l2.82 2.83L11 14.24 6.76 10l.7-.7z" />
      </symbol>
      <symbol id="icon-cheveron-outline-right" viewBox="0 0 20 20">
        <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zM2 10a8 8 0 0016 0 8 8 0 00-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24 10l-.7.7z" />
      </symbol>
      <symbol id="icon-cheveron-outline-up" viewBox="0 0 20 20">
        <path d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10zm10 8a8 8 0 000-16 8 8 0 000 16zm.7-10.54L14.25 11l-1.41 1.41L10 9.6l-2.83 2.8L5.76 11 10 6.76l.7.7z" />
      </symbol>
      <symbol id="icon-cheveron-right" viewBox="0 0 20 20">
        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
      </symbol>
      <symbol id="icon-cheveron-up" viewBox="0 0 20 20">
        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
      </symbol>
      <symbol id="icon-clipboard2" viewBox="0 0 20 20">
        <path d="M7.03 2.6C7.245 1.135 8.492.023 10 .023a3 3 0 012.968 2.561l.002.016L15 3v1h1a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 000-2 1 1 0 000 2z" />
      </symbol>
      <symbol id="icon-close" viewBox="0 0 20 20">
        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
      </symbol>
      <symbol id="icon-close-outline" viewBox="0 0 20 20">
        <path d="M2.93 17.07A9.97 9.97 0 01-.123 9.877c0-5.523 4.477-10 10-10a9.968 9.968 0 017.19 3.05l.003.003a9.963 9.963 0 012.807 6.947c0 5.523-4.477 10-10 10-2.7 0-5.151-1.07-6.95-2.81l.003.003zm1.41-1.41A8.004 8.004 0 1015.66 4.34 8.004 8.004 0 104.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
      </symbol>
      <symbol id="icon-close-solid" viewBox="0 0 20 20">
        <path d="M2.93 17.07A9.97 9.97 0 01-.123 9.877c0-5.523 4.477-10 10-10a9.968 9.968 0 017.19 3.05l.003.003a9.963 9.963 0 012.807 6.947c0 5.523-4.477 10-10 10-2.7 0-5.151-1.07-6.95-2.81l.003.003zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z" />
      </symbol>
      <symbol id="icon-cloud2" viewBox="0 0 20 20">
        <path d="M16.88 9.1a4.007 4.007 0 013.111 3.9A4 4 0 0116 17H4.995a5 5 0 01-1.027-9.894L4 7.1V7v-.004a3 3 0 014.534-2.579l-.014-.008A4.98 4.98 0 0117 7.951v.05-.003c0 .38-.04.74-.12 1.1z" />
      </symbol>
      <symbol id="icon-cloud-upload1" viewBox="0 0 20 20">
        <path d="M16.88 9.1a4.007 4.007 0 013.111 3.9A4 4 0 0116 17H4.995a5 5 0 01-1.027-9.894L4 7.1V7v-.004a3 3 0 014.534-2.579l-.014-.008A4.98 4.98 0 0117 7.951v.05-.003c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
      </symbol>
      <symbol id="icon-code" viewBox="0 0 20 20">
        <path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z" />
      </symbol>
      <symbol id="icon-coffee" viewBox="0 0 20 20">
        <path d="M4 11H2a2 2 0 01-2-2V5c0-1.1.9-2 2-2h2V1h14v10a4 4 0 01-4 4H8a4 4 0 01-4-4zm0-2V5H2v4h2zm-2 8v-1h18v1l-4 2H6l-4-2z" />
      </symbol>
      <symbol id="icon-cog1" viewBox="0 0 20 20">
        <path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 100-6 3 3 0 100 6z" />
      </symbol>
      <symbol id="icon-color-palette" viewBox="0 0 20 20">
        <path d="M9 20v-1.7l.01-.24L15.07 12h2.94c1.1 0 1.99.89 1.99 2v4a2 2 0 01-2 2H9zm0-3.34V5.34l2.08-2.07c.36-.362.859-.586 1.41-.586s1.05.224 1.41.586l2.83 2.83a1.997 1.997 0 010 2.82L9 16.66zM0 1.99C0 .9.89 0 2 0h4a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zM4 17a1 1 0 000-2 1 1 0 000 2z" />
      </symbol>
      <symbol id="icon-compose" viewBox="0 0 20 20">
        <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
      </symbol>
      <symbol id="icon-computer-desktop" viewBox="0 0 20 20">
        <path d="M7 17H2a2 2 0 01-2-2V2C0 .9.9 0 2 0h16a2 2 0 012 2v13a2 2 0 01-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" />
      </symbol>
      <symbol id="icon-computer-laptop" viewBox="0 0 20 20">
        <path d="M18 16h2v1a1 1 0 01-1 1H1a1 1 0 01-1-1v-1h2V4c0-1.1.9-2 2-2h12a2 2 0 012 2v12zM4 4v9h12V4H4zm4 11v1h4v-1H8z" />
      </symbol>
      <symbol id="icon-conversation" viewBox="0 0 20 20">
        <path d="M17 11v3l-3-3H8a2 2 0 01-2-2V2c0-1.1.9-2 2-2h10a2 2 0 012 2v7a2 2 0 01-2 2h-1zm-3 2v2a2 2 0 01-2 2H6l-3 3v-3H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 004 4h6z" />
      </symbol>
      <symbol id="icon-copy1" viewBox="0 0 20 20">
        <path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-4v4a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 012 2v4h4V2H8v4zM2 8v10h10V8H2z" />
      </symbol>
      <symbol id="icon-credit-card1" viewBox="0 0 20 20">
        <path d="M18 6V4H2v2h16zm0 4H2v6h16v-6zM0 4c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm4 8h4v2H4v-2z" />
      </symbol>
      <symbol id="icon-currency-dollar" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm1-5h1a3 3 0 100-6H7.99a1 1 0 010-2H14V5h-3V3H9v2H8a3 3 0 100 6h4a1 1 0 010 2H6v2h3v2h2v-2z" />
      </symbol>
      <symbol id="icon-dashboard" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm-5.6-4.29c1.568-1.08 3.509-1.725 5.6-1.725s4.032.645 5.634 1.747l-.034-.022a8 8 0 10-11.201-.001l.001.001zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 11-1.396-1.407l-.014-.003z" />
      </symbol>
      <symbol id="icon-date-add" viewBox="0 0 20 20">
        <path d="M15 2h2a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V4c0-1.1.9-2 2-2h2V0h2v2h6V0h2v2zM3 6v12h14V6H3zm6 5V9h2v2h2v2h-2v2H9v-2H7v-2h2z" />
      </symbol>
      <symbol id="icon-dial-pad" viewBox="0 0 20 20">
        <path d="M5 4a2 2 0 110-4 2 2 0 110 4zm5 0a2 2 0 110-4 2 2 0 110 4zm5 0a2 2 0 110-4 2 2 0 110 4zM5 9a2 2 0 110-4 2 2 0 110 4zm5 0a2 2 0 110-4 2 2 0 110 4zm5 0a2 2 0 110-4 2 2 0 110 4zM5 14a2 2 0 110-4 2 2 0 110 4zm5 0a2 2 0 110-4 2 2 0 110 4zm0 6a2 2 0 110-4 2 2 0 110 4zm5-6a2 2 0 110-4 2 2 0 110 4z" />
      </symbol>
      <symbol id="icon-directions" viewBox="0 0 20 20">
        <path d="M10 0l10 10-10 10L0 10 10 0zM6 10v3h2v-3h3v3l4-4-4-4v3H8a2 2 0 00-2 2z" />
      </symbol>
      <symbol id="icon-document1" viewBox="0 0 20 20">
        <path d="M4 18h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z" />
      </symbol>
      <symbol id="icon-document-add" viewBox="0 0 20 20">
        <path d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zm-5 8h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z" />
      </symbol>
      <symbol id="icon-dots-horizontal-double" viewBox="0 0 20 20">
        <path d="M10 9a2 2 0 110-4 2 2 0 110 4zm0 6a2 2 0 110-4 2 2 0 110 4z" />
      </symbol>
      <symbol id="icon-dots-horizontal-triple" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 110-4 2 2 0 110 4zm0-6a2 2 0 110-4 2 2 0 110 4zm0 12a2 2 0 110-4 2 2 0 110 4z" />
      </symbol>
      <symbol id="icon-download4" viewBox="0 0 20 20">
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </symbol>
      <symbol id="icon-duplicate" viewBox="0 0 20 20">
        <path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-4v4a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 012 2v4h4V2H8v4zM2 8v10h10V8H2zm4 4v-2h2v2h2v2H8v2H6v-2H4v-2h2z" />
      </symbol>
      <symbol id="icon-edit-copy" viewBox="0 0 20 20">
        <path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-4v4a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 012 2v4h4V2H8v4zM2 8v10h10V8H2z" />
      </symbol>
      <symbol id="icon-edit-crop" viewBox="0 0 20 20">
        <path d="M14 16H6a2 2 0 01-2-2V6H0V4h4V0h2v14h14v2h-4v4h-2v-4zm0-3V6H7V4h7a2 2 0 012 2v7h-2z" />
      </symbol>
      <symbol id="icon-edit-cut" viewBox="0 0 20 20">
        <path d="M9.77 11.5l5.34 3.91c.44.33 1.24.59 1.79.59H20L6.89 6.38a3.5 3.5 0 10-1.378 1.982l-.011.007 2.23 1.63-2.23 1.63a3.5 3.5 0 101.374 1.965l.006.024 2.9-2.12zM3.5 7a1.5 1.5 0 010-3 1.5 1.5 0 010 3zm0 9a1.5 1.5 0 010-3 1.5 1.5 0 010 3zM15.1 4.59A3.492 3.492 0 0116.892 4H20l-7.5 5.5L10.45 8l4.65-3.41z" />
      </symbol>
      <symbol id="icon-edit-pencil" viewBox="0 0 20 20">
        <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
      </symbol>
      <symbol id="icon-education" viewBox="0 0 20 20">
        <path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-7-4.2v-6l7 4.2 7-4.2v6L10 20z" />
      </symbol>
      <symbol id="icon-envelope1" viewBox="0 0 20 20">
        <path d="M18 2a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
      </symbol>
      <symbol id="icon-exclamation-outline" viewBox="0 0 20 20">
        <path d="M2.93 17.07A9.97 9.97 0 01-.123 9.877c0-5.523 4.477-10 10-10a9.968 9.968 0 017.19 3.05l.003.003a9.963 9.963 0 012.807 6.947c0 5.523-4.477 10-10 10-2.7 0-5.151-1.07-6.95-2.81l.003.003zm12.73-1.41A8.004 8.004 0 104.34 4.34a8.004 8.004 0 1011.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z" />
      </symbol>
      <symbol id="icon-exclamation-solid" viewBox="0 0 20 20">
        <path d="M2.93 17.07A9.97 9.97 0 01-.123 9.877c0-5.523 4.477-10 10-10a9.968 9.968 0 017.19 3.05l.003.003a9.963 9.963 0 012.807 6.947c0 5.523-4.477 10-10 10-2.7 0-5.151-1.07-6.95-2.81l.003.003zM9 5v6h2V5H9zm0 8v2h2v-2H9z" />
      </symbol>
      <symbol id="icon-explore" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM7.88 7.88l-3.54 7.78 7.78-3.54 3.54-7.78-7.78 3.54zM10 11a1 1 0 010-2 1 1 0 010 2z" />
      </symbol>
      <symbol id="icon-factory" viewBox="0 0 20 20">
        <path d="M10.5 20H0V7l5 3.33V7l5 3.33V7l5 3.33V0h5v20h-9.5z" />
      </symbol>
      <symbol id="icon-fast-forward" viewBox="0 0 20 20">
        <path d="M1 5l9 5-9 5V5zm9 0l9 5-9 5V5z" />
      </symbol>
      <symbol id="icon-fast-rewind" viewBox="0 0 20 20">
        <path d="M19 5v10l-9-5 9-5zm-9 0v10l-9-5 9-5z" />
      </symbol>
      <symbol id="icon-film1" viewBox="0 0 20 20">
        <path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm6 0v12h8V4H6zM2 5v2h2V5H2zm0 4v2h2V9H2zm0 4v2h2v-2H2zm14-8v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zM8 7l5 3-5 3V7z" />
      </symbol>
      <symbol id="icon-filter1" viewBox="0 0 20 20">
        <path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z" />
      </symbol>
      <symbol id="icon-flag2" viewBox="0 0 20 20">
        <path d="M7.667 12H2v8H0V0h12l.333 2H20l-3 6 3 6H8l-.333-2z" />
      </symbol>
      <symbol id="icon-flashlight" viewBox="0 0 20 20">
        <path d="M13 7v11a2 2 0 01-2 2H9a2 2 0 01-2-2V7L5 5V3h10v2l-2 2zM9 8v1a1 1 0 002 0V8a1 1 0 00-2 0zM5 0h10v2H5V0z" />
      </symbol>
      <symbol id="icon-folder1" viewBox="0 0 20 20">
        <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4z" />
      </symbol>
      <symbol id="icon-folder-outline" viewBox="0 0 20 20">
        <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 2v10h16V6H2z" />
      </symbol>
      <symbol id="icon-folder-outline-add" viewBox="0 0 20 20">
        <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 2v10h16V6H2zm7 4V8h2v2h2v2h-2v2H9v-2H7v-2h2z" />
      </symbol>
      <symbol id="icon-format-bold" viewBox="0 0 20 20">
        <path d="M3 19V1h8.005a5 5 0 013.868 8.169l.007-.009A5.5 5.5 0 0111.501 19H2.999zm7.5-8H7v5h3.5a2.5 2.5 0 100-5zM7 4v4h3a2 2 0 100-4H7z" />
      </symbol>
      <symbol id="icon-format-font-size" viewBox="0 0 20 20">
        <path d="M16 9v8h-2V9h-4V7h10v2h-4zM8 5v12H6V5H0V3h15v2H8z" />
      </symbol>
      <symbol id="icon-format-italic" viewBox="0 0 20 20">
        <path d="M8 1h9v2H8V1zm3 2h3L8 17H5l6-14zM2 17h9v2H2v-2z" />
      </symbol>
      <symbol id="icon-format-text-size" viewBox="0 0 20 20">
        <path d="M16 9v8h-2V9h-4V7h10v2h-4zM8 5v12H6V5H0V3h15v2H8z" />
      </symbol>
      <symbol id="icon-format-underline" viewBox="0 0 20 20">
        <path d="M16 9A6 6 0 114 9V1h3v8a3 3 0 106 0V1h3v8zM2 17h16v2H2v-2z" />
      </symbol>
      <symbol id="icon-forward1" viewBox="0 0 20 20">
        <path d="M1 5l9 5-9 5V5zm9 0l9 5-9 5V5z" />
      </symbol>
      <symbol id="icon-forward-step" viewBox="0 0 20 20">
        <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
      </symbol>
      <symbol id="icon-gift2" viewBox="0 0 20 20">
        <path d="M14.83 4H20v6h-1v10H1V10H0V4h5.17A3 3 0 0110.003.762L10 .76a3 3 0 014.823 3.261L14.83 4zM8 10H3v8h5v-8zm4 0v8h5v-8h-5zM8 6H2v2h6V6zm4 0v2h6V6h-6zM8 4a1 1 0 000-2 1 1 0 000 2zm4 0a1 1 0 000-2 1 1 0 000 2z" />
      </symbol>
      <symbol id="icon-globe1" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm2-2.25a8.037 8.037 0 003.993-2.451L16 15.29V9a2 2 0 01-2-2V3.07a7.817 7.817 0 00-2.961-.996L11 2.07V3a2 2 0 01-2 2v1a2 2 0 01-2 2v2h3a2 2 0 012 2v5.75zm-4 0V15a2 2 0 01-2-2v-1h-.5A1.5 1.5 0 014 10.5V8H2.25a8.014 8.014 0 005.694 9.738l.056.013z" />
      </symbol>
      <symbol id="icon-hand-stop" viewBox="0 0 20 20">
        <path d="M17 16a4 4 0 01-4 4H7a4 4 0 01-4-4v-.011.001V4a1 1 0 012 0v6h1V2a1 1 0 012 0v8h1V1a1 1 0 012 0v9h1V2a1 1 0 012 0v13h1V9a1 1 0 011-1h1v8z" />
      </symbol>
      <symbol id="icon-hard-drive" viewBox="0 0 20 20">
        <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm10.4 5.6A5 5 0 1015 12V4.999l-2.6 2.6zM10 14a2 2 0 110-4 2 2 0 110 4zM6 3v2h4V3H6zM4 3a1 1 0 000-2 1 1 0 000 2zm0 16a1 1 0 000-2 1 1 0 000 2zm12 0a1 1 0 000-2 1 1 0 000 2zm0-16a1 1 0 000-2 1 1 0 000 2z" />
      </symbol>
      <symbol id="icon-headphones1" viewBox="0 0 20 20">
        <path d="M16 8A6 6 0 104 8v11H2a2 2 0 01-2-2v-4a2 2 0 012-2V8a8 8 0 0116 0v3a2 2 0 012 2v4a2 2 0 01-2 2h-2V8zm-4 2h3v10h-3V10zm-7 0h3v10H5V10z" />
      </symbol>
      <symbol id="icon-heart2" viewBox="0 0 20 20">
        <path d="M10 3.22l-.61-.6a5.5 5.5 0 00-7.778 7.772l-.002-.003 8.39 8.39 8.39-8.4a5.5 5.5 0 00-7.783-7.768l.003-.002-.61.61z" />
      </symbol>
      <symbol id="icon-home1" viewBox="0 0 20 20">
        <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
      </symbol>
      <symbol id="icon-hot" viewBox="0 0 20 20">
        <path d="M10 0s8 7.58 8 12a8 8 0 01-16 0c0-1.5.91-3.35 2.12-5.15A3.007 3.007 0 007 9.01a3 3 0 003-3v-.011V6 0zM8 0a3 3 0 100 6V0z" />
      </symbol>
      <symbol id="icon-hour-glass1" viewBox="0 0 20 20">
        <path d="M3 18v-.005a7 7 0 013.958-6.306L7 11.671v-3.34c-2.384-1.15-4-3.549-4-6.325V2H1V0h18v2h-2v.005a7 7 0 01-3.958 6.306L13 8.329v3.34c2.384 1.15 4 3.549 4 6.325V18h2v2H1v-2h2zM5 2v.001a5.002 5.002 0 003.967 4.893L9 6.9V10h2V6.9c2.299-.481 4-2.492 4-4.899V2H5z" />
      </symbol>
      <symbol id="icon-inbox" viewBox="0 0 20 20">
        <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2z" />
      </symbol>
      <symbol id="icon-inbox-check" viewBox="0 0 20 20">
        <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z" />
      </symbol>
      <symbol id="icon-inbox-download" viewBox="0 0 20 20">
        <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2zM9 8V5h2v3h3l-4 4-4-4h3z" />
      </symbol>
      <symbol id="icon-inbox-full" viewBox="0 0 20 20">
        <path d="M14 14h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 002-2zM0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 2h12v2H4V4zm0 3h12v2H4V7zm0 3h12v2H4v-2z" />
      </symbol>
      <symbol id="icon-indent-decrease1" viewBox="0 0 20 20">
        <path d="M1 1h18v2H1V1zm6 8h12v2H7V9zm-6 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2zM5 6v8l-4-4 4-4z" />
      </symbol>
      <symbol id="icon-indent-increase1" viewBox="0 0 20 20">
        <path d="M1 1h18v2H1V1zm6 8h12v2H7V9zm-6 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2zM1 6l4 4-4 4V6z" />
      </symbol>
      <symbol id="icon-information-outline" viewBox="0 0 20 20">
        <path d="M2.93 17.07A9.97 9.97 0 01-.123 9.877c0-5.523 4.477-10 10-10a9.968 9.968 0 017.19 3.05l.003.003a9.963 9.963 0 012.807 6.947c0 5.523-4.477 10-10 10-2.7 0-5.151-1.07-6.95-2.81l.003.003zm12.73-1.41A8.004 8.004 0 104.34 4.34a8.004 8.004 0 1011.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
      </symbol>
      <symbol id="icon-information-solid" viewBox="0 0 20 20">
        <path d="M2.93 17.07A9.97 9.97 0 01-.123 9.877c0-5.523 4.477-10 10-10a9.968 9.968 0 017.19 3.05l.003.003a9.963 9.963 0 012.807 6.947c0 5.523-4.477 10-10 10-2.7 0-5.151-1.07-6.95-2.81l.003.003zM9 11v4h2V9H9v2zm0-6v2h2V5H9z" />
      </symbol>
      <symbol id="icon-key3" viewBox="0 0 20 20">
        <path d="M12.26 11.74L10 14H8v2H6v2l-2 2H0v-4l8.26-8.26a5.866 5.866 0 01-.258-1.742 6 6 0 114.216 5.73l.043.011zm4.86-4.62A3 3 0 0015 2a2.992 2.992 0 00-2.12.88l4.24 4.24z" />
      </symbol>
      <symbol id="icon-keyboard1" viewBox="0 0 20 20">
        <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v2h2V6H2zm1 3v2h2V9H3zm-1 3v2h2v-2H2zm3 0v2h10v-2H5zm11 0v2h2v-2h-2zM6 9v2h2V9H6zm3 0v2h2V9H9zm3 0v2h2V9h-2zm3 0v2h2V9h-2zM5 6v2h2V6H5zm3 0v2h2V6H8zm3 0v2h2V6h-2zm3 0v2h4V6h-4z" />
      </symbol>
      <symbol id="icon-layers1" viewBox="0 0 20 20">
        <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z" />
      </symbol>
      <symbol id="icon-library1" viewBox="0 0 20 20">
        <path d="M0 6l10-6 10 6v2H0V6zm0 12h20v2H0v-2zm2-2h16v2H2v-2zm0-8h4v8H2V8zm6 0h4v8H8V8zm6 0h4v8h-4V8z" />
      </symbol>
      <symbol id="icon-light-bulb" viewBox="0 0 20 20">
        <path d="M7 13.33c-2.384-1.15-4-3.549-4-6.325a7 7 0 1110.042 6.306l-.042.018v2.67H7v-2.67zM7 17h6v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 017 18.5V17zm2-5.1V14h2v-2.1c2.299-.481 4-2.492 4-4.899a5 5 0 10-6.033 4.893L9 11.9z" />
      </symbol>
      <symbol id="icon-link1" viewBox="0 0 20 20">
        <path d="M9.26 13a1.994 1.994 0 01.015-2.019l-.005.009A3 3 0 009.027 5h-.028H9 5a3 3 0 100 6h.08a6.103 6.103 0 00.005 2.036L5.08 13H5A5 5 0 015 3h4a5.002 5.002 0 01.267 10H9.26zm1.48-6a1.994 1.994 0 01-.015 2.019l.005-.009a3 3 0 00.243 5.99h.028H11h4a3 3 0 100-6h-.08a6.103 6.103 0 00-.005-2.036L14.92 7H15a5 5 0 010 10h-4a5.002 5.002 0 01-.267-10h.007z" />
      </symbol>
      <symbol id="icon-list1" viewBox="0 0 20 20">
        <path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z" />
      </symbol>
      <symbol id="icon-list-add" viewBox="0 0 20 20">
        <path d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z" />
      </symbol>
      <symbol id="icon-list-bullet" viewBox="0 0 20 20">
        <path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z" />
      </symbol>
      <symbol id="icon-load-balancer" viewBox="0 0 20 20">
        <path d="M17 12h-6v4h1v4H8v-4h1v-4H3v4h1v4H0v-4h1v-4a2 2 0 012-2h6V6H7V0h6v6h-2v4h6a2 2 0 012 2v4h1v4h-4v-4h1v-4z" />
      </symbol>
      <symbol id="icon-location1" viewBox="0 0 20 20">
        <path d="M10 20S3 10.87 3 7a7 7 0 1114 0c0 3.87-7 13-7 13zm0-11a2 2 0 100-4 2 2 0 100 4z" />
      </symbol>
      <symbol id="icon-location-current" viewBox="0 0 20 20">
        <path d="M0 0l20 8-8 4-2 8z" />
      </symbol>
      <symbol id="icon-location-food" viewBox="0 0 20 20">
        <path d="M18 11v7a2 2 0 11-4 0v-5h-2V3a3 3 0 013-3h3v11zM4 10a2 2 0 01-2-2V1a1 1 0 012 0v4h1V1a1 1 0 012 0v4h1V1a1 1 0 012 0v7a2 2 0 01-2 2v8a2 2 0 11-4 0v-8z" />
      </symbol>
      <symbol id="icon-location-gas-station" viewBox="0 0 20 20">
        <path d="M13 18h1v2H0v-2h1V2c0-1.1.9-2 2-2h8a2 2 0 012 2v16zM3 2v6h8V2H3zm10 8h1a2 2 0 012 2v3a1 1 0 002 0v-5l-2-2V6l-2-2 1-1 5 5v7a3 3 0 11-6 0v-3h-1v-2z" />
      </symbol>
      <symbol id="icon-location-hotel" viewBox="0 0 20 20">
        <path d="M2 12h18v6h-2v-2H2v2H0V2h2v10zm8-6h8a2 2 0 012 2v3H10V6zm-4 5a3 3 0 110-6 3 3 0 110 6z" />
      </symbol>
      <symbol id="icon-location-marina" viewBox="0 0 20 20">
        <path d="M8 1.88V0h2v16h10l-4 4H2l-2-4h8v-2H0v-.26c3.736-3.009 6.529-7.05 7.955-11.69L8 1.88zM19.97 14H10v-.36c1.263-1.865 2.017-4.164 2.017-6.64S11.264 2.225 9.974.318l.027.042v-.2c5.609 2.315 9.566 7.57 9.968 13.793l.002.047z" />
      </symbol>
      <symbol id="icon-location-park" viewBox="0 0 20 20">
        <path d="M5.33 12.77a4 4 0 11-2.358-7.635L3 5.129v-.13-.004a4 4 0 015.734-3.606l-.024-.01a3.5 3.5 0 016.258 1.642l.002.018a2.507 2.507 0 011.998 2.066l.002.014a4.007 4.007 0 013.017 3.877 4 4 0 01-5.741 3.602l.024.01a5.051 5.051 0 01-2.238 1.957l-.032.013v3.42l2 1v1H6v-1l2-1v-3l-2.67-2.23zM5 10l3 3v-3H5z" />
      </symbol>
      <symbol id="icon-location-restroom" viewBox="0 0 20 20">
        <path d="M12 16H9l2-4.5V9c0-1.1.9-2 2-2h2a2 2 0 012 2v2.5l2 4.5h-3v4h-4v-4zm-5-3h2V9a2 2 0 00-2-2H3a2 2 0 00-2 2v4h2v7h4v-7zM5 6a3 3 0 110-6 3 3 0 110 6zm9 0a3 3 0 110-6 3 3 0 110 6z" />
      </symbol>
      <symbol id="icon-location-shopping" viewBox="0 0 20 20">
        <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1112 0zm-2 0a4 4 0 00-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
      </symbol>
      <symbol id="icon-lock-closed" viewBox="0 0 20 20">
        <path d="M4 8V6a6 6 0 1112 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 10-2.009-.005L9 14.73zM7 6v2h6V6a3 3 0 10-6 0z" />
      </symbol>
      <symbol id="icon-lock-open" viewBox="0 0 20 20">
        <path d="M4 8V6a6 6 0 1112 0h-3v2h4a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 10-2.009-.005L9 14.73zM7 6v2h6V6a3 3 0 10-6 0z" />
      </symbol>
      <symbol id="icon-map3" viewBox="0 0 20 20">
        <path d="M0 0l6 4 8-4 6 4v16l-6-4-8 4-6-4V0zm7 6v11l6-3V3L7 6z" />
      </symbol>
      <symbol id="icon-menu1" viewBox="0 0 20 20">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </symbol>
      <symbol id="icon-mic2" viewBox="0 0 20 20">
        <path d="M9 18v-1.06c-3.967-.514-7-3.872-7-7.937V9h2a6 6 0 1012 0h2v.003a8.001 8.001 0 01-6.96 7.933l-.04.004V18h3v2H6v-2h3zM6 4a4 4 0 018 0v5a4 4 0 01-8 0V4z" />
      </symbol>
      <symbol id="icon-minus-outline" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 000-16 8 8 0 000 16zm5-9v2H5V9h10z" />
      </symbol>
      <symbol id="icon-minus-solid" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm5-11H5v2h10V9z" />
      </symbol>
      <symbol id="icon-mobile-devices" viewBox="0 0 20 20">
        <path d="M17 6V5h-2V2H3v14h5v4h3a2 2 0 01-2-2V8a2 2 0 012-2h6zm-5.75 14H3a2 2 0 01-2-2V2c0-1.1.9-2 2-2h12a2 2 0 012 2v4a2 2 0 012 2v10a2 2 0 01-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 000-2 1 1 0 000 2z" />
      </symbol>
      <symbol id="icon-mood-happy-outline" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 000-16 8 8 0 000 16zM6.5 9a1.5 1.5 0 010-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 010-3 1.5 1.5 0 010 3zm2.16 3c-.846 2.355-3.06 4.009-5.66 4.009s-4.814-1.654-5.647-3.967L4.34 12h11.32z" />
      </symbol>
      <symbol id="icon-mood-happy-solid" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM6.5 9a1.5 1.5 0 000-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 000-3 1.5 1.5 0 000 3zm2.16 3H4.34c.846 2.355 3.06 4.009 5.66 4.009s4.814-1.654 5.647-3.967L15.66 12z" />
      </symbol>
      <symbol id="icon-mood-neutral-outline" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 000-16 8 8 0 000 16zM6.5 9a1.5 1.5 0 010-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 010-3 1.5 1.5 0 010 3zM7 13h6a1 1 0 010 2H7a1 1 0 010-2z" />
      </symbol>
      <symbol id="icon-mood-neutral-solid" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM6.5 9a1.5 1.5 0 000-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 000-3 1.5 1.5 0 000 3zM7 13a1 1 0 000 2h6a1 1 0 000-2H7z" />
      </symbol>
      <symbol id="icon-mood-sad-outline" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 000-16 8 8 0 000 16zM6.5 9a1.5 1.5 0 010-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 010-3 1.5 1.5 0 010 3zm2.16 6H4.34c.846-2.355 3.06-4.009 5.66-4.009s4.814 1.654 5.647 3.967l.013.042z" />
      </symbol>
      <symbol id="icon-mood-sad-solid" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM6.5 9a1.5 1.5 0 000-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 000-3 1.5 1.5 0 000 3zm2.16 6c-.846-2.355-3.06-4.009-5.66-4.009s-4.814 1.654-5.647 3.967L4.34 15h11.32z" />
      </symbol>
      <symbol id="icon-mouse" viewBox="0 0 20 20">
        <path d="M4 9V6v-.004C4 3.036 6.144.576 8.964.085L9 .08V9H4zm0 2v3a6 6 0 1012 0v-3H4zm12-2V6v-.004c0-2.96-2.144-5.42-4.964-5.911L11 .08V9h5z" />
      </symbol>
      <symbol id="icon-music-album" viewBox="0 0 20 20">
        <path d="M0 0h20v20H0V0zm10 18a8 8 0 000-16 8 8 0 000 16zm0-5a3 3 0 110-6 3 3 0 110 6z" />
      </symbol>
      <symbol id="icon-music-artist" viewBox="0 0 20 20">
        <path d="M15.75 8l-3.74-3.75a3.99 3.99 0 016.819-3.08A4 4 0 0115.737 8l.012.001zm-13.9 7.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z" />
      </symbol>
      <symbol id="icon-music-notes" viewBox="0 0 20 20">
        <path d="M20 2.5V0L6 2v12.17a2.939 2.939 0 00-.996-.17H2.999a3 3 0 100 6h2a3 3 0 003-3V5.71l10-1.41v7.88a2.939 2.939 0 00-.996-.17h-2.005a3 3 0 100 6h2a3 3 0 003-3V2.5z" />
      </symbol>
      <symbol id="icon-music-playlist" viewBox="0 0 20 20">
        <path d="M16 17a3 3 0 01-3 3h-2a3 3 0 110-6h2.004c.357 0 .699.062 1.016.177l-.021-.007V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z" />
      </symbol>
      <symbol id="icon-navigation-more" viewBox="0 0 20 20">
        <path d="M4 12a2 2 0 110-4 2 2 0 110 4zm6 0a2 2 0 110-4 2 2 0 110 4zm6 0a2 2 0 110-4 2 2 0 110 4z" />
      </symbol>
      <symbol id="icon-network" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm7.75-8a8.053 8.053 0 00-.012-4.056l.013.056h-3.82a29 29 0 01-.005 4.093l.005-.093h3.82zm-.82 2h-3.22a14.455 14.455 0 01-.985 3.605l.035-.095a8.087 8.087 0 004.15-3.472l.02-.038zm-8.85-2h3.84a24.91 24.91 0 00-.007-4.09l.006.09h-3.84a24.91 24.91 0 00.007 4.09L8.08 12zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a29 29 0 01.005-4.093L6.07 8H2.25a8.053 8.053 0 00.012 4.056L2.249 12zm.82 2a8.08 8.08 0 004.115 3.492l.055.018c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.08 8.08 0 00-4.115-3.492l-.055-.018c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51a8.087 8.087 0 00-4.15 3.472L3.07 6z" />
      </symbol>
      <symbol id="icon-news-paper" viewBox="0 0 20 20">
        <path d="M16 2h4v15a3 3 0 01-3 3H3a3 3 0 01-3-3V0h16v2zm0 2v13a1 1 0 002 0V4h-2zM2 2v15a1 1 0 001 1h11.17a2.915 2.915 0 01-.17-.992V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
      </symbol>
      <symbol id="icon-notification1" viewBox="0 0 20 20">
        <path d="M4 8v-.003a6.002 6.002 0 013.988-5.654l.042-.013a2 2 0 113.948.012l.002-.012C14.341 3.173 16 5.39 16 7.994V14l3 2v1H1v-1l3-2V8zm8 10a2 2 0 11-4 0h4z" />
      </symbol>
      <symbol id="icon-notifications" viewBox="0 0 20 20">
        <path d="M4 8v-.003a6.002 6.002 0 013.988-5.654l.042-.013a2 2 0 113.948.012l.002-.012C14.341 3.173 16 5.39 16 7.994V14l3 2v1H1v-1l3-2V8zm8 10a2 2 0 11-4 0h4z" />
      </symbol>
      <symbol id="icon-notifications-outline" viewBox="0 0 20 20">
        <path d="M6 8v7h8V8a4 4 0 00-8 0zm2.03-5.67a2 2 0 113.948.012l.002-.012C14.341 3.173 16 5.39 16 7.994V14l3 2v1H1v-1l3-2V8v-.003a6.002 6.002 0 013.988-5.654l.042-.013zM12 18a2 2 0 11-4 0h4z" />
      </symbol>
      <symbol id="icon-paste1" viewBox="0 0 20 20">
        <path d="M10.5 20H2a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4C5.245 1.135 6.492.023 8 .023a3 3 0 012.968 2.561l.002.016L13 3v1h1a2 2 0 012 2v1h-2V6h-1v1H3V6H2v12h5v2h3.5zM8 4a1 1 0 000-2 1 1 0 000 2zm2 4h8a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-8c0-1.1.9-2 2-2zm0 2v8h8v-8h-8z" />
      </symbol>
      <symbol id="icon-pause1" viewBox="0 0 20 20">
        <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
      </symbol>
      <symbol id="icon-pause-outline" viewBox="0 0 20 20">
        <path d="M2.93 17.07A9.97 9.97 0 01-.123 9.877c0-5.523 4.477-10 10-10a9.968 9.968 0 017.19 3.05l.003.003a9.963 9.963 0 012.807 6.947c0 5.523-4.477 10-10 10-2.7 0-5.151-1.07-6.95-2.81l.003.003zm12.73-1.41A8.004 8.004 0 104.34 4.34a8.004 8.004 0 1011.32 11.32zM7 6h2v8H7V6zm4 0h2v8h-2V6z" />
      </symbol>
      <symbol id="icon-pause-solid" viewBox="0 0 20 20">
        <path d="M2.93 17.07A9.97 9.97 0 01-.123 9.877c0-5.523 4.477-10 10-10a9.968 9.968 0 017.19 3.05l.003.003a9.963 9.963 0 012.807 6.947c0 5.523-4.477 10-10 10-2.7 0-5.151-1.07-6.95-2.81l.003.003zM7 6v8h2V6H7zm4 0v8h2V6h-2z" />
      </symbol>
      <symbol id="icon-pen-tool" viewBox="0 0 20 20">
        <path d="M11 9.27V0l6 11-4 6H7l-4-6L9 0v9.27a2 2 0 102.009.005L11 9.27zM6 18h8v2H6v-2z" />
      </symbol>
      <symbol id="icon-phone2" viewBox="0 0 20 20">
        <path d="M20 18.35V19a1 1 0 01-1 1h-2C7.611 20 0 12.389 0 3V1a1 1 0 011-1h4a1 1 0 011 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 01.99 1v3.35z" />
      </symbol>
      <symbol id="icon-photo" viewBox="0 0 20 20">
        <path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm11 9l-3-3-6 6h16l-5-5-2 2zm4-4a2 2 0 100-4 2 2 0 100 4z" />
      </symbol>
      <symbol id="icon-php-elephant" viewBox="0 0 20 20">
        <path d="M10 12v8C4.48 19.997.006 15.521.006 10c0-4.874 3.486-8.933 8.101-9.82L8.17.17 10 2h5a5 5 0 015 4.989v9.021A4 4 0 0116 20v-2a2 2 0 100-4h-4l-2-2zm5.5-3a1.5 1.5 0 000-3 1.5 1.5 0 000 3z" />
      </symbol>
      <symbol id="icon-pin" viewBox="0 0 20 20">
        <path d="M11 12h6v-1l-3-1V2l3-1V0H3v1l3 1v8l-3 1v1h6v7l1 1 1-1v-7z" />
      </symbol>
      <symbol id="icon-play1" viewBox="0 0 20 20">
        <path d="M4 4l12 6-12 6z" />
      </symbol>
      <symbol id="icon-play-outline" viewBox="0 0 20 20">
        <path d="M2.93 17.07A9.97 9.97 0 01-.123 9.877c0-5.523 4.477-10 10-10a9.968 9.968 0 017.19 3.05l.003.003a9.963 9.963 0 012.807 6.947c0 5.523-4.477 10-10 10-2.7 0-5.151-1.07-6.95-2.81l.003.003zm12.73-1.41A8.004 8.004 0 104.34 4.34a8.004 8.004 0 1011.32 11.32zM7 6l8 4-8 4V6z" />
      </symbol>
      <symbol id="icon-playlist" viewBox="0 0 20 20">
        <path d="M16 17a3 3 0 01-3 3h-2a3 3 0 110-6h2.004c.357 0 .699.062 1.016.177l-.021-.007V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z" />
      </symbol>
      <symbol id="icon-plugin" viewBox="0 0 20 20">
        <path d="M20 14v4a2 2 0 01-2 2h-4v-2a2 2 0 10-4 0v2H6a2 2 0 01-2-2v-4H2a2 2 0 110-4h2V6c0-1.1.9-2 2-2h4V2a2 2 0 114 0v2h4a2 2 0 012 2v4h-2a2 2 0 100 4h2z" />
      </symbol>
      <symbol id="icon-portfolio" viewBox="0 0 20 20">
        <path d="M9 12H1v6a2 2 0 002 2h14a2 2 0 002-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 012-2h4a2 2 0 012 2v1h4a2 2 0 012 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
      </symbol>
      <symbol id="icon-printer2" viewBox="0 0 20 20">
        <path d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z" />
      </symbol>
      <symbol id="icon-pylon" viewBox="0 0 20 20">
        <path d="M17.4 18H20v2H0v-2h2.6L8 0h4l5.4 18zm-3.2-4H5.8l-1.2 4h10.8l-1.2-4zm-2.4-8H8.2L7 10h6l-1.2-4z" />
      </symbol>
      <symbol id="icon-question1" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 00-8 0h2a2 2 0 114 0zm-3 8v2h2v-2H9z" />
      </symbol>
      <symbol id="icon-queue" viewBox="0 0 20 20">
        <path d="M0 2h20v4H0V2zm0 8h20v2H0v-2zm0 6h20v2H0v-2z" />
      </symbol>
      <symbol id="icon-radar" viewBox="0 0 20 20">
        <path d="M12 10a2 2 0 01-3.41 1.41A2 2 0 019.999 8V0h.03c5.506 0 9.97 4.464 9.97 9.97v.032V10h-8zm7.9 1.41C19.185 16.293 15.025 20 10 20 4.477 20 0 15.523 0 10 0 4.975 3.707.815 8.536.106L8.59.099v2.03c-3.768.696-6.584 3.956-6.584 7.874a8 8 0 0015.866 1.466l.008-.049h2.02zm-4.07 0c-.662 2.648-3.02 4.579-5.829 4.579A6 6 0 018.539 4.168l.041-.009v2.1a3.997 3.997 0 00-2.583 3.734 3.98 3.98 0 001.183 2.836 4 4 0 006.551-1.392l.009-.027h2.1z" />
      </symbol>
      <symbol id="icon-radarcopy2" viewBox="0 0 20 20">
        <path d="M12 10a2 2 0 01-3.41 1.41A2 2 0 019.999 8V0h.03c5.506 0 9.97 4.464 9.97 9.97v.032V10h-8zm7.9 1.41C19.185 16.293 15.025 20 10 20 4.477 20 0 15.523 0 10 0 4.975 3.707.815 8.536.106L8.59.099v2.03c-3.768.696-6.584 3.956-6.584 7.874a8 8 0 0015.866 1.466l.008-.049h2.02zm-4.07 0c-.662 2.648-3.02 4.579-5.829 4.579A6 6 0 018.539 4.168l.041-.009v2.1a3.997 3.997 0 00-2.583 3.734 3.98 3.98 0 001.183 2.836 4 4 0 006.551-1.392l.009-.027h2.1z" />
      </symbol>
      <symbol id="icon-radio" viewBox="0 0 20 20">
        <path d="M20 9v9a2 2 0 01-2 2H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h13.8L.74 1.97 1.26.03 20 5.06V9zm-5 9a3 3 0 100-6 3 3 0 100 6zM2 8v2h16V8H2zm1.5 10a1.5 1.5 0 000-3 1.5 1.5 0 000 3zm5 0a1.5 1.5 0 000-3 1.5 1.5 0 000 3zm6.5-1a2 2 0 110-4 2 2 0 110 4z" />
      </symbol>
      <symbol id="icon-refresh1" viewBox="0 0 20 20">
        <path d="M10 3v2h-.009a5 5 0 00-3.531 8.54l-1.41 1.41A7 7 0 019.999 3H10zm4.95 2.05A7 7 0 0110.001 17H10v-2h.009a5 5 0 003.531-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z" />
      </symbol>
      <symbol id="icon-reload" viewBox="0 0 20 20">
        <path d="M14.66 15.66A8 8 0 1117 9.999h-2v-.005a6 6 0 10-1.76 4.245l1.42 1.42zM12 10h8l-4 4-4-4z" />
      </symbol>
      <symbol id="icon-reply1" viewBox="0 0 20 20">
        <path d="M15 17v-2.99V14a4 4 0 00-4-4H8v5L2 9l6-6v5h3a6 6 0 016 6v3h-2z" />
      </symbol>
      <symbol id="icon-reply-all" viewBox="0 0 20 20">
        <path d="M18 17v-2.99V14a4 4 0 00-4-4h-3v5L5 9l6-6v5h3a6 6 0 016 6v3h-2zM6 6V3L0 9l6 6v-3L3 9l3-3z" />
      </symbol>
      <symbol id="icon-repost" viewBox="0 0 20 20">
        <path d="M5 4a2 2 0 00-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 01-2 2H6l2-2h7V8z" />
      </symbol>
      <symbol id="icon-save-disk" viewBox="0 0 20 20">
        <path d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z" />
      </symbol>
      <symbol id="icon-screen-full" viewBox="0 0 20 20">
        <path d="M2.8 15.8L0 13v7h7l-2.8-2.8 4.34-4.32-1.42-1.42L2.8 15.8zM17.2 4.2L20 7V0h-7l2.8 2.8-4.34 4.32 1.42 1.42L17.2 4.2zm-1.4 13L13 20h7v-7l-2.8 2.8-4.32-4.34-1.42 1.42 4.33 4.33zM4.2 2.8L7 0H0v7l2.8-2.8 4.32 4.34 1.42-1.42L4.2 2.8z" />
      </symbol>
      <symbol id="icon-search2" viewBox="0 0 20 20">
        <path d="M12.9 14.32a7.947 7.947 0 01-4.908 1.682 8 8 0 116.305-3.075l.013-.018 5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 100 12z" />
      </symbol>
      <symbol id="icon-send" viewBox="0 0 20 20">
        <path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z" />
      </symbol>
      <symbol id="icon-servers" viewBox="0 0 20 20">
        <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm0 7c0-1.1.9-2 2-2h16a2 2 0 012 2v2a2 2 0 01-2 2H2a2 2 0 01-2-2V9zm0 7c0-1.1.9-2 2-2h16a2 2 0 012 2v2a2 2 0 01-2 2H2a2 2 0 01-2-2v-2zM12 2v2h2V2h-2zm4 0v2h2V2h-2zm-4 7v2h2V9h-2zm4 0v2h2V9h-2zm-4 7v2h2v-2h-2zm4 0v2h2v-2h-2z" />
      </symbol>
      <symbol id="icon-share1" viewBox="0 0 20 20">
        <path d="M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8zm2 0v8h8v-8h-2V8H8v2H6zm3-6.17V16h2V3.83l3.07 3.07 1.42-1.41L10 0 4.5 5.5l1.42 1.4L9 3.84z" />
      </symbol>
      <symbol id="icon-share-01" viewBox="0 0 20 20">
        <path d="M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8zm2 0v8h8v-8h-2V8H8v2H6zm3-6.17V16h2V3.83l3.07 3.07 1.42-1.41L10 0 4.5 5.5l1.42 1.4L9 3.84z" />
      </symbol>
      <symbol id="icon-share-alt" viewBox="0 0 20 20">
        <path d="M5.08 12.16A2.99 2.99 0 010 10.022v-.023V10a3 3 0 015.081-2.159L5.08 7.84l8.94-4.47a3 3 0 11.899 1.789l.001.001-8.94 4.47a3.022 3.022 0 01-.001.755l.002-.015 8.94 4.47a2.99 2.99 0 015.08 2.138v.023V17a3 3 0 11-5.979-.384l-.001.014-8.94-4.47z" />
      </symbol>
      <symbol id="icon-shield2" viewBox="0 0 20 20">
        <path d="M19 11a7.505 7.505 0 01-3.47 5.922l-.03.018L10 20l-5.5-3.06c-2.009-1.276-3.358-3.437-3.499-5.92L1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
      </symbol>
      <symbol id="icon-shopping-cart" viewBox="0 0 20 20">
        <path d="M4 2h16l-3 9H4a1 1 0 000 2h13v2H4a3 3 0 110-6h.33L3 5 2 2H0V0h3a1 1 0 011 1v1zm1 18a2 2 0 110-4 2 2 0 110 4zm10 0a2 2 0 110-4 2 2 0 110 4z" />
      </symbol>
      <symbol id="icon-show-sidebar" viewBox="0 0 20 20">
        <path d="M7 3H2v14h5V3zm2 0v14h9V3H9zM0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm3 1h3v2H3V4zm0 3h3v2H3V7zm0 3h3v2H3v-2z" />
      </symbol>
      <symbol id="icon-shuffle1" viewBox="0 0 20 20">
        <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
      </symbol>
      <symbol id="icon-stand-by" viewBox="0 0 20 20">
        <path d="M4.16 4.16l1.42 1.42A6.99 6.99 0 009.982 18h.019H10a7 7 0 004.432-12.41l-.012-.01 1.42-1.42a9 9 0 01-5.845 15.844A9 9 0 014.138 4.17l.012-.01zM9 0h2v8H9V0z" />
      </symbol>
      <symbol id="icon-star-full1" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </symbol>
      <symbol id="icon-station" viewBox="0 0 20 20">
        <path d="M9 11.73a2 2 0 112.009-.005L11 11.73V20H9v-8.27zm5.24 2.51l-1.41-1.41A3.99 3.99 0 0010.028 6h-.029H10h-.003a4 4 0 00-2.827 6.83l-1.41 1.41a6 6 0 118.49 0zm2.83 2.83l-1.41-1.41a8 8 0 10-11.31 0l-1.42 1.41A9.97 9.97 0 010 9.998c0-5.523 4.477-10 10-10s10 4.477 10 10a9.97 9.97 0 01-2.93 7.072z" />
      </symbol>
      <symbol id="icon-step-backward" viewBox="0 0 20 20">
        <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
      </symbol>
      <symbol id="icon-step-forward" viewBox="0 0 20 20">
        <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
      </symbol>
      <symbol id="icon-stethoscope" viewBox="0 0 20 20">
        <path d="M17 10.27V4.99a1 1 0 00-2 0V15a5 5 0 01-10 0v-1.08c-2.856-.496-5-2.956-5-5.916V2C0 .9.9 0 2 0h1a1 1 0 010 2H2v6a4 4 0 008 0V2H9a1 1 0 010-2h1a2 2 0 012 2v6.004c0 2.96-2.144 5.42-4.964 5.911L7 13.92V15a3 3 0 106 0V5a3 3 0 116 0v5.27a2 2 0 11-2.009.005L17 10.27z" />
      </symbol>
      <symbol id="icon-store-front" viewBox="0 0 20 20">
        <path d="M18 9.87V20H2V9.87a4.231 4.231 0 003.023-.391l-.022.011V14h10V9.5c.576.31 1.261.492 1.988.492.359 0 .708-.045 1.042-.128l-.029.006zM3 0h4l-.67 6.03A3.434 3.434 0 013.004 9H3C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56l-.062.001a2.38 2.38 0 01-2.357-2.713l-.001.013.7-6.3zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.421 3.421 0 01-3.328-2.952l-.002-.018L13 0z" />
      </symbol>
      <symbol id="icon-stroke-width" viewBox="0 0 20 20">
        <path d="M0 0h20v5H0V0zm0 7h20v4H0V7zm0 6h20v3H0v-3zm0 5h20v2H0v-2z" />
      </symbol>
      <symbol id="icon-subdirectory-left" viewBox="0 0 20 20">
        <path d="M18 12v1H8v5l-6-6 6-6v5h8V2h2z" />
      </symbol>
      <symbol id="icon-subdirectory-right" viewBox="0 0 20 20">
        <path d="M3.5 13H12v5l6-6-6-6v5H4V2H2v11z" />
      </symbol>
      <symbol id="icon-swap" viewBox="0 0 20 20">
        <path d="M9 6a4 4 0 018 0v8h3l-4 4-4-4h3V6a2 2 0 10-4 0v8a4 4 0 01-8 0V6H0l4-4 4 4H5v8a2 2 0 104 0V6z" />
      </symbol>
      <symbol id="icon-tablet2" viewBox="0 0 20 20">
        <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2 0v14h12V2H4zm6 17a1 1 0 000-2 1 1 0 000 2z" />
      </symbol>
      <symbol id="icon-tag" viewBox="0 0 20 20">
        <path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 000-3 1.5 1.5 0 000 3z" />
      </symbol>
      <symbol id="icon-target2" viewBox="0 0 20 20">
        <path d="M17.94 11H13V9h4.94c-.469-3.628-3.311-6.471-6.9-6.936L11 2.06V7H9V2.06c-3.628.469-6.471 3.311-6.936 6.9L2.06 9H7v2H2.06c.469 3.628 3.311 6.471 6.9 6.936l.04.004V13h2v4.94c3.628-.469 6.471-3.311 6.936-6.9l.004-.04zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
      </symbol>
      <symbol id="icon-text-box" viewBox="0 0 20 20">
        <path d="M0 0h6v6H0V0zm2 2v2h2V2H2zm12-2h6v6h-6V0zm2 2v2h2V2h-2zm-2 12h6v6h-6v-6zm2 2v2h2v-2h-2zM0 14h6v6H0v-6zm2 2v2h2v-2H2zM6 2h8v2H6V2zm0 14h8v2H6v-2zM16 6h2v8h-2V6zM2 6h2v8H2V6zm5 1h6v2H7V7zm2 2h2v4H9V9z" />
      </symbol>
      <symbol id="icon-text-decoration" viewBox="0 0 20 20">
        <path d="M12 5h-2v12H8V3h8v2h-2v12h-2V5zM8 3a4 4 0 000 8V3z" />
      </symbol>
      <symbol id="icon-thermometer" viewBox="0 0 20 20">
        <path d="M9 11.17V7h2v4.17c1.175.424 2 1.53 2 2.828a3 3 0 11-4.021-2.822L9 11.169zm-1-.63a4.004 4.004 0 00-2 3.464 4 4 0 106.019-3.454L12 10.54V4a2 2 0 10-4 0v6.53zM6 9.53V4a4 4 0 018 0v5.53A5.99 5.99 0 0110.024 20h-.025H10A6 6 0 015.994 9.535L6 9.53z" />
      </symbol>
      <symbol id="icon-thumbs-down" viewBox="0 0 20 20">
        <path d="M11 20a2 2 0 01-2-2v-6H2a2 2 0 01-2-2V8l2.3-6.12A3.12 3.12 0 014.992 0H13a2 2 0 012 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
      </symbol>
      <symbol id="icon-thumbs-up" viewBox="0 0 20 20">
        <path d="M11 0h1v3l3 7v8a2 2 0 01-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 012-2h7V2a2 2 0 012-2zm6 10h3v10h-3V10z" />
      </symbol>
      <symbol id="icon-ticket1" viewBox="0 0 20 20">
        <path d="M20 12v5H0v-5a2 2 0 100-4V3h20v5a2 2 0 100 4zM3 5v10h14V5H3zm7 7.08l-2.92 2.04L8.1 10.7 5.27 8.56l3.56-.08L10 5.12l1.17 3.36 3.56.08-2.84 2.15 1.03 3.4L10 12.09z" />
      </symbol>
      <symbol id="icon-time" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 000-16 8 8 0 000 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z" />
      </symbol>
      <symbol id="icon-timer" viewBox="0 0 20 20">
        <path d="M16.32 7.1a8 8 0 11-7.36-3.036L9 4.06V2h2v2.06c1.46.18 2.8.76 3.9 1.62l1.46-1.46 1.42 1.42-1.46 1.45zM10 18a6 6 0 100-12 6 6 0 100 12zM7 0h6v2H7V0zm5.12 8.46l1.42 1.42L10 13.4 8.59 12l3.53-3.54z" />
      </symbol>
      <symbol id="icon-toolscopy" viewBox="0 0 20 20">
        <path d="M10 0s8 7.58 8 12a8 8 0 01-16 0c0-1.5.91-3.35 2.12-5.15A3.007 3.007 0 007 9.01a3 3 0 003-3v-.011V6 0zM8 0a3 3 0 100 6V0z" />
      </symbol>
      <symbol id="icon-translate" viewBox="0 0 20 20">
        <path d="M7.41 9l2.24 2.24-.83 2L6 10.4l-3.3 3.3-1.4-1.42L4.58 9l-.88-.88c-.53-.53-1-1.3-1.3-2.12h2.2c.15.28.33.53.51.7l.89.9.88-.88C7.48 6.1 8 4.84 8 4H0V2h5V0h2v2h5v2h-2c0 1.37-.74 3.15-1.7 4.12L7.4 9zm3.84 8L10 20H8l5-12h2l5 12h-2l-1.25-3h-5.5zm.83-2h3.84L14 10.4 12.08 15z" />
      </symbol>
      <symbol id="icon-trash" viewBox="0 0 20 20">
        <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
      </symbol>
      <symbol id="icon-travel" viewBox="0 0 20 20">
        <path d="M14 5h2v14H4V5h2V4a2 2 0 012-2h4a2 2 0 012 2v1zm3 0h1a2 2 0 012 2v10a2 2 0 01-2 2h-1V5zM3 5v14H2a2 2 0 01-2-2V7c0-1.1.9-2 2-2h1zm5-1v1h4V4H8z" />
      </symbol>
      <symbol id="icon-travel-bus" viewBox="0 0 20 20">
        <path d="M13 18H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a2 2 0 01-2-2V2c0-1.1.9-2 2-2h12a2 2 0 012 2v14a2 2 0 01-2 2v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1zM4 5v6h5V5H4zm7 0v6h5V5h-5zM5 2v1h10V2H5zm.5 14a1.5 1.5 0 000-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 000-3 1.5 1.5 0 000 3z" />
      </symbol>
      <symbol id="icon-travel-car" viewBox="0 0 20 20">
        <path d="M2 14v-3H1a1 1 0 010-2h1l4-7h8l4 7h1a1 1 0 010 2h-1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-3zm13.86-5L13 4H7L4.14 9h11.72zM5.5 14a1.5 1.5 0 000-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 000-3 1.5 1.5 0 000 3z" />
      </symbol>
      <symbol id="icon-travel-case" viewBox="0 0 20 20">
        <path d="M14 5h2v14H4V5h2V4a2 2 0 012-2h4a2 2 0 012 2v1zm3 0h1a2 2 0 012 2v10a2 2 0 01-2 2h-1V5zM3 5v14H2a2 2 0 01-2-2V7c0-1.1.9-2 2-2h1zm5-1v1h4V4H8z" />
      </symbol>
      <symbol id="icon-travel-taxi-cab" viewBox="0 0 20 20">
        <path d="M12 3h2l4 7h1a1 1 0 010 2h-1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-6H1a1 1 0 010-2h1l4-7h2V1h4v2zm3.86 7L13 5H7l-2.86 5h11.72zM5.5 15a1.5 1.5 0 000-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 000-3 1.5 1.5 0 000 3z" />
      </symbol>
      <symbol id="icon-travel-train" viewBox="0 0 20 20">
        <path d="M12 18H8l-2 2H3l2-2a2 2 0 01-2-2V2c0-1.1.9-2 2-2h10a2 2 0 012 2v14a2 2 0 01-2 2l2 2h-3l-2-2zM5 5v6h10V5H5zm1.5 11a1.5 1.5 0 000-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 000-3 1.5 1.5 0 000 3zM8 2v1h4V2H8z" />
      </symbol>
      <symbol id="icon-travel-walk" viewBox="0 0 20 20">
        <path d="M11 7l1.44 2.16c.31.47 1.01.84 1.57.84H17V8h-3l-1.44-2.16a5.99 5.99 0 00-1.382-1.388l-.018-.012-1.32-.88a1.713 1.713 0 00-1.709-.035l.009-.004L4 6.001v5h2v-4l2-1-3 14h2l2.35-7.65 1.65 1.65v6h2v-8l-2.7-2.7.7-2.3zm1-3a2 2 0 100-4 2 2 0 100 4z" />
      </symbol>
      <symbol id="icon-trophy2" viewBox="0 0 20 20">
        <path d="M15 9a3 3 0 003-3h2v.001a5 5 0 01-5 5L14.895 11h.005a5.014 5.014 0 01-3.867 3.894L11 14.9V17l5 2v1H4v-1l5-2v-2.1a5.014 5.014 0 01-3.894-3.867L5.1 11H5a5 5 0 01-5-5h2a3 3 0 003 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z" />
      </symbol>
      <symbol id="icon-tuning" viewBox="0 0 20 20">
        <path d="M17 16v4h-2v-4h-2v-3h6v3h-2zM1 9h6v3H1V9zm6-4h6v3H7V5zM3 0h2v8H3V0zm12 0h2v12h-2V0zM9 0h2v4H9V0zM3 12h2v8H3v-8zm6-4h2v12H9V8z" />
      </symbol>
      <symbol id="icon-upload4" viewBox="0 0 20 20">
        <path d="M13 10v6H7v-6H2l8-8 8 8h-5zM0 18h20v2H0v-2z" />
      </symbol>
      <symbol id="icon-usb" viewBox="0 0 20 20">
        <path d="M15 8v2h-4V4h2l-3-4-3 4h2v8H5V9.73a2 2 0 10-2.009-.005L3 9.73V12a2 2 0 002 2h4v2.27a2 2 0 102.009.005L11 16.27V12h4a2 2 0 002-2V8h1V4h-4v4h1z" />
      </symbol>
      <symbol id="icon-user1" viewBox="0 0 20 20">
        <path d="M5 5a5 5 0 0110 0v2A5 5 0 015 7V5zM0 16.68C2.86 14.995 6.301 14 9.974 14h.027H10c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
      </symbol>
      <symbol id="icon-user-add" viewBox="0 0 20 20">
        <path d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 116 0v2a3 3 0 11-6 0V6zm11 9.14C17.713 13.795 14.962 13 12.025 13h-.026H12c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
      </symbol>
      <symbol id="icon-user-group" viewBox="0 0 20 20">
        <path d="M7 8a4 4 0 010-8 4 4 0 010 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09C2.713 9.406 4.809 9.007 6.997 9H7zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0h.034a4 4 0 11-1.392 7.751l.028.009c.832-1.017 1.336-2.329 1.336-3.76s-.504-2.743-1.344-3.771l.008.011C12.1.1 12.53 0 13 0z" />
      </symbol>
      <symbol id="icon-user-solid-circle" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM7 6v2a3 3 0 106 0V6a3 3 0 10-6 0zm-3.65 8.44c1.456 2.155 3.89 3.553 6.65 3.553s5.194-1.398 6.632-3.525l.018-.028c-1.951-.918-4.238-1.453-6.65-1.453s-4.699.536-6.748 1.495l.098-.041z" />
      </symbol>
      <symbol id="icon-user-solid-square" viewBox="0 0 20 20">
        <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm7 4v2a3 3 0 106 0V6a3 3 0 10-6 0zm11 9.14C15.713 13.795 12.962 13 10.025 13h-.026H10c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
      </symbol>
      <symbol id="icon-vector" viewBox="0 0 20 20">
        <path d="M12 4h4.27a2 2 0 11.005 2.009L16.27 6h-2.14c2.698 1.415 4.569 4.087 4.838 7.217l.002.033a2 2 0 11-2.008.045l.009-.005a7.016 7.016 0 00-4.92-5.987l-.05-.013V8h-4v-.71c-2.687.821-4.662 3.146-4.957 5.97l-.003.03a2.001 2.001 0 11-2.01-.034l.01-.005a9.014 9.014 0 014.771-7.226l.049-.024h-2.13a2 2 0 11-.005-2.009l.005.009h4.27v-1h4v1z" />
      </symbol>
      <symbol id="icon-video-camera1" viewBox="0 0 20 20">
        <path d="M16 7l4-4v14l-4-4v3a2 2 0 01-2 2H2a2 2 0 01-2-2V4c0-1.1.9-2 2-2h12a2 2 0 012 2v3zm-8 7a4 4 0 000-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 110 4z" />
      </symbol>
      <symbol id="icon-view-carousel" viewBox="0 0 20 20">
        <path d="M16 16v2H4v-2H0V4h4V2h12v2h4v12h-4zM14 5.5V4H6v12h8V5.5zm2 .5v8h2V6h-2zM4 6H2v8h2V6z" />
      </symbol>
      <symbol id="icon-view-column" viewBox="0 0 20 20">
        <path d="M12 4H8v12h4V4zm2 0v12h4V4h-4zM6 4H2v12h4V4zM0 2h20v16H0V2z" />
      </symbol>
      <symbol id="icon-view-hide" viewBox="0 0 20 20">
        <path d="M12.81 4.36l-1.77 1.78a4 4 0 00-4.894 4.928l-.007-.028-2.76 2.75c-1.32-1-2.42-2.3-3.18-3.79 1.86-3.591 5.548-6.003 9.799-6.003.996 0 1.96.132 2.878.38l-.077-.018zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79-1.859 3.594-5.549 6.007-9.802 6.007a11.01 11.01 0 01-2.895-.385l.077.018 1.77-1.78a4 4 0 004.894-4.928l.007.028 2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z" />
      </symbol>
      <symbol id="icon-view-list" viewBox="0 0 20 20">
        <path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z" />
      </symbol>
      <symbol id="icon-view-show" viewBox="0 0 20 20">
        <path d="M.2 10C2.06 6.408 5.748 3.996 10 3.996s7.94 2.412 9.771 5.943L19.8 10c-1.86 3.592-5.548 6.004-9.8 6.004S2.06 13.592.229 10.061L.2 10zm9.8 4a4 4 0 000-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 110 4z" />
      </symbol>
      <symbol id="icon-view-tile" viewBox="0 0 20 20">
        <path d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z" />
      </symbol>
      <symbol id="icon-volume-down" viewBox="0 0 20 20">
        <path d="M7 7H3v6h4l5 5V2L7 7zm8.54 6.54l-1.42-1.42c.542-.543.877-1.292.877-2.12s-.335-1.577-.877-2.12l1.42-1.42c.912.903 1.477 2.156 1.477 3.54s-.565 2.637-1.477 3.54z" />
      </symbol>
      <symbol id="icon-volume-mute1" viewBox="0 0 20 20">
        <path d="M9 7H5v6h4l5 5V2L9 7z" />
      </symbol>
      <symbol id="icon-volume-off" viewBox="0 0 20 20">
        <path d="M15 8.59l-2.12-2.13-1.42 1.42L13.6 10l-2.13 2.12 1.42 1.42L15 11.4l2.12 2.13 1.42-1.42L16.4 10l2.13-2.12-1.42-1.42L15 8.6zM4 7H0v6h4l5 5V2L4 7z" />
      </symbol>
      <symbol id="icon-volume-up" viewBox="0 0 20 20">
        <path d="M5 7H1v6h4l5 5V2L5 7zm11.36 9.36l-1.41-1.41c1.272-1.265 2.059-3.015 2.059-4.95s-.787-3.685-2.059-4.95l1.41-1.41c1.634 1.625 2.645 3.874 2.645 6.36s-1.011 4.735-2.644 6.36zm-2.82-2.82l-1.42-1.42c.542-.543.877-1.292.877-2.12s-.335-1.577-.877-2.12l1.42-1.42c.912.903 1.477 2.156 1.477 3.54s-.565 2.637-1.477 3.54z" />
      </symbol>
      <symbol id="icon-wallet1" viewBox="0 0 20 20">
        <path d="M0 4c0-1.1.9-2 2-2h15a1 1 0 011 1v1H2v1h17a1 1 0 011 1v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm16.5 9a1.5 1.5 0 000-3 1.5 1.5 0 000 3z" />
      </symbol>
      <symbol id="icon-watch" viewBox="0 0 20 20">
        <path d="M11 9h2v2H9V7h2v2zm-5.82 6.08A6.962 6.962 0 012.987 10c0-2 .841-3.804 2.19-5.077l.003-.003L6 0h8l.82 4.92A6.962 6.962 0 0117.013 10c0 2-.841 3.804-2.19 5.077l-.003.003L14 20H6l-.82-4.92zM10 15a5 5 0 000-10 5 5 0 000 10z" />
      </symbol>
      <symbol id="icon-window" viewBox="0 0 20 20">
        <path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2z" />
      </symbol>
      <symbol id="icon-window-new" viewBox="0 0 20 20">
        <path d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zM0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2z" />
      </symbol>
      <symbol id="icon-window-open" viewBox="0 0 20 20">
        <path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2 2v12h16V5H2zm8 3l4 5H6l4-5z" />
      </symbol>
      <symbol id="icon-wrench1" viewBox="0 0 20 20">
        <path d="M6.47 9.8A5 5 0 01.213 3.187l-.012.033 3.95 3.95 2.82-2.83L3.031.41a5 5 0 016.387 6.711l.013-.031 10 10-2.83 2.83L6.471 9.8z" />
      </symbol>
      <symbol id="icon-yin-yang" viewBox="0 0 20 20">
        <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 000 16 4 4 0 010-8 4 4 0 000-8zm0 13a1 1 0 000-2 1 1 0 000 2zm0-8a1 1 0 010-2 1 1 0 010 2z" />
      </symbol>
      <symbol id="icon-zoom-in1" viewBox="0 0 20 20">
        <path d="M12.9 14.32a7.947 7.947 0 01-4.908 1.682 8 8 0 116.305-3.075l.013-.018 5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 100 12zM7 7V5h2v2h2v2H9v2H7V9H5V7h2z" />
      </symbol>
      <symbol id="icon-zoom-out1" viewBox="0 0 20 20">
        <path d="M12.9 14.32a7.947 7.947 0 01-4.908 1.682 8 8 0 116.305-3.075l.013-.018 5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 108 2a6 6 0 100 12zM5 7h6v2H5V7z" />
      </symbol>
    </defs>
  </svg>
    `,
  })

  return svgSrc
}
