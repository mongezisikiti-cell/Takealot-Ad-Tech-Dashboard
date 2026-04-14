import { 
  SummaryData, 
  PerformanceData, 
  PersonalScoreboard, 
  PipelineLead, 
  StrategyItem, 
  MonthlyTarget, 
  Client, 
  RateCardItem, 
  BrandOpportunity,
  GetawayActivity,
  WalletStatus 
} from './types';

export const summaryData: SummaryData = {
  mtd_actual: 2019618.0,
  target: 8700000.0,
  achievement_pct: 23.2,
  month_progress: 43.33,
  critical_count: 3,
  at_risk_count: 1,
  on_track_count: 2,
  total_ams: 6
};

export const performanceData: PerformanceData[] = [
  {
    Team: "Retail - EHA",
    Manager: "Kelvin Adams",
    Account_Manager: "Mongezi Sikiti",
    MTD_Total: 442838.0,
    Target: 1850000.0,
    Projected_Pct: 59.9,
    Achievement_Pct: 23.9,
    Status: "Critical",
    Shortfall: 1407162.0
  },
  {
    Team: "Retail - EHA",
    Manager: "Kelvin Adams",
    Account_Manager: "Adilet Phago",
    MTD_Total: 333223.0,
    Target: 1200000.0,
    Projected_Pct: 66.5,
    Achievement_Pct: 27.8,
    Status: "Critical",
    Shortfall: 866777.0
  },
  {
    Team: "Retail - EHA",
    Manager: "Kelvin Adams",
    Account_Manager: "Londiwe Makhaye",
    MTD_Total: 518722.0,
    Target: 1750000.0,
    Projected_Pct: 71.0,
    Achievement_Pct: 29.6,
    Status: "At Risk",
    Shortfall: 1231278.0
  },
  {
    Team: "Retail - EHA",
    Manager: "Kelvin Adams",
    Account_Manager: "Mpho Pekane",
    MTD_Total: 228522.0,
    Target: 2600000.0,
    Projected_Pct: 34.4,
    Achievement_Pct: 8.8,
    Status: "Critical",
    Shortfall: 2371478.0
  },
  {
    Team: "Retail - EHA",
    Manager: "Kelvin Adams",
    Account_Manager: "Micailah Cassiem",
    MTD_Total: 273573.0,
    Target: 650000.0,
    Projected_Pct: 109.4,
    Achievement_Pct: 42.1,
    Status: "On Track",
    Shortfall: 376427.0
  },
  {
    Team: "Retail - EHA",
    Manager: "Kelvin Adams",
    Account_Manager: "Tara Marais",
    MTD_Total: 222740.0,
    Target: 650000.0,
    Projected_Pct: 91.4,
    Achievement_Pct: 34.3,
    Status: "On Track",
    Shortfall: 427260.0
  }
];

export const mongeziScoreboard: PersonalScoreboard = {
  mtd_revenue: 442838,
  target: 1850000,
  achievement_pct: 23.9,
  projected_month_end: 59.9,
  gap_to_target: -1407162,
  gap_to_stretch: -1592162,
  daily_run_rate: 34064,
  required_velocity_target: 88000,
  required_velocity_stretch: 97000,
  momentum_trend: 8
};

export const pipelineLeads: PipelineLead[] = [
  { name: "SMD - ALL - APRIL", value: "R500k", type: "Campaign Execution", status: "Hot" },
  { name: "LGESA(CM) - Brand Logo", value: "R250k", type: "Meetings", status: "Hot" },
  { name: "Canon - Cameras", value: "R120k", type: "Meetings", status: "Hot" },
  { name: "Syntech - Xiaomi Mobile", value: "R75k", type: "Execution", status: "Hot" },
  { name: "LGESA - Wallet Top Up", value: "R50k", type: "Reporting", status: "Hot" },
  { name: "Syntech - Xiaomi Tablets", value: "R31k", type: "Reporting", status: "Warm" }
];

export const strategyPlaybook: StrategyItem[] = [
  {
    title: "IMMEDIATE (Next 48 Hours)",
    timeframe: "R750k+ unlock",
    actions: [
      "SMD Execution: Ensure R500k April campaign is fully live",
      "LGESA Brand Logo: Convert R250k meeting to 'Load Campaign'",
      "Wallet Top-Up Blitz: Confirm R50k LGESA top-up status"
    ]
  },
  {
    title: "WEEK 1 GOAL (by 21 April)",
    timeframe: "Push to 55% MTD",
    actions: [
      "Canon Cameras: Secure R120k from 'Meetings' stage",
      "Syntech Xiaomi: Push R75k Smartphones to 'Reporting'",
      "Update Daily Stand-Up sheet with new action items"
    ]
  },
  {
    title: "STRETCH MOVES (110%+)",
    timeframe: "R2.035M total",
    actions: [
      "May Prep: Start SMD May (R500k) & LGESA (R100k) proposals",
      "Cross-team support: Ask Kelvin for 1x high-value deal",
      "Xiaomi Ironing/Vac/Pet: Bundle for R25k+ unlock"
    ]
  }
];

export const mongeziMonthlyTargets: MonthlyTarget[] = [
  { month: 'April', target: 1850000 },
  { month: 'May', target: 2550000 },
  { month: 'June', target: 2150000 },
  { month: 'July', target: 2250000 },
  { month: 'August', target: 2300000 },
  { month: 'September', target: 2400000 }
];

export const mongeziClients: Client[] = [
  { name: "Syntech", mtd: 170920, planned: 0, status: 'Active' },
  { name: "SMD Technologies", mtd: 132253, planned: 0, status: 'Active' },
  { name: "Infinity Data", mtd: 51303, planned: 0, status: 'Active' },
  { name: "Garmin", mtd: 23074, planned: 0, status: 'Active' },
  { name: "Premium Brand Anker", mtd: 19264, planned: 0, status: 'Active' },
  { name: "Canon South Africa", mtd: 18528, planned: 0, status: 'Active' },
  { name: "LG Electronics SA", mtd: 16550, planned: 0, status: 'Active' },
  { name: "Versuni SA", mtd: 0, planned: 195000, status: 'Planned' },
  { name: "MIA SA (GoPro)", mtd: 5689, planned: 0, status: 'Active' },
  { name: "Vodacom", mtd: 5257, planned: 0, status: 'Active' },
  { name: "Logitech", mtd: 0, planned: 0, status: 'Dormant' },
  { name: "OPPO", mtd: 0, planned: 0, status: 'Dormant' }
];

export const rateCardData: RateCardItem[] = [
  { placement: "Homepage Carousel", channel: "Web", pricingModel: "CPM", rate: "R250", metric: "Awareness" },
  { placement: "Large Banners (Slot 1-6)", channel: "Web", pricingModel: "Fixed Time (per day)", rate: "R5 500", metric: "Awareness" },
  { placement: "Large Banners (Slot 7-11)", channel: "Web", pricingModel: "Fixed Time (per day)", rate: "R4 500", metric: "Awareness" },
  { placement: "In App Pop-up: Segmented", channel: "Apps", pricingModel: "Fixed Time (per week)", rate: "R60 000", metric: "Awareness" },
  { placement: "Solus Mailer: Full base", channel: "Email", pricingModel: "Per Broadcast", rate: "R400 000", metric: "Awareness" },
  { placement: "Homepage Front Section", channel: "Web/Mobi/Apps", pricingModel: "Fixed Time (per week)", rate: "R65 000", metric: "Engagement" },
  { placement: "Paid Media Package", channel: "Paid Media", pricingModel: "Pay per Click", rate: "Min R30 000", metric: "Conversion" },
  { placement: "Sponsored Product Ads", channel: "Performance", pricingModel: "Auction (CPC)", rate: "Min R10 000", metric: "Conversion" },
  { placement: "Gamification", channel: "App", pricingModel: "Per build", rate: "Min R100 000", metric: "Engagement" },
  { placement: "Sampling", channel: "Physical", pricingModel: "Per sample", rate: "R5.00", metric: "Engagement" }
];

export const top5Brands: BrandOpportunity[] = [
  { name: "LG Electronics", potential: 350000, strategy: "Upsell Brand Logo + FS bundle", confidence: 'High' },
  { name: "Syntech (Xiaomi)", potential: 200000, strategy: "Push 'Load Campaign' for Sport/Beauty", confidence: 'Medium' },
  { name: "Canon SA", potential: 150000, strategy: "Secure Q2 Camera allocation early", confidence: 'High' },
  { name: "SMD Technologies", potential: 120000, strategy: "Activate dormant Sony CRM leads", confidence: 'Medium' },
  { name: "Versuni SA", potential: 100000, strategy: "Convert 'Planned' to 'Execution'", confidence: 'Low' }
];

export const getawayPlan: GetawayActivity[] = [
  { month: "April (Current)", activity: "Deficit Recovery", result: "R1.4M Gap", lesson: "Listing suppressions are the primary bottleneck" },
  { month: "May (Forecast)", activity: "Target Spike Prep", result: "R2.55M Goal", lesson: "3-week lead time required for Large Banners" },
  { month: "June (Forecast)", activity: "Quarterly Close", result: "R2.15M Goal", lesson: "Focus on 'The Closer 5' for consistent wallet spend" }
];

export const walletAlerts: WalletStatus[] = [
  { client: "The Core Computer", balance: 45000, daysInactive: 12, status: 'Critical' },
  { client: "Pinnacle Micro", balance: 28000, daysInactive: 15, status: 'Critical' },
  { client: "DJI", balance: 15000, daysInactive: 8, status: 'Warning' },
  { client: "Beyerdynamic", balance: 8500, daysInactive: 20, status: 'Critical' },
  { client: "Logitech", balance: 0, daysInactive: 30, status: 'Critical' }
];

export const funnelData = [
  { stage: "Meetings", value: 540000, label: "R540k", color: "#3B82F6" },
  { stage: "Proposal", value: 131500, label: "R132k", color: "#6366F1" },
  { stage: "Execution", value: 993500, label: "R994k", color: "#8B5CF6" },
  { stage: "Reporting", value: 161500, label: "R162k", color: "#10B981" }
];
