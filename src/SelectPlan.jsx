import React, { useState } from 'react'
import FormWrapper from './FormWrapper'
import arcade from './images/icon-arcade.svg'
import advanced from './images/icon-advanced.svg'
import pro from './images/icon-pro.svg'

const plans = [
    { image: arcade, planName: 'arcade', price: 9 },
    { image: advanced, planName: 'advanced', price: 12 },
    { image: pro, planName: 'pro', price: 15 }
]

const SelectPlan = ({ plan, planType, updateFields, planPrice }) => {
    const [isChecked, setIsChecked] = useState(() => planType === 'yr' ? true : false)
    const handleChange = (e) => {
        if (e.target.checked) {
            updateFields({ planType: 'yr', planPrice: planPrice * 10 })
            setIsChecked(true)
        } else {
            updateFields({ planType: 'mo', planPrice: planPrice / 10 })
            setIsChecked(false)
        }
    }
    return (
        <FormWrapper title='Select your plan' instruction='You have the option of monthly or yearly billing.'>
            <div className='multi-form__select-plan'>
                <div className='multi-form__plans'>
                    {plans.map(item => <Plan key={item.planName} {...item} type={planType} currentPlanName={plan} updateFields={updateFields} />)}
                </div>
                <div className='multi-form__type-selection'>
                    <p className={`multi-form__selection-text ${(planType === 'mo') && 'multi-form__selection-text--active'}`}>Monthly</p>
                    <input type='checkbox' className='multi-form__switch' checked={isChecked} onChange={handleChange} />
                    <p className={`multi-form__selection-text ${(planType === 'yr') && 'multi-form__selection-text--active'}`}>Yearly</p>
                </div>
            </div>
        </FormWrapper>
    )
}

const Plan = ({ image, planName, type, price, currentPlanName, updateFields }) => {
    const newPrice = (type === 'yr') ? price * 10 : price
    return (
        <div className={`multi-form__plan ${planName === currentPlanName && 'multi-form__plan--active'}`} onClick={() => updateFields({ plan: planName, planPrice: newPrice })}>
            <img className='multi-form__icon' src={image} alt={planName} />
            <div className='multi-form__plan-info'>
                <h3 className='multi-form__plan-name'>{planName}</h3>
                <p className='multi-form__plan-price'>${newPrice}/{type}</p>
                {(type === 'yr') && <p className='multi-form__plan-free'>2 months free</p>}
            </div>
        </div>
    )
}

export default SelectPlan
