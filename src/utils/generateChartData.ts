import { Color, PaleColor } from '../styles/color';
import type {
  AreaChartDataType,
  BarChartDataType,
  BarLineChartDataType,
  BarListChartDataType,
  BubbleChartDataType,
  DoughnutChartDataType,
  LineChartDataType,
  PieChartDataType,
  PolarChartDataType,
  RadarChartDataType,
  ScatterChartDataType
} from '../types/chartType';

/* Area 차트 */
export const generateAreaChartData = (data: AreaChartDataType[]) => ({
  labels: data[0].data.map(({ xlabel }) => xlabel),
  datasets: data.map(({ name, data }, index) => ({
    label: name,
    data: data.map(({ value }) => value),
    fill: true,
    backgroundColor: PaleColor[index],
    borderColor: Color[index],
    borderWidth: 2,
    pointRadius: 0,
    tension: 0.3
  }))
});

/* Bar 차트 */
export const generateBarChartData = (data: BarChartDataType[]) => ({
  labels: data[0].data.map(({ xlabel }) => xlabel),
  datasets: data.map(({ name, data }, index) => ({
    label: name,
    data: data.map(({ value }) => value),
    backgroundColor: Color[index]
  }))
});

/* Bubble 차트 */
export const generateBubbleChartData = (data: BubbleChartDataType[]) => ({
  datasets: data.map(({ name, data }, index) => ({
    label: name,
    data: data.map(({ xvalue, yvalue, rvalue }) => ({ x: xvalue, y: yvalue, r: rvalue })),
    backgroundColor: PaleColor[index],
    borderWidth: 0
  }))
});

/* Doughnut 차트 */
export const generateDoughnutChartData = (data: DoughnutChartDataType[]) => ({
  labels: data.map(({ name }) => name),
  datasets: [
    {
      data: data.map(({ value }) => value),
      backgroundColor: Color.slice(0, data.length),
      borderWidth: 0
    }
  ]
});

/* Line 차트 */
export const generateLineChartData = (data: LineChartDataType[]) => ({
  labels: data[0].data.map(({ xlabel }) => xlabel),
  datasets: data.map(({ name, data }, index) => ({
    label: name,
    data: data.map(({ value }) => value),
    borderColor: Color[index],
    borderWidth: 2,
    pointBackgroundColor: Color[index],
    pointRadius: 2,
    pointHoverRadius: 3,
    tension: 0
  }))
});

/* Pie 차트 */
export const generatePieChartData = (data: PieChartDataType[]) => ({
  labels: data.map(({ name }) => name),
  datasets: [
    {
      data: data.map(({ value }) => value),
      backgroundColor: Color.slice(0, data.length),
      borderWidth: 0
    }
  ]
});

/* Polar 차트 */
export const generatePolarChartData = (data: PolarChartDataType[]) => ({
  labels: data.map(({ name }) => name),
  datasets: [
    {
      data: data.map(({ value }) => value),
      backgroundColor: Color.slice(0, data.length),
      borderWidth: 0
    }
  ]
});

/* Radar 차트 */
export const generateRadarChartData = (data: RadarChartDataType[]) => ({
  labels: data[0].data.map(({ category }) => category),
  datasets: data.map(({ name, data }, index) => ({
    label: name,
    data: data.map(({ value }) => value),
    backgroundColor: PaleColor[index],
    borderColor: Color[index],
    borderWidth: 2,
    pointBackgroundColor: Color[index],
    pointRadius: 2,
    pointHoverRadius: 3,
    tension: 0
  }))
});

/* Scatter 차트 */
export const generateScatterChartData = (data: ScatterChartDataType[]) => ({
  datasets: data.map(({ name, data }, index) => ({
    label: name,
    data: data.map(({ xvalue, yvalue }) => ({ x: xvalue, y: yvalue })),
    backgroundColor: Color[index]
  }))
});

/* Bar + Line 차트 */
export const generateBarLineChartData = (data: BarLineChartDataType[]) => ({
  labels: data[0].data.map(({ xlabel }) => xlabel),
  datasets: data.map(({ name, data, type }, index) => ({
    type,
    label: name,
    data: data.map(({ value }) => value),
    ...(type === 'bar' && {
      backgroundColor: Color[index]
    }),
    ...(type === 'line' && {
      borderColor: Color[index],
      borderWidth: 2,
      pointBackgroundColor: Color[index],
      pointRadius: 2,
      pointHoverRadius: 3,
      tension: 0
    })
  }))
});

/* Bar + List 차트 */
export const generateBarListChartData = (data: BarListChartDataType[]) => ({
  labels: data.map(({ name }) => name),
  datasets: [
    {
      data: data.map(({ value }) => value),
      backgroundColor: Color[0]
    }
  ]
});
