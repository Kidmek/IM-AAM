export const dailyHeaders = [
  {
    name: 'Technical Indicator',
    help: true,
    tooltip: '',
    bold: true,
  },
  {
    name: 'Note',
    value: 'Lorem',
  },
  {
    name: 'Action',
    color: '--table-light-gray',
    value: 'Lorem',
    help: true,
    tooltip: '',
  },
  {
    name: 'Sector',
    value: 'Lorem',
  },
  {
    name: 'Index',
    color: '--table-light-gray',
    value: 'NYSE',
  },
  {
    name: 'Stock Name',
    color: '--yellow',
    value: 'IRFC',
    filter_disabled: true,
  },
  {
    name: 'Market Opening Price',
    color: '--gray',
    value: '$ 242.00',
  },
  {
    name: 'Current Price',
    color: '--gray',
    value: '$ 242.00',
    filter_disabled: true,
  },
  {
    name: 'Day Chg',
    color: '--dark-green',
    value: '$ 4.25',
  },
  {
    name: 'Day Chg P/L %',
    color: '--dark-green',
    value: '8.254%',
  },
  {
    name: 'Estimated Daily Lowest Change%',
    color: '--light-green',
    value: '8.254%',
    tooltip: '',
  },
  {
    name: 'Estimated Daily Highest Change%',
    color: '--light-green',
    value: '8.254%',
    tooltip: '',
  },
  {
    name: 'Target Daily Profit%',
    color: '--light-green',
    value: '8.254%',
    tooltip: '',
  },
  {
    name: 'Barkerage Commission',
    color: '--light-red',
    value: '7.6',
  },
  {
    name: 'Lot',
    color: '--light-red',
    value: '55',
  },
  {
    name: 'Total Cost',
    color: '--light-red',
    value: '$ 1,200,000',
  },

  {
    name: 'Selling Price Target',
    color: '--table-green',
    value: '$ 18.90',
  },
  {
    name: 'Target Current Profit%',
    color: '--table-green',
    value: '-2.71%',
  },
  {
    name: 'Total Target Profit',
    color: '--table-green',
    value: '$ 0.515',
  },
  {
    name: 'DCF',
    color: '--table-light-gray',
    value: 'Undervalued',
    help: true,
    tooltip: '',
  },
  {
    name: 'Technical Analysis Score',
    color: '--table-light-gray',
    value: '4,525',
    help: true,
    tooltip: '',
  },
  {
    name: 'Beta',
    value: '0.2451',
    color: '--table-light-gray',
  },
  {
    name: 'Sharp Ratio (Current Year)',
    value: '5:4',
    color: '--table-light-gray',
    filter_disabled: true,
  },
  {
    name: 'P/E',
    value: '42.215',
    color: '--table-light-gray',
  },
  {
    name: 'Market Cap SIze',
    value: '$ 45,142,142',
    color: '--table-light-gray',
  },
  {
    name: 'Market Capitalization',
    value: '$ 45,142,142',
    color: '--table-light-gray',
  },
  {
    name: 'Previous Day Chg%',
    color: '--bright-green',
    value: 'N/A',
  },
  {
    name: 'Cost Of Information',
    value: '$2',
    help: true,
  },
]

export const technicalIndicators = {
  firstHalf: {
    times: ['1 Minute', '5 Minute', '15 Minute'],
    values: ['Buy', 'Strong Buy', 'Neutral'],
  },
  secondHalf: {
    times: ['30 Minute', 'Hourly', 'Daily'],
    values: ['Strong Sell', 'Sell', 'Neutral'],
  },
}
