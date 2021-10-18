import PropTypes from "prop-types";

function Gift({ title, url }) {
  return (
    <div>
      <h1>{title}</h1>
      <img alt={title} src={url} />
    </div>
  );
}

export default Gift;

Gift.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
