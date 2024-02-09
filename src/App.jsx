import React, { useState } from 'react'
import useMultistepForm from './useMultistepForm'
import PersonalInfo from './PersonalInfo'
import SelectPlan from './SelectPlan'
import PickAddons from './PickAddons'
import Summary from './Summary'
import ThankYou from './ThankYou'

const formSteps = [
  { stepNumber: '1', title: 'your info' },
  { stepNumber: '2', title: 'select plan' },
  { stepNumber: '3', title: 'add-ons' },
  { stepNumber: '4', title: 'summary' },
]
const initialState = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  planPrice: 9,
  planType: 'mo',
  addons: []
}

const App = () => {
  const [data, setData] = useState(initialState)
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const updateFields = (fields) => {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const updateAddons = (isAdding, title, price) => {
    setData(prev => {
      return {
        ...prev,
        addons: isAdding ? [...prev.addons, { title, price }] : prev.addons.filter(addon => addon.title !== title)
      }
    })
  }
  const goToChange = () => {
    goTo(1)
  }
  const { currentStepIndex, goTo, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <PersonalInfo {...data} error={error} updateFields={updateFields} />,
    <SelectPlan {...data} updateFields={updateFields} />,
    <PickAddons {...data} updateAddons={updateAddons} />,
    <Summary {...data} goToChange={goToChange} />
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    if (data.name.length === 0 || data.email.length === 0 || data.phone.length === 0) return setError(true)
    if (!isLastStep) return next()
    setSubmitted(true)
  }

  return (
    <div className='container'>
      <main className='multi-form'>
        <aside className='multi-form__list'>
          {formSteps.map((step, index) => {
            const { stepNumber, title } = step
            return (
              <div key={index} className='multi-form__step'>
                <div className={`multi-form__number ${currentStepIndex === index && 'multi-form__number--active'}`}>
                  {stepNumber}
                </div>
                <div className='multi-form__text'>
                  <p className='multi-form__text-header'>step {stepNumber}</p>
                  <h3 className='multi-form__text-info'>{title}</h3>
                </div>
              </div>
            )
          })}
        </aside>
        {submitted ? (
          <ThankYou />
        ) : (
          <form className='multi-form__form' onSubmit={handleSubmit}>
            {step}
            <div className='multi-form__btns'>
              {!isFirstStep && (
                <button type='button' className='multi-form__button multi-form__button--back' onClick={back}>
                  Go Back
                </button>
              )}
              <button type='submit' className={`multi-form__button ${isLastStep ? 'multi-form__button--confirm' : 'multi-form__button--next'}`}>{isLastStep ? 'Confirm' : 'Next Step'}</button>
            </div>
          </form>
        )}
      </main>
    </div>
  )
}

export default App
