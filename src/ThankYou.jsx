import React from 'react'
import thankYou from './images/icon-thank-you.svg'

const ThankYou = () => {
    return (
        <div className='multi-form__thank-you'>
            <img src={thankYou} alt='thank you' />
            <h1 className='multi-form__thank-header'>Thank you</h1>
            <p className='multi-form__thank-text'>
                Thank you for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to mail us at
                <a className='multi-form__thank-text multi-form__thank-text--link' href='mailto:majed.eddin.wahoub@gmail.com'>majed.eddin.wahoub@gmail.com</a>
            </p>
        </div>
    )
}

export default ThankYou
