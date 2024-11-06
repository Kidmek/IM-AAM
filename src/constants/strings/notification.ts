import {
  notification1,
  notification2,
  notification3,
  notification4,
} from '../../constants/images'

export const notificaitions = [
  {
    title: 'Buying Period',
    content:
      'Nikkei Index is increasing, this is the period to sell bullish stocks and buy daily stocks',
    image: notification1,
  },
  {
    title: 'Selling Period',
    content: 'JKSE is saturating, buy as many bullish stocks as you can',
    image: notification2,
  },
  {
    title: 'Cut Loss (SELL)',
    content:
      'Unfortunately, our AAM has reviewed the recently released financial report for this particular stock and has identified a downward trend.',
    image: notification3,
  },
  {
    title: 'Take Profit (SELL)',
    content:
      'The market responded positively to the most recently released financial report.',
    image: notification4,
  },
  {
    title: 'HOLD and/or BUY more',
    content:
      'Despite the recent price drop for this stock, our AAM has analyzed the newly released financial report and suggests an upcoming upward trend',
    image: notification1,
  },
  {
    title: 'Hold More Cash',
    content:
      'This is typically a period when the stock market tends to show a downtrend. Consider holding more cash for a few days.',
  },
  {
    title: 'Trading period seems back',
    content:
      'This is typically a period when the stock market tends to trend upward. Consider buying more stocks.',
  },
]
