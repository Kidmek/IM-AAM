import { strategy1, strategy2, strategy3, tip2, tip3, tip4 } from '../images'

export const tipsHeader = `Follow our tips and strategies to help you manage your emotions and mindset during stock trading. The stock market is highly volatile and risky, and more people lose money than make it.

While we can't guarantee profits, our expert advice offers you the chance to increase your chances of success and minimize losses by offering you the stocks that do actually carry values in their financial report we just noted as undervalued stocks.

Undervalued stocks are shares of a company that are trading for less than their intrinsic or true value. This concept is based on the idea that the market price of the stock does not reflect its actual worth according to certain financial metrics or valuation models. Investors who buy undervalued stocks typically expect the stock price to rise to reflect its fair valuation.`
export const tips = [
  {
    title: 'Diversify Your Portfolio for Better Risk Management',
    content: `In theory, the key to making money in the stock market is having comprehensive knowledge about which stocks to buy and sell at the right time.
Therefore, it is wise to limit each stock in your portfolio to a maximum of 2% of your total investment. For example, if you have $10,000, you should allocate only $200 to any single stock.`,
  },
  {
    title:
      'Distribute your portfolio equally among all types of stock trading strategy (daily, swing, and position).',
    content: `In your portfolio, include a mix of stocks to hold for a day (daily trader), a few weeks (swing trader), and a few months (position trader). Swing stocks should ideally be held before earnings calls and sold after the announcement is made public, although you might sell after you have reached your target profit or cut losses when if the price rebounds after the most recent earning call. Position trading stocks are generally the least risky and should be held during a bullish trend.
Additionally, stocks planned for a few weeks might also be held longer if it helps to reduce losses or maximize profits.

For example, if you buy a 'swing' stock with a high momentum probability, expecting its price to rise after an earnings call, but if the stock price drops significantly instead, then our AI system can analyze the latest earnings call news to predict the stock's price future trend. Based on this analysis, you can decide whether to buy more after the drop or sell after a rebound, particularly when the stock market is on an uptrend.`,
    image: tip2,
  },
  {
    title: 'Follow our notifications promptly and precisely in time.',
    content: `Our algorithm, powered by artificial intelligence, can predict whether current stock market conditions are favorable for buying or selling. As a result, you should buy stocks when the market is currently falling and sell when it's currently rising.
When the market is down, minimize cutting losses and focus on buying as much stock as possible. However, when the market is recovering, it may be more appropriate to sell some of your holdings. Conversely, when the market is up, avoid buying stocks and instead focus on selling as much stock as possible.

Additionally, our machine learning system identifies stocks that are most likely to increase in price over a given period. While we can't guarantee certainty, we concentrate on selecting stocks with a higher probability of trending upward. This approach, in theory, increases the chances of your portfolio gaining value rather than losing it.`,
    image: tip3,
  },
  {
    title:
      'The stock market can be influenced by parties with substantial financial resources.',
    content: `To manage your emotions effectively, recognize that large players can manipulate stock prices by driving them up through buying or down through selling. Our service aims to identify stocks with intrinsic value, helping to predict whether prices are likely to rise or fall.

In many cases, a stock's price might drop significantly despite a positive financial report. Our AI system can analyze these situations and predict whether the stock price may increase after a significant drop, therefore create an opportunity for you to win money by buying more stocks when it drop to recover your losses.

For example, if stock ABCD announces positive financial performance during an earnings call and our AI forecasts that the stock price will increase, you can either hold the stock and wait for it to rebound or buy more if the stock price has significantly dropped.`,
    image: tip4,
  },
]

export const strategies = [
  {
    title: 'Daily Trader',
    content: `A daily trader is an Investor who holds stocks for less than a day expecting profits coming from minor price change. Stocks in this category carry medium risk, but potential return are quite mediocre also (Expected Return 0.5%-5%/day return).

If you choose to trade these stocks, we recommend buying it at the beginning of the day, and these stocks has a stable positive return after a few days of the earning calls announcement.

Our AI can assist in analyzing whether the stock price is going to go up or down for the day.`,
    image: strategy1,
  },
  {
    title: 'Swing Trader',
    content: `A swing trader is an investor who holds stocks for a few days or weeks. Stocks in this category carry pretty high risk, but the potential returns are quite high (Expected Return 5%-45%/week return).

If you choose to trade these stocks, we recommend buying before the earnings call announcement is released and selling afterward, please do keep in mind that the planed earning calls calendar date may changes.

However, be aware that stock prices may significantly decrease even after positive earnings announcements, therefore, we recommends you to put a put option before the announcement eventhough
we monly recommends the stock that have intrinsic value according to their pre-quarterly earning calls financial report.
So our AI can assist in analyzing the after earning call's news to predict whether the stock price is likely to trend up or down after the falls.`,
    image: strategy2,
  },
  {
    title: 'Position Trader',
    content: `A position trader is an investor who hold stocks for a few months up to a few years. Stocks in this category carry pretty low risk, but the potential returns are quite low (Expected Return 7.5%-40%/Month return).
if you choose to trade these stocks, we recommend buying it at anytime you want but preferably when the stock market is falling, and these stocks has a stable positive low return with high sharp ratio. 

The earning calls announcement do not have a quite significant effect on these kind of stocks.

Our AI can help you find these kinds of stocks that has positive stable return and an undervalued bullish stocks since the past of one year for you.`,
    image: strategy3,
  },
]
