import React from 'react'

const FooterNavigation = ({items}) => (
  <div className="footer__navigation">
    <ul className="footer__list">
      {items.map(({label, value, key}) => (
        <li className="footer__item" key={key}>
          <a className="footer__link" href={value}>{label}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default FooterNavigation
