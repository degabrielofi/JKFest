import React from "react";
import { Icon } from "./style.jsx";

const IconWhatsApp = () => {
  return (
    <Icon>
      <div className="top-to-btm">
        <a
          href="https://api.whatsapp.com/send?phone=558899086157&text=Ol%C3%A1,%20entrei%20em%20contato%20pelo%20site,%20gostaria%20de%20um%20or%C3%A7amento!"
          className="icon-position icon-style"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </Icon>
  );
};

export default IconWhatsApp;
