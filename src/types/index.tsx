export interface MenuItem {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
}

export interface ChartDataPoint {
  month?: string;
  day?: string;
  Personalized?: number;
  Instant?: number;
  value?: number;
}

export interface CardStatusData {
  name: string;
  value: number;
  color: string;
}

export interface CardRequest {
  branch: string;
  type: string;
  quantity: number;
  status: string;
  statusColor: string;
}

export interface MetricCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  period: string;
  icon: React.ComponentType<any>;
  iconBg: string;
}