import React from 'react';
import './footer.css';
import { Link } from 'gatsby';
import facebook from '../static/img/facebook.png'
const logo = 'https://images.ctfassets.net/uf4sk9fqckkz/2HdqAVJ8Maj42qt1PbFYze/9207cc73ee0d4a3c00344452fc796a7e/logo5.png';

const Footer = () => {
  return (
    <footer className="row">
      <div className="left">
        <img src={logo} />
      </div>

      <div className="center"></div>

      <div className="right">
        <div className="imagen-face">
          <a
            href="https://www.facebook.com/GyC.Corporation/"
            target="_blank"
            rel="noopener"
          >
            <img src={facebook} alt="Icon Facebook" />
          </a>
        </div>
        <p className="footer-links">
          <Link to="/jp/">ホーム</Link>|<Link to="/jp/empresa">会社概要</Link> |
          <Link to="/jp/contacto">お問い合わせ</Link>|
          <Link to="/jp/registro">登録</Link>
        </p>
        {/* <p className="footer-company-name">© {new Date().getFullYear()}</p> */}
      </div>
    </footer>
  )
};

export default Footer;