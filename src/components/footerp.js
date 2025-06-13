import React from "react"
import "./footer.css"
import { Link } from "gatsby"
import facebook from "../static/img/facebook.png"
const logo =
  "https://images.ctfassets.net/uf4sk9fqckkz/2HdqAVJ8Maj42qt1PbFYze/9207cc73ee0d4a3c00344452fc796a7e/logo5.png"

const Footer = () => {
  return (
    <footer className="row">
      <div className="left">
        <img src={logo} alt={logo} />
      </div>

      <div className="center"></div>

      <div className="right">
        <div className="imagen-face">
          <img src={facebook}  alt={facebook}/>
        </div>
        <p className="footer-links">
          <Link to="/pt/">INÍCIO</Link>|<Link to="/pt/empresa">SOBRE NÓS</Link>{" "}
          |<Link to="/pt/contacto">CONTATO</Link>|
          <Link to="/pt/registro">CADASTRO</Link>
        </p>
        {/* <p className="footer-company-name">© {new Date().getFullYear()}</p> */}
      </div>
    </footer>);
};

export default Footer
