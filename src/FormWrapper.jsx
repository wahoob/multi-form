import React from 'react'

const FormWrapper = ({ title, instruction, children }) => {
    return (
        <div className='multi-form__form-wrapper'>
            <div>
                <h1 className='multi-form__title'>{title}</h1>
                <p className='multi-form__instruction'>{instruction}</p>
            </div>
            {children}
        </div>
    )
}

export default FormWrapper
