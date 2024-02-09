import React from 'react'
import FormWrapper from './FormWrapper'

const Summary = ({ plan, planType, planPrice, addons, goToChange }) => {
    const calculateTotal = () => {
        const servicesTotal = addons.reduce((accumulator, currentValue) => {
            const { price } = currentValue
            accumulator += price
            return accumulator
        }, 0)
        return planPrice + servicesTotal
    }
    return (
        <FormWrapper title='Finishing up' instruction='Double-check everything looks OK before confirming.'>
            <div className='multi-form__summary'>
                <div className='multi-form__summary-details'>
                    <div className='multi-form__summary-plan'>
                        <div>
                            <h3 className='multi-form__summary-header'>{plan} ({(planType === 'mo' ? 'monthly' : 'yearly')})</h3>
                            <p className='multi-form__summary-text multi-form__summary-text--link' onClick={() => goToChange()}>Change</p>
                        </div>
                        <h3 className='multi-form__summary-header'>${planPrice}/{planType}</h3>
                    </div>
                    {addons.map((addon, index) => {
                        return (
                            <div key={index} className='multi-form__summary-service'>
                                <p className='multi-form__summary-text'>{addon.title}</p>
                                <p className='multi-form__summary-text multi-form__summary-text--price'>+${addon.price}/{planType}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='multi-form__summary-total'>
                    <p className='multi-form__summary-text'>Total (per {(planType === 'mo' ? 'month' : 'year')})</p>
                    <h3 className='multi-form__summary-price'>+${calculateTotal()}/{planType}</h3>
                </div>
            </div>
        </FormWrapper>
    )
}

export default Summary
