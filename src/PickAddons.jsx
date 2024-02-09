import React, { useRef, useState } from 'react'
import FormWrapper from './FormWrapper'

const addonsServices = [
    { title: 'Online service', text: 'Access to multiplayer games', price: 1 },
    { title: 'Large storage', text: 'Extra 1TB of cloud save', price: 2 },
    { title: 'Customizable profile', text: 'Custom theme on your profile', price: 2 }
]

const PickAddons = ({ planType, updateAddons, addons }) => {
    return (
        <FormWrapper title='Pick add-ons' instruction='Add-ons help enhance your gaming experience.'>
            <div className='multi-form__pick-addons'>
                {addonsServices.map((service, index) => <Addons key={index} {...service} planType={planType} addons={addons} updateAddons={updateAddons} />)}
            </div>
        </FormWrapper>
    )
}

const Addons = ({ title, text, price, planType, updateAddons, addons }) => {
    const inputRef = useRef()
    const [isChecked, setIsCheck] = useState(addons.some((addon => addon.title === title)))
    const handleChange = () => {
        setIsCheck(!isChecked)
        updateAddons(inputRef.current.checked, title, newPrice)
    }
    const handleDivClick = (e) => {
        if (e.target !== inputRef.current) {
            inputRef.current.click()
        }
    }
    const newPrice = (planType === 'yr') ? price * 10 : price
    return (
        <div className={`multi-form__service ${isChecked && 'multi-form__service--active'}`} onClick={handleDivClick}>
            <div className='multi-form__service-container'>
                <input type='checkbox' className='multi-form__service-checkbox' ref={inputRef} checked={isChecked} onChange={handleChange} />
                <div>
                    <h3 className='multi-form__service-title'>{title}</h3>
                    <p className='multi-form__service-text'>{text}</p>
                </div>
            </div>
            <p className='multi-form__service-price'>+${newPrice}/{planType}</p>
        </div>
    )
}

export default PickAddons
