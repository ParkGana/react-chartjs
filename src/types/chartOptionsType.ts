/* Area 차트 */
export type AreaChartOptionsType = {
  minX?: string;
  maxX?: string;
  minY?: number;
  maxY?: number;
};

/* Bar 차트 */
export type BarChartOptionsType = {
  stacked?: boolean;
  minX?: string;
  maxX?: string;
  minY?: number;
  maxY?: number;
};

/* Bubble 차트 */
export type BubbleChartOptionsType = {
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
};

/* Doughnut 차트 */
export type DoughnutChartOptionsType = {};

/* Line 차트 */
export type LineChartOptionsType = {
  minX?: string;
  maxX?: string;
  minY?: number;
  maxY?: number;
};

/* Pie 차트 */
export type PieChartOptionsType = {};

/* Polar 차트 */
export type PolarChartOptionsType = {};

/* Radar 차트 */
export type RadarChartOptionsType = {};

/* Scatter 차트 */
export type ScatterChartOptionsType = {
  minX?: number;
  maxX?: number;
  minY?: number;
  maxY?: number;
};

/* Bar + Line 차트 */
export type BarLineChartOptionsType = {
  minX?: string;
  maxX?: string;
  minY?: number;
  maxY?: number;
};

/* Bar + List 차트 */
export type BarListChartOptionsType = {};
