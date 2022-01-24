import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";

const Team = ({ imageFileName, href }) => {
  const imgPart = (
    <Image className="img-fluid d-block mx-auto" fileName={imageFileName} alt={imageFileName} />
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {imgPart}
      </a>
    );
  }

  return imgPart;
};

Team.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  href: PropTypes.string,
};

Team.defaultProps = {
  href: null,
};

export default Team;
