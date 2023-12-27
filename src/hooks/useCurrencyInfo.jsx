import { useState, useEffect } from 'react'

function useCurrencyInfo(currency) {
	
	 const [data, setData] = useState({})

	useEffect(() => {
		// console.log("currency: " + currency)

		fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
		.then((resp) => resp.json())
		.then((resp) => setData(resp[currency]))

		// console.log(currency);

	},[currency]);

	 

	return data
}

export default useCurrencyInfo;