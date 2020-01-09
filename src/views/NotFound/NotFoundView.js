import React from "react";
import { Link } from "react-router-dom";
import { i18N } from "../../utils/intl";
import "./index.scss";

const NotFoundView = () => {
  return (
    <div class="notFoundContainer">
      <h4>{i18N.t("notfound.header")}</h4>
      <Link to="/"> {i18N.t("notfound.go_back_to_home")} </Link>
    </div>
  );
};

export default NotFoundView;
