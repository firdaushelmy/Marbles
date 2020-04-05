import React from "react";
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';
function PanicSVG() {
  const StyledCircle = styled.circle`
  fill: ${props => props.theme.circleFill};
`;

  StyledCircle.defaultProps = {
    theme: {
      circleFill: "#F48157"
    }
  }

  const StyledCircle2 = styled.circle`
  fill: ${props => props.theme.circleFill2};
`;

  StyledCircle2.defaultProps = {
    theme: {
      circleFill2: "#F48157"
    }
  }

  return (
    <svg width="292" height="292" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="146" cy="146" r="146" fill="#D9D8DD" fill-opacity="0.8" />
      <g filter="url(#filter0_f)">
        <circle cx="146.4" cy="146.4" r="131.4" fill="#D9D8DD" />
      </g>
      <g filter="url(#filter1_d)">
        <circle cx="146.1" cy="146.1" r="124.1" fill="#F0EFF4" />
      </g>
      <circle cx="146.485" cy="146.485" r="105.485" fill="#D4D3D8" />
      <g filter="url(#filter2_f)">
        <StyledCircle2 cx="145.936" cy="145.936" r="94.9365" fill-opacity="0.3" />
      </g>
      <StyledCircle cx="145.662" cy="145.662" r="89.6622" />
      <circle cx="146.245" cy="146.245" r="67.245" fill="#EDEEF0" />
      <path d="M122.613 142.441H123.609C124.54 142.441 125.237 142.259 125.699 141.895C126.161 141.523 126.392 140.986 126.392 140.283C126.392 139.574 126.197 139.049 125.807 138.711C125.422 138.372 124.817 138.203 123.99 138.203H122.613V142.441ZM129.449 140.176C129.449 141.712 128.967 142.887 128.004 143.701C127.047 144.515 125.683 144.922 123.912 144.922H122.613V150H119.586V135.723H124.146C125.878 135.723 127.193 136.097 128.092 136.846C128.997 137.588 129.449 138.698 129.449 140.176ZM143.905 135.723V144.961C143.905 146.016 143.667 146.94 143.192 147.734C142.723 148.529 142.043 149.137 141.151 149.561C140.259 149.984 139.204 150.195 137.987 150.195C136.151 150.195 134.725 149.727 133.71 148.789C132.694 147.845 132.186 146.556 132.186 144.922V135.723H135.204V144.463C135.204 145.563 135.425 146.37 135.868 146.885C136.311 147.399 137.043 147.656 138.065 147.656C139.055 147.656 139.771 147.399 140.214 146.885C140.663 146.364 140.887 145.55 140.887 144.443V135.723H143.905ZM155.968 146.035C155.968 147.324 155.503 148.34 154.572 149.082C153.647 149.824 152.358 150.195 150.704 150.195C149.181 150.195 147.833 149.909 146.661 149.336V146.523C147.625 146.953 148.439 147.256 149.103 147.432C149.773 147.607 150.385 147.695 150.939 147.695C151.603 147.695 152.111 147.568 152.462 147.314C152.82 147.061 152.999 146.683 152.999 146.182C152.999 145.902 152.921 145.654 152.765 145.439C152.609 145.218 152.378 145.007 152.072 144.805C151.772 144.603 151.157 144.281 150.226 143.838C149.354 143.428 148.699 143.034 148.263 142.656C147.827 142.279 147.479 141.839 147.218 141.338C146.958 140.837 146.828 140.251 146.828 139.58C146.828 138.317 147.254 137.324 148.107 136.602C148.966 135.879 150.151 135.518 151.661 135.518C152.404 135.518 153.11 135.605 153.781 135.781C154.458 135.957 155.164 136.204 155.9 136.523L154.923 138.877C154.161 138.564 153.53 138.346 153.029 138.223C152.534 138.099 152.046 138.037 151.564 138.037C150.991 138.037 150.551 138.171 150.245 138.438C149.939 138.704 149.786 139.053 149.786 139.482C149.786 139.749 149.848 139.984 149.972 140.186C150.096 140.381 150.291 140.573 150.558 140.762C150.831 140.944 151.473 141.276 152.482 141.758C153.816 142.396 154.731 143.037 155.226 143.682C155.721 144.32 155.968 145.104 155.968 146.035ZM170.395 150H167.377V143.838H161.723V150H158.695V135.723H161.723V141.318H167.377V135.723H170.395V150Z" fill="#584646" fill-opacity="0.8" />
      <defs>
        <filter id="filter0_f" x="5" y="5" width="282.8" height="282.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur" />
        </filter>
        <filter id="filter1_d" x="12" y="15" width="268.2" height="268.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter2_f" x="44" y="44" width="203.873" height="203.873" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}

export default PanicSVG;
