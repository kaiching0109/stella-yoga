import React from 'react'
import FooterNavigation from './FooterNavigation'

const navItems = [
  {key: "company", label: "Company", value: "#"},
  {key: "contactus", label: "Contact us", value: "#"},
  {key: "carrers", label: "Carrers", value: "#"},
  {key: "policy", label: "Privacy policy", value: "#"},
  {key: "terms", label: "Terms", value: "#"}
]

const Footer = (props) => (
  <footer className="footer">
    <div className="footer__logo-box">
      <img className="footer__logo" src="/logo-2x.png" alt="Full logo"/>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <FooterNavigation
          items={navItems}
        />
      </div>
      <div className="col-1-of-2">
        <div className="footer__copyright">
          Built by <a href="#" className="footer__link">Kai Ching Suen</a> with
          partial credit to the design of <a href="#" className="footer__link">Jonas Schedtmann</a>.
          Copyright &copy;.
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
