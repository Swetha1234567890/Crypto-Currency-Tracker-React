// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  render() {
    const {cryptoList} = this.state
    const {isLoading} = this.state
    return (
      <div className="container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="image"
              alt="cryptocurrency"
            />
            <div className="table-container">
              <div className="heading-container">
                <p className="h1">Coin Type</p>
                <div className="currencies-container">
                  <p className="h2">USD</p>
                  <p className="h3">EURO</p>
                </div>
              </div>
              <div className="list-container">
                {cryptoList.map(each => (
                  <CryptocurrencyItem cryptoDetails={each} key={each.id} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
