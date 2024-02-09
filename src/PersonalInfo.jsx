import React from 'react'
import FormWrapper from './FormWrapper'

const PersonalInfo = ({ name, email, phone, updateFields, error }) => {
    return (
        <FormWrapper title='Personal info' instruction='Please Provide your name, email address, and phone number.'>
            <div className='multi-form__personal-info'>
                <div className={`multi-form__input-container ${(error && name.length === 0) && 'multi-form__input-container--required'}`}>
                    <label className='multi-form__input-label'>Name</label>
                    <input type='text' placeholder='e.g. Majd' className='multi-form__input-field' autoFocus value={name} onChange={(e) => updateFields({ name: e.target.value })} />
                </div>
                <div className={`multi-form__input-container ${(error && email.length === 0) && 'multi-form__input-container--required'}`}>
                    <label className='multi-form__input-label'>Email Address</label>
                    <input type='email' placeholder='e.g. majed.eddin.wahoub@gmail.com' className='multi-form__input-field' value={email} onChange={(e) => updateFields({ email: e.target.value })} />
                </div>
                <div className={`multi-form__input-container ${(error && phone.length === 0) && 'multi-form__input-container--required'}`}>
                    <label className='multi-form__input-label'>Phone Number</label>
                    <input type='number' placeholder='e.g. +1 234 567 890' className='multi-form__input-field' value={phone} onChange={(e) => updateFields({ phone: e.target.value })} />
                </div>
            </div>
        </FormWrapper>
    )
}

export default PersonalInfo
