// import React from "ract";

export default ({module, clName, fn, data}) => (
  <div data-index={data} onClick={fn} className={clName}>
    {module}
  </div>
);
