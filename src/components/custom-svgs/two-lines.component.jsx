export const TwoLinesSVG = ({ color }) => {
  return (
    <svg
      className="svg-two-lines"
      width="45"
      height="50"
      viewBox="0 0 45 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 27C3.3557 18.4591 6.90298 10.3881 9 2"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M17.5 32C25.9926 27.1537 34.4984 22.3305 43 17.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
