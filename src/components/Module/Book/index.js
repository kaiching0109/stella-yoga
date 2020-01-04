import React from 'react';
import { BackgroundCard } from '../../Base';

const Book = ({ title, image }) => {
  function renderInputGroup () {
    return FORM.map(({className, label, id, type, children, required}, i) => {
      if(type === 'radio-group') {
        children = children.map(({className: childClassName, label, id, type, name}, i) => (
          <div className={`${className} u-margin-bottom-medium`}>
            <input type={type} className={`${childClassName}`}
              placeholder={label}
              id={id}
              name={name} />
            <label for={id} className={`form__radio-label`}>
              <span className="form__radio-button" />
              {label}
            </label>
          </div>
        ))
      } else {
        children = (
          <>
            <input type={type} className={className} placeholder={label} id={id} required />
            <label for={id} className='form__label'>{label}</label>
          </>
        )
      }
      return (
        <div className="form__group" key={i}>
          {children}
        </div>
      )
    })
  }

  return (
    <div className="book">
      <div className="book__form">
        <form action="#" className='form'>
          {renderInputGroup()}
        </form>
      </div>
    </div>
  )
}

const FORM = [
  {
    className: 'form__input',
    type: 'input',
    id: 'name',
    label: 'Full Name',
    required: true
  },
  {
    className: 'form__input',
    type: 'email',
    id: 'email',
    label: 'Email Address',
    required: true
  },
  {
    className: 'form__radio-group',
    type: 'radio-group',
    id: 'radio-group',
    label: 'Radio Group',
    children: [
      {
        className: 'form__radio-input',
        type: 'radio',
        id: 'radio1',
        label: 'Radio 1',
        name: 'size',
        required: false
      },
      {
        className: 'form__radio-input',
        type: 'radio',
        id: 'radio2',
        label: 'Radio 2',
        name: 'size',
        required: false
      },
    ]
  }
]

export default Book
