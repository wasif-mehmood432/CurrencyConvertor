import { useState } from 'react'
import {InputBox} from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const { rates: currencyInfo, names: currencyNames } = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(Number(amount).toFixed(2))
    setAmount(Number(convertedAmount).toFixed(2))
  }
  
  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }
let backgroundImage = "https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${backgroundImage}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-2xl mx-auto border border-gray-60 rounded-lg p-8 backdrop-blur-sm bg-white/30">
                <h2 className="text-3xl font-bold text-center mb-6 text-white">Currency Converter</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-4">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            currencyNames={currencyNames}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition-colors"
                            onClick={swap}
                        >
                            Swap Currencies
                        </button>
                    </div>
                    <div className="w-full mt-8 mb-6">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                            currencyNames={currencyNames}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App