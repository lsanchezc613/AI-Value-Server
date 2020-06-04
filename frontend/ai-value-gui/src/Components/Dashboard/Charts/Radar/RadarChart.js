import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
  labels: ['A Ingresos', 'D CMV', 'A GO', 'A UNO', 'D CI', 'D CT',
    'D Ingresos', 'A CMV', 'D GO', 'D UNO', 'A CI', 'A CT'],

  datasets: [{
    label: 'Periodo Actual',
    data: [2516.599342, 874.898921, 598.309344, 149.053332, 401.606865, 5300.000000, 1884.372544,
      976.202014, 475.249997, 757.519678, 207.477947, 3600.000000],
    backgroundColor: '#739af5'
  }, {
    label: 'Periodo Futuro',
    data: [2230.3258338343726, 324.0274096510203, 87.87889197244982, 87.91132014291799, 1091.06523260848,
      1649.3541486820711, 4524.527177795541, 700.1078669278526, 305.77287688449843, 185.63393441345542,
      167.94365826179086, 5151.172778187191],
    backgroundColor: '#50bf4b'
  }]
}

export default class RadarChart extends React.Component {
  render() {
    return (
      <div>
        <Radar
          data={data}
          options={{
            title: {
              display: true,
              text: 'Generadores de valor',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            },
          }}
        />
      </div>
    );
  }
}