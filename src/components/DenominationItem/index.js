// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {listDetails, ondenomination} = this.props
    const {value} = listDetails
    const onwithdraw = () => {
      ondenomination(value)
    }
    return (
      <li className="den-cont">
        <button type="button" onClick={onwithdraw}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
