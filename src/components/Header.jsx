import React from "react";

function Header() {
  return (
    <header className="header__main">
      <div className="d-fl-wrap">
        <div className="info-left d-flex">
          <div className="header__logo">
            <img src="/img/icon/logo.svg" alt="logo" />
          </div>
        </div>

        <div className="info-right">
          <div className="d-fl-wrap">
            <div className="info d-fl-wrap">
              <a href="/#" className="phone d-flex">
                +7 (902) 650-44-33
              </a>
              <span className="location d-flex">
                Волгоград, бульвар 30-летия Победы, 39Ак3
              </span>
            </div>
            <div className="info d-fl-wrap">
              <a href="/#" className="btn info__btn">
                Перезвоните мне
              </a>
              <a href="/#" className="btn info__btn">
                Как проехать?
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
