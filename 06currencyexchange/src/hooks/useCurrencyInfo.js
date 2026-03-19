import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("API 👉", res);

        if (res.result === "success") {
          setData(res.rates);
        }
      })
      .catch((err) => console.log("ERROR 👉", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;