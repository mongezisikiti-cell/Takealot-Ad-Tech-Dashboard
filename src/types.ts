export interface SummaryData {
  mtd_actual: number;
  target: number;
  achievement_pct: number;
  month_progress: number;
  critical_count: number;
  at_risk_count: number;
  on_track_count: number;
  total_ams: number;
}

export interface PerformanceData {
  Team: string;
  Manager: string;
  Account_Manager: string;
  MTD_Total: number;
  Target: number;
  Projected_Pct: number;
  Achievement_Pct: number;
  Status: 'Critical' | 'At Risk' | 'On Track';
  Shortfall: number;
}

export interface PersonalScoreboard {
  mtd_revenue: number;
  target: number;
  achievement_pct: number;
  projected_month_end: number;
  gap_to_target: number;
  gap_to_stretch: number;
  daily_run_rate: number;
  required_velocity_target: number;
  required_velocity_stretch: number;
  momentum_trend: number;
}

export interface PipelineLead {
  name: string;
  value: string;
  type: string;
  status: 'Hot' | 'Warm' | 'Cold';
}

export interface StrategyItem {
  title: string;
  actions: string[];
  timeframe: string;
}

export interface MonthlyTarget {
  month: string;
  target: number;
}

export interface Client {
  name: string;
  mtd: number;
  planned: number;
  status: 'Active' | 'Planned' | 'Dormant';
}

export interface RateCardItem {
  placement: string;
  channel: string;
  pricingModel: string;
  rate: string;
  metric: string;
}

export interface CommissionTier {
  min: string;
  max: string;
  rate: string;
}

export interface BrandOpportunity {
  name: string;
  potential: number;
  strategy: string;
  confidence: 'High' | 'Medium' | 'Low';
}

export interface GetawayActivity {
  month: string;
  activity: string;
  result: string;
  lesson: string;
}

export interface WalletStatus {
  client: string;
  balance: number;
  daysInactive: number;
  status: 'Critical' | 'Warning' | 'Healthy';
}
