export const tooltips = {
  investment: [
    {
      title: 'Investment Amount:',
      tip: `Your investment amount determines the scale of your portfolio and directly impacts the potential returns and risks associated with your investments. Without knowing your investment amount, our app cannot accurately recommend the appropriate allocation of funds across different stocks or provide tailored advice on portfolio diversification.


      Without knowing your investment amount, our app won't be able to optimize your portfolio's stock weight, allocate budgets to individual stocks, or provide insights into position sizing.This lack of information could lead to suboptimal investment decisions, potentially resulting in overexposure to certain stocks or sectors, or underutilization of available funds.
`,
    },
  ],
  country: [
    {
      title: 'Preferred Countries for Investment:',
      tip: `You can select which of the indices from the countries listed below will be displayed on your portfolio page
`,
    },
  ],
  recommended: [
    {
      title: 'Offered Recomended Stocks:',
      tip: `Be smart about picking your stocks. It’s best to spread your investments across different countries and industries. The price we offer depends on how quickly you can buy the recommended stocks. Acting fast means you can get them at a better price. As time goes on, we think the stock prices will go up, so if you wait too long, you might not make as much profit. `,
    },
  ],
  brokerage: [
    {
      title: 'Brokerage Fee:',
      tip: `We will assist you in calculating your expected net profit by subtracting the brokerage fee. Simply enter the brokerage fee for each country you've selected, either as a rate per transaction or the minimum fee charged by your broker.

The minimum brokerage fee applies when the total brokerage cost, based on the rate, is less than the set minimum fee. For example, if a stock is priced at $20 and bought in a lot of 5, the brokerage fee would be calculated as $20 x 5 x 4% = $2. Since this is below the minimum fee of $3.67, the minimum fee is charged. However, if the lot size increases to 10, the brokerage fee becomes $20 x 10 x 4% = $8, which exceeds the minimum rate, so $8 is charged.`,
    },
  ],
}
export const Countries = [
  {
    name: 'India',
    recommended: 'IRFC ( Indian Railway Finance Corporate )',
    maximum: '5%',
    minimum: '$200',
  },
  {
    name: 'America',
    recommended: 'NBCC ( National Buildings Contruction Corporation )',
    maximum: '5%',
    minimum: '$200',
  },
  {
    name: 'China',
    recommended: 'NHPC ( National Hydroelectric Power Corporation )',
  },
  {
    name: 'Dubai',
    recommended: 'IRED ( Indian Renewable Energy Development )',
  },
]

export const currencies = [
  { label: 'USD $', value: 'USD $' },
  {
    label: 'EUR €',
    value: 'EUR €',
  },
  {
    label: 'INR ₹',
    value: 'INR ₹',
  },
  {
    label: 'JPY ¥',
    value: 'JPY ¥',
  },
]
