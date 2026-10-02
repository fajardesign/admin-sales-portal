import * as React from 'react';
export interface StackedBarChartItemBudgetProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "income" | "expenses" | "scheduled";
  state?: "default" | "hover";
}
export declare const StackedBarChartItemBudget: React.FC<StackedBarChartItemBudgetProps>;
export default StackedBarChartItemBudget;
