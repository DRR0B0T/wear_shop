import React from 'react'
import {useQuery} from '@apollo/client'
import '../scss/components/_currency-switcher.scss'
import {AppContext} from '../App'
import {GET_ALL_CURRENCY} from '../hooks/useAllData'

const CurrencySwitcher = () => {
  const {data, loading, error} = useQuery(GET_ALL_CURRENCY)
  const {currency, setCurrency, visible, setVisible} = React.useContext(AppContext)

  const sortRef = React.useRef()

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setVisible(false)
      }
    }
    document.body.addEventListener('click', handleOutsideClick)

    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [setVisible])

  if (loading) return null

  if (error) return `Error! ${error.message}`

  return (
    <div
      ref={sortRef}
      onClick={() => setVisible(!visible)}
      className='currency__switcher'>
      <div className='currency__switcher_name'>
        <span>
          {currency}
        </span>
      </div>
      <ul
        onClick={() => setVisible(!visible)}
        className={visible ? 'currency__switcher_popup' : 'currency__switcher_popup hidden'}>
        {
          data.currencies.map((currency, index) =>
            <li
              key={index}
              onClick={() => setCurrency(currency.symbol)}
              className='currency__switcher_popup-item'
            >
              {currency.symbol} {currency.label}
            </li>)
        }
      </ul>
      <svg
        onClick={() => setVisible(!visible)}
        className={visible ? 'rotate' : ''}
        width="10" height="5" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

export default CurrencySwitcher
