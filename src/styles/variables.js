import { css } from "styled-components"

const variables = css`
  :root {
    --blue: #0e2240;
    --dark-blue: #09182e;
    --blue-shadow: #030c19;
    --cyan: #3ee5df;
    --cyan-tint: rgba(0, 201, 194, 0.08);
    --purple: #DDA3FF;
    --purple-tint: rgba(221, 163, 255, 0.08);
    --white: #f0ebf2;
    --slate: #bdbabf;
    --gradient: linear-gradient(
      45deg,
      rgba(183, 59, 250, 1) 0%,
      rgba(0, 201, 194, 1) 100%
    );
    --gradient-alt: linear-gradient(
      45deg,
      rgba(0, 201, 194, 1) 0%,
      rgba(183, 59, 250, 1) 100%
    );

    --border-radius: 0.25em;
    --transition: 200ms;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    --font-sans: "Inter", "San Francisco", "SF Pro Text", -apple-system,
      system-ui, sans-serif;
  }
`

export default variables
