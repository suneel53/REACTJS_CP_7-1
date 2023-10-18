// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    name: 'Sarah Williams',
    balance: 2000,
  }

  onDenomination = value => {
    this.setState(prevState => {
      console.log('withdraw the balance')
      return {balance: prevState.balance - value}
    })
  }

  render() {
    const {name, balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-cont">
        <div className="cont">
          <div className="profile-cont">
            <p className="profile-logo">{name.slice(0, 1)}</p>
            <p>{name}</p>
          </div>
          <div className="balance-cont">
            <p>Your Balance</p>
            <div>
              <p>{balance}</p>
              <p>in Rupees</p>
            </div>
          </div>
          <p className="hed1">Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-cont">
            {denominationsList.map(each => (
              <DenominationItem
                listDetails={each}
                ondenomination={this.onDenomination}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
