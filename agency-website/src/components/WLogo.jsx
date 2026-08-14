/**
 * Stylised cursive "W" logo mark represented as a clean vector SVG.
 * Adapts its color automatically to the theme using "currentColor"
 * and has zero square backgrounds or boundaries.
 */
function WLogo({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} text-orange-500`}
    >
      <path
        d="M18 35 C28 15, 25 82, 42 82 C55 82, 50 42, 60 42 C70 42, 68 82, 82 82 C90 82, 92 50, 95 40"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WLogo;
