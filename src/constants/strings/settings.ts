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
      tip: `Your choice of countries for investment provides valuable insight into your geographical preferences and investment objectives. By knowing which countries you're interested in, our app can suggest stocks from those regions that align with your investment strategy and goals.
`,
    },
    {
      title: 'Downsides of Not Providing This Information:',
      tip: `Without knowing your preferred countries for investment, our app may provide recommendations that are not aligned with your geographical preferences or may overlook opportunities in regions of interest to you.
This lack of information could result in a less tailored investment strategy, potentially leading to missed opportunities for diversification or exposure to specific markets or industries.
`,
    },
  ],
  recommended: [
    {
      title: 'Offered Recomended Stocks:',
      tip: `Be smart about picking your stocks. It’s best to spread your investments across different countries and industries. The price we offer depends on how quickly you can buy the recommended stocks. Acting fast means you can get them at a better price. As time goes on, we think the stock prices will go up, so if you wait too long, you might not make as much profit. `,
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
