import "./connector.component.css";

export const ConnectorSvg = () => {
  return (
    <svg
      className="svg-traffic-links w-full h-full rotate-90 lg:rotate-0"
      viewBox="0 0 586 266"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Visible paths */}
      <g className="visible-paths">
        <path
          id="top-path"
          d="M584 129H70.7782C61.9417 129 54.7783 121.837 54.7783 113V66C54.7783 57.1634 47.6148 50 38.7783 50H2"
          stroke="#E4E7EB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          id="bottom-path"
          d="M584 129H70.7782C61.9417 129 54.7783 136.163 54.7783 145V192C54.7783 200.837 47.6148 208 38.7783 208H2"
          stroke="#E4E7EB"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* Animated group */}
      <g className="animated-group">
        {/* Bottom mask and animation */}
        <g className="mask-bottom">
          <mask
            id="mask-bottom"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="127"
            width="586"
            height="83"
          >
            <use
              href="#bottom-path"
              stroke="#E4E7EB"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </mask>
          <g mask="url(#mask-bottom)">
            <circle
              className="circle-bottom"
              r="18"
              fill="#8247ff"
              fillOpacity="0.79"
            />
          </g>
        </g>

        {/* Top mask and animation */}
        <g className="mask-top">
          <mask
            id="mask-top"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="48"
            width="586"
            height="83"
          >
            <use
              href="#top-path"
              stroke="#E4E7EB"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </mask>
          <g mask="url(#mask-top)">
            <circle
              className="circle-top"
              r="18"
              fill="#8247ff"
              fillOpacity="0.79"
            />
          </g>
        </g>
      </g>

      {/* Logo */}
      <g className="logo">
        <svg
          x="214"
          y="50"
          width="158"
          height="158"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="158" height="158" rx="26" fill="#1F2933" />
        </svg>
        <path fillRule="evenodd" clipRule="evenodd" d="" fill="white" />
      </g>
    </svg>
  );
};
