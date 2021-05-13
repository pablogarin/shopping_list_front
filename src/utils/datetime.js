import moment from 'moment'

export const formatDate = (date) => {
  if (!date) {
    throw new Error('Invalid Date')
  }
  const d = moment(date)
  return d.format('DD/MM/YYYY')
}

export const checkAge = (date, { days = 0, months = 0, years = 0 }) => {
  if (!date) {
    throw new Error('You must provide 2 dates and a difference.')
  }
  const currentDate = moment()
  const dateToCheck = moment(date)
  return dateToCheck
    .add(days, 'days')
    .add(months, 'months')
    .add(years, 'years')
    .diff(currentDate)
}
