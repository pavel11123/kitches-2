function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top d-fl-column">
        <div className="footer__info d-fl-wrap">
          <h2>Заказать кухню от</h2>
          <div className="footer__logo">
            <img src="/img/icon/footer-logo.svg" alt="logo" />
          </div>
        </div>
        <div className="form__main">
          <form name="form" method="POST">
            <div className="footer__form d-fl-wrap">
              <div className="d-fl-column">
                <div className="form__input">
                  <input
                    type="text"
                    name="form-name"
                    id="form-name"
                    className="input"
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label className="input__label" htmlFor="form-name">
                    Ваше имя
                  </label>
                </div>
                <div className="form__input">
                  <input
                    type="text"
                    name="form-phone"
                    id="form-phone"
                    className="input"
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label className="input__label" htmlFor="form-phone">
                    Ваш телефон
                  </label>
                </div>
              </div>
              <input
                type="submit"
                id="form-button"
                value="Получить консультацию"
                className="form__submit"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="d-fl-wrap">
          <div className="footer-left d-fl-column">
            <span>Мы в социальных сетях</span>
            <ul className="society d-flex">
              <a href="/#">
                <li>
                  <img src="/img/icon/youtube.svg" alt="youtube" />
                </li>
              </a>
              <a href="/#">
                <li>
                  <img src="/img/icon/vk.svg" alt="youtube" />
                </li>
              </a>
              <a href="/#">
                <li>
                  <img src="/img/icon/tt.svg" alt="youtube" />
                </li>
              </a>
            </ul>
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
      </div>
    </footer>
  );
}

export default Footer;
