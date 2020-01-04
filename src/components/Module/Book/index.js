import React from 'react';
import { BackgroundCard } from '../../Base';

const FORM = [
  {
    type: 'input',
    id: 'name',
    label: 'Full Name'
  },
  {
    type: 'email',
    id: 'email',
    label: 'Email Address'
  }
]

const Book = ({ title, image }) => (
  <div className="book">
    <div className="book__form">
      <form action="#" className='form'>
        {FORM.map(({className, label, id, type}, i) => (
          <div className="form__group" key={i}>
            <input type={type} className='form__input' placeholder={label} id={id} required />
            <label for={id} className='form__label'>{label}</label>
          </div>
        ))}
      </form>
    </div>
  </div>
)

export default Book
