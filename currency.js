class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fxpfr9fUl6ywlD78MhWGuMfP8PXroQF9YwJQtdc4&base_currency=";
    }
   async exchange(amount, firstCurrency, secondCurrecy){
  const response =     await  fetch(`${this.url}${firstCurrency}`);
  const result = await response.json();

   const exchangeResult =  amount * result.data[secondCurrecy]
  return exchangeResult;
    }
}