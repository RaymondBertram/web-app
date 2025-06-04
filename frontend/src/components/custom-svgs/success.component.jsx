import "./success.component.css";

export const SuccessIcon = () => {
  return (
    <svg
      className="icon-success"
      width="100%"
      height="98"
      viewBox="0 0 97 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle
        cx="48.5"
        cy="49"
        r="45"
        stroke="#CBD2D9"
        strokeWidth="5"
        fill="none"
      />
      {/* Animated Circle */}
      <circle
        cx="48.5"
        cy="49"
        r="45"
        stroke="#F5F7FA"
        strokeWidth="5"
        fill="none"
        strokeDasharray="282.6" /* Length of the full circumference */
        strokeDashoffset="0"
        className="animated-circle"
      />
      {/* Check mark */}
      <path
        className="check-mark"
        d="M70.219 37L44.063 63.156L42.0005 65.3123L27.8445 51.1563L25.6882 49.0001L30.0007 44.7813L32.0632 46.9376L42.0007 56.7813L63.8447 34.9373L66.0009 32.781L70.219 37Z"
        fill="#8247FF"
      />
    </svg>
  );
};
