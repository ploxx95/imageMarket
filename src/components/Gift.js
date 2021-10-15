import React from "react";
import PropTypes from "prop-types";

function Gift({ title, url }) {
  return (
    <div>
      <img alt={title} src={url} />
    </div>
  );
}

export default Gift;

Gift.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
