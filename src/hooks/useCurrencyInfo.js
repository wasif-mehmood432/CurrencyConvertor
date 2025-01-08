import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    const [currencyNames, setCurrencyNames] = useState({})
    
    useEffect(() => {
        // Fetch currency rates
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch((error) => console.error("Error fetching currency data:", error));

        // Fetch currency names
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
        .then((res) => res.json())
        .then((res) => setCurrencyNames(res))
        .catch((error) => console.error("Error fetching currency names:", error));
    }, [currency])
    
    return { rates: data, names: currencyNames }
}

export default useCurrencyInfo;