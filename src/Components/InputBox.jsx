import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyNames = {},
    className = "",
}) {
    return (
        <div className={`bg-white p-4 rounded-lg text-sm flex flex-col gap-4 ${className}`}>
            <div className="flex justify-between">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <label className="text-black/40 mb-2 inline-block">
                    Currency Type
                </label>
            </div>
            <div className="flex gap-4">
                <input
                    className="outline-none w-1/2 bg-transparent py-1.5 text-xl"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-1/2"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()} - {currencyNames[currency]?.name || currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;