import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Banner from "components/Banner";
import { render } from "react-dom";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, subheader, jumpToAnchor } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  const extraInfoPart = (
    <div className="banner-bottom mt-5">
      <div className=" button-wrap">
        <Button variant="primary" className="button-reversed px-5 py-3 text-white mr-3">
          White Paper
        </Button>
        <Button variant="primary" className="px-5 py-3 text-white mr-3">
          Light Paper
        </Button>
        <Button variant="primary" className="px-5 py-3 text-white">
          Join our Community
        </Button>
      </div>
    </div>
  );

  return <Banner header={header} subheader={subheader} extraInfo={extraInfoPart} />;
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
