export const chartColors = {
  default: {
    primary: '#00D1B2',
    info: '#209CEE',
    warning: '#fb923c',
    danger: '#FF3860'
  }
}

const randomChartData = (n) => {
  const data = []

  for (let i = 0; i < n; i++) {
    data.push(Math.round(Math.random() * 200))
  }

  return data
}

const datasetObject = (color, points) => {
  return {
    fill: true,
    borderColor: chartColors.default[color],
    backgroundColor: chartColors.default[color],
    borderWidth: 0,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: chartColors.default[color],
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: chartColors.default[color],
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: randomChartData(points),
    tension: 0.5,
    cubicInterpolationMode: 'default'
  }
}

export const sampleChartData = (points = 9, sets = 4) => {
  const labels = []

  for (let i = 1; i <= points; i++) {
    labels.push(`0${i}`)
  }

  if (sets === 1) {
    return {
      labels,
      datasets: [
        {
          ...datasetObject('primary', points),
          backgroundColor: ['#00D1B2', '#209CEE', '#fb923c', '#FF3860']
        }
      ]
    }
  }

  return {
    labels,
    datasets: [
      datasetObject('primary', points),
      datasetObject('info', points),
      datasetObject('warning', points),
      datasetObject('danger', points)
    ]
  }
}
