import React from "react";

//styles
import "../../assets/styles/containers/footer.scss";

function Footer() {
  return (
    <div className="container-footer">
      <p className="text-footer">Designed and created by Nataliia Kolomiiets</p>
      <div className="nav-footer">
        <a href="https://www.linkedin.com/in/nataliiakolomiiets/" class="icon"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/krayova5" class="icon"><i class="fab fa-github"></i></a>
        <a href="https://www.instagram.com/nataliakraiova/" class="icon"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  );
}

export default Footer;
