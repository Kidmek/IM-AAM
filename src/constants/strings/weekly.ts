export const Weekly = {
  client: [
    {
      name: 'John Doe',
      email: 'jogn213@gmail.com',
      invoiceDate: '10/01/2024',
      summaryPeriod: {
        startDate: '09/25/2024',
        endDate: '10/01/2024',
      },
    },
    {},
  ],
  stock: [
    {
      stockName: 'AAPL',
      traderType: 'Daily',
      purchaseDate: '10/01/2024',
      purchaseTime: '11:30AM',
      stockPriceAtPurchase: '$150',
      highestPriceAfterPurchase: '$150',
      potentialRealisedGainPercent: '3.33%',
      purchasePrice: '$150',
    },
    {
      stockName: 'TSLA',
      traderType: 'Swing',
      purchaseDate: '10/01/2024',
      purchaseTime: '11:30AM',
      stockPriceAtPurchase: '$150',
      highestPriceAfterPurchase: '$150',
      potentialRealisedGainPercent: '3.33%',
      purchasePrice: '$150',
    },
    {
      stockName: 'AMZN',
      traderType: 'Bullish',
      purchaseDate: '10/01/2024',
      purchaseTime: '11:30AM',
      stockPriceAtPurchase: '$150',
      highestPriceAfterPurchase: '$150',
      potentialRealisedGainPercent: '3.33%',
      purchasePrice: '$150',
    },
  ],
}

export const ClientColumns = [
  { accessValue: 'name', label: 'Name' },
  { accessValue: 'email', label: 'Email' },
  { accessValue: 'invoiceDate', label: 'Invoice Date' },
  {
    accessValue: '',
    label: `Weekely Summary for:
09/25/2024 - 10/01/2024`,
  },
]

export const StockPurchaseColumns = [
  { accessValue: 'stockName', label: 'Stock Name' },
  { accessValue: 'traderType', label: 'Trader Type' },
  { accessValue: 'purchaseDate', label: 'Purchase Date' },
  { accessValue: 'purchaseTime', label: 'Purchase Time' },
  {
    accessValue: 'stockPriceAtPurchase',
    label: 'Stock Price at Purchase',
  },
  {
    accessValue: 'highestPriceAfterPurchase',
    label: 'Highest Price After Purchase',
  },
  {
    accessValue: 'potentialRealisedGainPercent',
    label: 'Potential Realised Gain (%)',
  },
  { accessValue: 'purchasePrice', label: 'Purchase Price' },
]
