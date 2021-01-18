import "./spinner.scss";

export default ({
  w,
  h,
  svgClass,
  fill = "none",
  stroke = "#231f20",
  strokeWidth = "4",
  svgPath,
  divWrapper = "spinnerWrapper",
}) => (
  <div className={divWrapper} style={{width: w, height: h}}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={svgClass}
      viewBox="0 0 48.51 49.13"
    >
      <path
        className={svgPath}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M4.89 18.5a20.77 20.77 0 00-.89 6 20.41 20.41 0 0020.25 20.63 20.42 20.42 0 0020.26-20.57A20.41 20.41 0 0024.25 4a20 20 0 00-7.44 1.43"
      />
    </svg>
  </div>
);
