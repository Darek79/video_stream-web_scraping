export default ({clName, link, text}) => (
  <div className={clName}>
    <p>{text}</p>
    <a href={link} target="_blank">
      {link}
    </a>
  </div>
);
