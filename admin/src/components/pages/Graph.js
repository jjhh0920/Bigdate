import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [
    '2023.03.27',
    '2023.03.28',
    '2023.03.29',
    '2023.03.30',
    '2023.03.31',
    '2023.04.01',
    '2023.04.02'
  ],
  datasets: [
    {
      label: '글',
      data: [19, 4, 6, 1, 2, 4],
      fill: false,
      borderColor: 'blue'
    },
    {
      label: '댓글',
      data: [30, 8, 4, 10, 7, 5],
      fill: false,
      borderColor: 'red'
    }
  ]
};

const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          parser: 'YYYY.MM.DD', // 날짜 형식
          tooltipFormat: 'YYYY.MM.DD', // 툴팁에 보이는 날짜 형식
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
};

const Graph = () => {
  return <Line data={data} options={options} />;
};

export default Graph;