// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="list-item-container">
      <div className="img-container">
        <img src={currencyLogo} className="logo" alt={currencyName} />
        <p className="name">{currencyName}</p>
      </div>
      <div className="values-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
