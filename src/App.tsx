import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  TrendingUp, 
  Target, 
  AlertTriangle, 
  Zap, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock,
  Activity,
  ChevronRight,
  MessageSquare,
  CheckCircle2,
  Flame,
  Rocket,
  ShieldAlert,
  ShieldCheck,
  BarChart3,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  summaryData, 
  performanceData, 
  mongeziScoreboard, 
  pipelineLeads, 
  strategyPlaybook,
  mongeziMonthlyTargets,
  mongeziClients,
  rateCardData,
  top5Brands,
  getawayPlan,
  walletAlerts,
  funnelData
} from './data';
import { cn, formatCurrency } from './lib/utils';

// --- Components ---

const PipelineFunnel = () => {
  return (
    <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-3xl shadow-xl">
      <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Conversion Funnel (April)</h3>
      <div className="space-y-4">
        {funnelData.map((item, i) => {
          const maxWidth = 100;
          const width = maxWidth - (i * 15); // Simple funnel shape
          return (
            <div key={item.stage} className="relative">
              <div className="flex justify-between items-center mb-1 px-2">
                <span className="text-[10px] font-black text-white uppercase tracking-tighter">{item.stage}</span>
                <span className="text-[10px] font-mono font-bold text-blue-400">{item.label}</span>
              </div>
              <div className="h-8 w-full bg-white/5 rounded-lg overflow-hidden flex justify-center">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${width}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-full relative group"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 flex items-center justify-center">
                    <span className="text-[8px] font-black text-white uppercase">Active Stage</span>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Activity size={12} className="text-green-500" />
          <span className="text-[9px] font-bold text-gray-500 uppercase">Velocity: High</span>
        </div>
        <div className="text-[9px] font-bold text-gray-500 uppercase">
          Total: <span className="text-white">R1.84M</span>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#121214] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h2 className="text-xl font-black text-white uppercase italic">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white">
            <ShieldAlert size={24} className="rotate-45" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const RateCardModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Ad-Tech Rate Card & Inventory">
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rateCardData.map((item, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-black text-white group-hover:text-blue-400 transition-colors">{item.placement}</h4>
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{item.metric}</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">{item.channel}</p>
                  <p className="text-xs text-gray-400">{item.pricingModel}</p>
                </div>
                <p className="text-lg font-mono font-black text-white">{item.rate}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-6 bg-blue-600/10 border border-blue-600/20 rounded-2xl">
          <h3 className="text-sm font-black text-white uppercase mb-4 flex items-center space-x-2">
            <Rocket size={18} className="text-blue-500" />
            <span>Campaign Booking Process</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", label: "Brief", desc: "Submit objectives" },
              { step: "02", label: "Proposal", desc: "Inventory check" },
              { step: "03", label: "Sign", desc: "Insertion Order" },
              { step: "04", label: "Live", desc: "Campaign launch" },
              { step: "05", label: "Report", desc: "Performance data" }
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-[10px] font-black text-blue-500 mb-1">{s.step}</p>
                <p className="text-xs font-bold text-white mb-1">{s.label}</p>
                <p className="text-[9px] text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Marketplace Acceleration", desc: "KickStart incentive: R1,000 credits for new sellers.", icon: Zap },
            { title: "Brand Programme", desc: "Free Brand Store + 1 refresh annually for top partners.", icon: Target },
            { title: "Paid Media Admin", desc: "25% booking fee applies to all off-site media packages.", icon: ShieldAlert }
          ].map((pkg, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl">
              <pkg.icon size={18} className="text-blue-500 mb-2" />
              <h5 className="text-xs font-black text-white uppercase mb-1">{pkg.title}</h5>
              <p className="text-[10px] text-gray-500 leading-relaxed">{pkg.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

const WalletAlerts = () => {
  return (
    <div className="bg-[#1E293B] border border-white/10 rounded-3xl overflow-hidden mt-8 shadow-2xl">
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-red-500/20 to-transparent">
        <div>
          <h2 className="text-lg font-black text-white tracking-tight uppercase italic">Wallet Watch</h2>
          <p className="text-xs text-gray-400 font-bold">Flagging non-spending accounts</p>
        </div>
        <div className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full animate-pulse">
          <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Action Required</span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        {walletAlerts.map((w, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all group">
            <div className="flex items-center space-x-4">
              <div className={cn(
                "w-2 h-10 rounded-full",
                w.status === 'Critical' ? "bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]" : "bg-orange-500"
              )} />
              <div>
                <h4 className="text-sm font-black text-white group-hover:text-red-400 transition-colors">{w.client}</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase">{w.daysInactive} Days Inactive</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-mono font-black text-white">{formatCurrency(w.balance)}</p>
              <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Balance</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Top5Brands = () => {
  return (
    <div className="bg-[#1E293B] border border-white/10 rounded-3xl overflow-hidden mt-8 shadow-2xl">
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-blue-500/20 to-transparent">
        <div>
          <h2 className="text-lg font-black text-white tracking-tight uppercase italic">The Closer 5</h2>
          <p className="text-xs text-gray-400 font-bold">Brands to push you over the line</p>
        </div>
        <Rocket className="text-blue-400 animate-bounce" size={20} />
      </div>
      <div className="p-6 space-y-4">
        {top5Brands.map((b, i) => (
          <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-sm font-black text-white group-hover:text-blue-400 transition-colors">{b.name}</h4>
              <span className={cn(
                "text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest border",
                b.confidence === 'High' ? "bg-green-500/10 text-green-500 border-green-500/20" :
                b.confidence === 'Medium' ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
                "bg-orange-500/10 text-orange-500 border-orange-500/20"
              )}>
                {b.confidence} Confidence
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-3 font-medium">{b.strategy}</p>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Potential</span>
              <span className="text-lg font-mono font-black text-white">{formatCurrency(b.potential)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const GetawayPlan = () => {
  return (
    <div className="bg-[#1E293B] border border-white/10 rounded-3xl overflow-hidden mt-8 shadow-2xl">
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-purple-500/20 to-transparent">
        <div>
          <h2 className="text-lg font-black text-white tracking-tight uppercase italic">FY27 Recovery Blueprint</h2>
          <p className="text-xs text-gray-400 font-bold">Strategy to escape the R1.4M deficit</p>
        </div>
        <TrendingUp className="text-purple-400" size={20} />
      </div>
      <div className="p-6">
        <div className="space-y-8">
          {getawayPlan.map((p, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-purple-500/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#1E293B]" />
              <div className="mb-2">
                <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">{p.month}</span>
                <h4 className="text-sm font-black text-white uppercase tracking-tight">{p.activity}</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-[9px] font-black text-gray-500 uppercase mb-1">Status/Goal</p>
                  <p className="text-xs font-bold text-pink-400">{p.result}</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-[9px] font-black text-gray-500 uppercase mb-1">Strategic Lesson</p>
                  <p className="text-xs font-bold text-gray-300 leading-tight">{p.lesson}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-lg shadow-purple-600/20">
          <h4 className="text-xs font-black text-white uppercase tracking-widest mb-2 flex items-center space-x-2">
            <Zap size={16} />
            <span>The Escape Strategy</span>
          </h4>
          <p className="text-sm font-bold text-white leading-relaxed">
            1. Resolve Listing Suppressions (R240k recovery). 2. Close 'The Closer 5' (R920k potential). 3. Execute LGESA Wallet Top-up (R50k). 4. Pull forward R200k from May pipeline.
          </p>
        </div>
      </div>
    </div>
  );
};

const ClientPortfolio = () => {
  return (
    <div className="bg-[#1E293B] border border-white/10 rounded-3xl overflow-hidden mt-8 shadow-2xl">
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-r from-blue-500/10 to-transparent">
        <div>
          <h2 className="text-lg font-black text-white tracking-tight uppercase italic">Client Portfolio</h2>
          <p className="text-xs text-gray-400 font-bold">MTD Performance by Account</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Live Sync</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/5">
              <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Client Name</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">MTD Revenue</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Planned</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {mongeziClients.map((client) => (
              <tr key={client.name} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{client.name}</span>
                </td>
                <td className="px-6 py-4 text-sm font-mono font-bold text-gray-400">
                  {client.mtd > 0 ? formatCurrency(client.mtd) : '—'}
                </td>
                <td className="px-6 py-4 text-sm font-mono font-bold text-gray-400">
                  {client.planned > 0 ? formatCurrency(client.planned) : '—'}
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border",
                    client.status === 'Active' ? "bg-green-500/10 text-green-500 border-green-500/20" :
                    client.status === 'Planned' ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
                    "bg-gray-500/10 text-gray-500 border-gray-500/20"
                  )}>
                    {client.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TargetOutlook = () => {
  return (
    <div className="bg-[#1E293B] border border-white/10 rounded-3xl p-8 mt-8 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-lg font-black text-white tracking-tight uppercase italic">FY27 Target Outlook</h2>
          <p className="text-xs text-gray-400 font-bold">Projected mountain for the next 6 months</p>
        </div>
        <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
          <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">May Spike Detected</span>
        </div>
      </div>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mongeziMonthlyTargets}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1E293B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}
              itemStyle={{ fontSize: '10px', fontWeight: 'bold' }}
              formatter={(value: number) => [formatCurrency(value), 'Target']}
            />
            <Line 
              type="monotone" 
              dataKey="target" 
              stroke="#38BDF8" 
              strokeWidth={4} 
              dot={{ fill: '#38BDF8', strokeWidth: 2, r: 5, stroke: '#1E293B' }}
              activeDot={{ r: 8, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-6 gap-2 mt-4">
        {mongeziMonthlyTargets.map((t) => (
          <div key={t.month} className="text-center">
            <p className="text-[9px] font-black text-gray-500 uppercase mb-1">{t.month}</p>
            <p className="text-[10px] font-mono font-bold text-white">R{(t.target / 1000000).toFixed(2)}M</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-[#0F172A] border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl bg-opacity-90 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-6">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <Activity className="text-blue-400" size={28} />
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <h1 className="text-2xl font-black text-white tracking-tighter uppercase italic">Mongezi Sikiti</h1>
              </div>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">Ad-Tech Mission Control // FY27</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-10">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-[9px] uppercase tracking-widest text-gray-500 font-black mb-1.5">Month Progress</span>
              <div className="flex items-center space-x-4">
                <div className="w-40 h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${summaryData.month_progress}%` }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.4)]" 
                  />
                </div>
                <span className="text-sm font-mono font-black text-white">{summaryData.month_progress}%</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-end">
                <span className="text-[9px] uppercase tracking-widest text-gray-500 font-black mb-1">System Time (SAST)</span>
                <span className="text-base font-mono font-black text-cyan-400">{time.toLocaleTimeString()}</span>
              </div>
              <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all">
                <Clock size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const ScoreboardCard = () => {
  const metrics = [
    { label: "MTD Revenue", value: formatCurrency(mongeziScoreboard.mtd_revenue), target: formatCurrency(mongeziScoreboard.target), color: "text-white" },
    { label: "Achievement", value: `${mongeziScoreboard.achievement_pct}%`, target: "Target: 100%", color: "text-pink-500" },
    { label: "Projected", value: `${mongeziScoreboard.projected_month_end}%`, target: "Gap: R1.4M", color: "text-orange-400" },
    { label: "Momentum", value: `+${mongeziScoreboard.momentum_trend}%`, target: "Since Yesterday", color: "text-cyan-400" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metrics.map((m, i) => (
        <motion.div 
          key={m.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-[#1E293B] border border-white/10 p-6 rounded-3xl hover:border-blue-500/50 transition-all group shadow-xl"
        >
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{m.label}</p>
          <h3 className={cn("text-2xl font-black tracking-tighter mb-1", m.color)}>{m.value}</h3>
          <p className="text-[11px] text-gray-500 font-bold">{m.target}</p>
        </motion.div>
      ))}
    </div>
  );
};

const VelocityPanel = () => {
  return (
    <div className="bg-[#1E293B] border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-lg font-black text-white tracking-tight uppercase italic">Velocity Requirements</h2>
          <p className="text-xs text-gray-400 font-bold">Daily run-rate needed to hit milestones</p>
        </div>
        <div className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full">
          <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest">Status: Critical</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-black text-gray-500 uppercase">Current Run-Rate</span>
              <span className="text-sm font-mono font-bold text-white">{formatCurrency(mongeziScoreboard.daily_run_rate)}/day</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gray-600" style={{ width: '35%' }} />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-black text-blue-500 uppercase">Required (100% Target)</span>
              <span className="text-sm font-mono font-bold text-blue-500">{formatCurrency(mongeziScoreboard.required_velocity_target)}/day</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500/50" style={{ width: '88%' }} />
            </div>
            <p className="text-[10px] text-gray-500 mt-2 font-bold">Need +{formatCurrency(mongeziScoreboard.required_velocity_target - mongeziScoreboard.daily_run_rate)}/day</p>
          </div>

          <div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-black text-green-500 uppercase">Stretch (110% Bonus)</span>
              <span className="text-sm font-mono font-bold text-green-500">{formatCurrency(mongeziScoreboard.required_velocity_stretch)}/day</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: '100%' }} />
            </div>
            <p className="text-[10px] text-gray-500 mt-2 font-bold">Need +{formatCurrency(mongeziScoreboard.required_velocity_stretch - mongeziScoreboard.daily_run_rate)}/day</p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-black/20 rounded-xl p-4 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black text-gray-500 uppercase">Trajectory Comparison</span>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-[9px] font-bold text-gray-400 uppercase">You</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                <span className="text-[9px] font-bold text-gray-400 uppercase">Team Avg</span>
              </div>
            </div>
          </div>
          <div className="h-[160px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'Achievement', you: 23.9, avg: 28.4, top: 42.1 },
                { name: 'Projected', you: 59.9, avg: 72.1, top: 100 }
              ]}>
                <XAxis dataKey="name" hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#121214', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ fontSize: '10px', fontWeight: 'bold' }}
                />
                <Bar dataKey="you" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                <Bar dataKey="avg" fill="#374151" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const PipelinePanel = () => {
  return (
    <div className="bg-[#1E293B] border border-white/10 rounded-3xl p-8 h-full shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-black text-white tracking-tight uppercase italic">Pipeline Health</h2>
          <p className="text-xs text-gray-400 font-bold">R3.04M Total Visible Opportunity (Apr-Jun)</p>
        </div>
        <Flame className="text-orange-500 animate-pulse" size={20} />
      </div>

      <PipelineFunnel />

      <div className="space-y-3 mb-8">
        {pipelineLeads.map((lead, i) => (
          <div key={lead.name} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
            <div className="flex items-center space-x-3">
              <div className={cn(
                "w-1.5 h-8 rounded-full",
                lead.status === 'Hot' ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" : "bg-orange-500"
              )} />
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{lead.name}</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">{lead.type}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-mono font-black text-white">{lead.value}</p>
              <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{lead.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
        <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Conversion Targets</h4>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 font-bold">To Hit 100%</p>
            <p className="text-lg font-black text-white">38%</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <p className="text-xs text-gray-400 font-bold">To Hit 110%</p>
            <p className="text-lg font-black text-green-500">45%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlaybookPanel = ({ onDraft }: { onDraft: () => void }) => {
  return (
    <div className="bg-[#1E293B] border border-white/10 rounded-3xl p-6 h-full shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-lg font-black text-white tracking-tight uppercase italic">Personal Playbook</h2>
          <p className="text-xs text-gray-400 font-bold">The 16-day battle plan to Legend Mode</p>
        </div>
        <Rocket className="text-blue-400" size={20} />
      </div>

      <div className="space-y-8">
        {strategyPlaybook.map((stage, i) => (
          <div key={stage.title} className="relative pl-6 border-l border-white/10">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-[#121214]" />
            <div className="mb-4">
              <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest">{stage.title}</h3>
              <p className="text-[10px] text-gray-500 font-bold">{stage.timeframe}</p>
            </div>
            <ul className="space-y-3">
              {stage.actions.map((action, j) => (
                <li key={j} className="flex items-start space-x-3 group cursor-pointer">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-gray-600 group-hover:bg-blue-500 group-hover:scale-150 transition-all" />
                  <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors leading-relaxed">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10">
        <div className="flex items-center space-x-3 mb-4">
          <Zap className="text-yellow-400" size={18} />
          <h4 className="text-xs font-black text-white uppercase tracking-widest">Next Best Action</h4>
        </div>
        <p className="text-sm font-bold text-gray-300 mb-4">Follow up on the SMD - ALL - APRIL campaign (R500k) and the LGESA Brand Logo meetings (R250k) to secure April targets.</p>
        <button 
          onClick={onDraft}
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-blue-600/20"
        >
          Draft Follow-ups Now
        </button>
      </div>
    </div>
  );
};

const ImpactTable = () => {
  const scenarios = [
    { name: "Hit Target (100%)", extra: "R1.407M", daily: "R88k", projected: "100%", prob: "High", color: "text-blue-400" },
    { name: "Stretch (110%)", extra: "R1.592M", daily: "R97k", projected: "110%", prob: "Very Achievable", color: "text-cyan-400" },
    { name: "Legend Mode (125%)", extra: "R1.870M", daily: "R117k", projected: "125%", prob: "Possible", color: "text-pink-400" },
  ];

  return (
    <div className="bg-[#1E293B] border border-white/10 rounded-3xl overflow-hidden mt-8 shadow-2xl">
      <div className="p-6 border-b border-white/5 bg-gradient-to-r from-blue-500/10 to-transparent">
        <h2 className="text-lg font-black text-white tracking-tight uppercase italic">Projected Impact</h2>
        <p className="text-xs text-gray-400 font-bold">What-if scenarios for month-end close</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/5">
              <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Scenario</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Extra Revenue</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Daily Target</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Projected</th>
              <th className="px-6 py-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">Probability</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {scenarios.map((s) => (
              <tr key={s.name} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-sm font-bold text-white">{s.name}</td>
                <td className="px-6 py-4 text-sm font-mono font-bold text-gray-400">{s.extra}</td>
                <td className="px-6 py-4 text-sm font-mono font-bold text-gray-400">{s.daily}</td>
                <td className={cn("px-6 py-4 text-sm font-black", s.color)}>{s.projected}</td>
                <td className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-tighter">{s.prob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [command, setCommand] = useState('');
  const [isRateCardOpen, setIsRateCardOpen] = useState(false);
  const [isDraftingOpen, setIsDraftingOpen] = useState(false);
  const [notifications, setNotifications] = useState<{id: number, text: string}[]>([]);

  const addNotification = (text: string) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, text }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const handleExecute = () => {
    if (!command.trim()) return;
    addNotification(`Executing: ${command}`);
    setCommand('');
  };

  return (
    <div className="min-h-screen bg-[#0F172A] font-sans text-gray-300 selection:bg-blue-500/30 selection:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Notification Toast */}
        <div className="fixed top-24 right-8 z-[110] space-y-2">
          <AnimatePresence>
            {notifications.map(n => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-2xl border border-white/20 flex items-center space-x-3"
              >
                <Activity size={18} className="animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest">{n.text}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Listing Malfunction Alert */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-between shadow-lg shadow-orange-500/5"
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-orange-500/20 rounded-xl">
              <AlertTriangle className="text-orange-500" size={24} />
            </div>
            <div>
              <h3 className="text-sm font-black text-white uppercase tracking-tight">System Alert: Listing Malfunction</h3>
              <p className="text-xs text-orange-400 font-bold">48 SKU listings suppressed. Impact: ~R15k/day loss. <a href="https://takealot-ops.osmos.ai/downtime" target="_blank" className="underline hover:text-white transition-colors">View Downtime Log</a></p>
            </div>
          </div>
          <button 
            onClick={() => addNotification("Alerting Ops Team...")}
            className="px-4 py-2 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-orange-600 transition-all"
          >
            Fix Now
          </button>
        </motion.div>

        {/* Critical Alert */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-between shadow-lg shadow-red-500/5"
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-red-500/20 rounded-xl">
              <ShieldAlert className="text-red-500" size={24} />
            </div>
            <div>
              <h3 className="text-sm font-black text-white uppercase tracking-tight">Status: Critical</h3>
              <p className="text-xs text-red-400 font-bold">Shortfall of R1.4M detected. Trajectory indicates 59.9% achievement. Intervention required.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsRateCardOpen(true)}
            className="hidden md:flex items-center space-x-2 px-4 py-2 bg-red-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-red-600 transition-all"
          >
            <BarChart3 size={14} />
            <span>View Rate Card</span>
          </button>
        </motion.div>

        <ScoreboardCard />
        
        <VelocityPanel />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PipelinePanel />
          <div className="space-y-8">
            <PlaybookPanel onDraft={() => setIsDraftingOpen(true)} />
            <Top5Brands />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <WalletAlerts />
          <GetawayPlan />
        </div>

        <ImpactTable />

        <ClientPortfolio />

        <TargetOutlook />

        {/* System Integration Panel */}
        <div className="mt-8 bg-[#1E293B] border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="text-green-400" size={20} />
              <h2 className="text-lg font-black text-white tracking-tight uppercase italic">OnlineSales.ai Integration</h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Connected</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">Credentials</p>
              <div className="space-y-1">
                <p className="text-xs font-mono text-gray-300">Agency ID: <span className="text-white">105</span></p>
                <p className="text-xs font-mono text-gray-300">Client ID: <span className="text-white">100002</span></p>
              </div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">API Endpoints</p>
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-blue-400 truncate">tal.o-s.io</p>
                <p className="text-[10px] font-mono text-blue-400 truncate">tal-ba.o-s.io</p>
              </div>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-black text-gray-500 uppercase mb-2 tracking-widest">Auth Status</p>
              <div className="flex items-center space-x-2">
                <div className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded text-[9px] font-black text-green-500 uppercase">Token Valid</div>
                <span className="text-[9px] font-mono text-gray-600">9f92...c73a</span>
              </div>
            </div>
          </div>
        </div>

        {/* Command Center */}
        <div className="mt-12 bg-[#121214] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare className="text-blue-500" size={20} />
            <h2 className="text-lg font-black text-white tracking-tight uppercase italic">Command Center</h2>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Update dash – closed RXXk with [Buyer]..." 
              className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-6 pr-32 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-white"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleExecute()}
            />
            <button 
              onClick={handleExecute}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-gray-200 transition-all"
            >
              Execute
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { label: "Update pipeline", cmd: "Syncing with Salesforce..." },
              { label: "Generate 1-on-1 deck", cmd: "Preparing Kelvin's deck..." },
              { label: "Draft WhatsApps", cmd: "Opening drafting tool..." },
              { label: "Looker: Pipeline", url: "https://takealot.cloud.looker.com/dashboards/9899?Owner=Mongezi+Sikiti" },
              { label: "Looker: Transactions", url: "https://takealot.cloud.looker.com/dashboards/9776?Account+Owner=Mongezi+Sikiti" }
            ].map(tag => (
              <button 
                key={tag.label} 
                onClick={() => {
                  if ('url' in tag) window.open(tag.url, '_blank');
                  else addNotification(tag.cmd);
                }}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        <footer className="mt-16 pb-12 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <BarChart3 size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Mongezi Dashboard v3.0 • Fully Interactive</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-blue-500 cursor-pointer hover:text-blue-400" onClick={() => setIsRateCardOpen(true)}>
              <ShieldAlert size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest underline">Legal & Rate Card</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">FY26 April Cycle</span>
          </div>
        </footer>
      </main>

      <RateCardModal isOpen={isRateCardOpen} onClose={() => setIsRateCardOpen(false)} />
      
      <Modal isOpen={isDraftingOpen} onClose={() => setIsDraftingOpen(false)} title="Draft Follow-up Messages">
        <div className="space-y-6">
          <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
            <h4 className="text-xs font-black text-blue-400 uppercase mb-2">Template: High-Value Follow-up</h4>
            <p className="text-sm text-gray-300 leading-relaxed italic">
              "Hi [Buyer Name], following up on our discussion regarding the SMD April campaign. We've seen a 43% GMV uplift on similar placements recently. Would you like to lock in the R500k allocation today?"
            </p>
          </div>
          <div className="flex space-x-4">
            <button onClick={() => addNotification("Copied to clipboard!")} className="flex-1 py-3 bg-blue-600 text-white text-xs font-black uppercase rounded-xl">Copy to WhatsApp</button>
            <button onClick={() => addNotification("Email drafted!")} className="flex-1 py-3 bg-white/10 text-white text-xs font-black uppercase rounded-xl border border-white/10">Draft Email</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
