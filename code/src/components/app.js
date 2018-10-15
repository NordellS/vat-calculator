import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: "",
      exVat: ""
    }
  }

  handleInput = (event) => {
    this.setState({
      vatRate: parseInt(event.target.value),
      incVat: 0,
      exVat: 0
    })
  }

  handleImputIncVat = (event) => {
    this.setState({
      exVat: incVatToExtVat(this.state.vatRate, parseInt(event.target.value)),
      incVat: parseInt(event.target.value),
      vatSum: parseInt(event.target.value)
    })
  }

  handleImputExVat = (event) => {
    this.setState({
      incVat: exVatToIncVat(this.state.vatRate, parseInt(event.target.value)),
      exVat: parseInt(event.target.value),
      vatSum: parseInt(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="vat-rate-1">25%</label>
            <input
              id="vat-rate-1"
              type="radio"
              value="25%"
              checked={this.state.vatRate === 25}
              onChange={this.handleInput} />
          </div>
          <div>
            <label htmlFor="vat-rate-2">12%</label>
            <input
              id="vat-rate-2"
              type="radio"
              value="12%"
              checked={this.state.vatRate === 12}
              onChange={this.handleInput} />
          </div>
          <div>
            <label htmlFor="vat-rate-3">6%</label>
            <input
              id="vat-rate-3"
              type="radio"
              value="6%"
              checked={this.state.vatRate === 6}
              onChange={this.handleInput} />
          </div>
          <br />
          <label>
          Inklusive moms (kr):
            <input
              name="exVatToIncVat"
              type="number"
              value={this.state.incVat}
              onChange={this.handleImputIncVat}
              placeholder="SEK inklusive moms" />
          </label>
          <br />
          <label>
          Exklusive moms (kr):
            <input
              name="incVatToExtVat"
              type="number"
              value={this.state.exVat}
              onChange={this.handleImputExVat}
              placeholder="SEK exklusive moms" />
          </label>
          <br />
          <label>
          Momssumma (kr):
            <input
              readOnly
              name="vatSum"
              type="number"
              value={this.state.incVat - this.state.exVat}
              placeholder="Momssumma" />
          </label>
        </form>
      </div>
    )
  }

}

export default App
