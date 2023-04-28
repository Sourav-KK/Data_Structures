let prices = [7,1,5,3,6,4]
 console.log(maxProfit(prices))
 
 var maxProfit = function(prices) {
     const index = Math.floor(Math.random() * prices.length)
     console.log(index,'index')
     const buy = prices[index]
    let sell, temp
    let profit = 0

  for(let i=index; i < prices.length; i++){
      temp = buy - prices[i]
      if(temp > profit){
          profit = temp
      }
  }  return profit
}