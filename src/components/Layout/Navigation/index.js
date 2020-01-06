import React from 'react';

const Navigation = ({items}) => (
  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
    <label for="navi-toggle" className="navigation__button">MENU</label>
    <div className="navigation__background">&nbsp;</div>
    <nav className="navigation__nav">
      <ul className="navigation__list">
        {items.map(({ label, value, key })=> (
          <li className="navigation__item" key={key}>
            <a href={value} className="navigation__link">{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
)
export default Navigation
