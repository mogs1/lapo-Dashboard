import {
  Home, CreditCard, Users, FileText, Settings, DollarSign,
  TrendingUp, Package, Lock, UserCheck, LogOut, User,
  BarChart3, Shield, Activity, Hourglass, Banknote
} from 'lucide-react';
import type { MenuItem, ChartDataPoint, CardStatusData, CardRequest, MetricCard } from '../types/index';

export const menuItems: MenuItem[] = [
  { id: 'dashboard', icon: Home, label: 'Dashboard' },
  { id: 'branches', icon: Package, label: 'Branches' },
  { id: 'roles', icon: Users, label: 'Roles' },
  { id: 'users', icon: User, label: 'Users' },
  { id: 'card-scheme', icon: CreditCard, label: 'Card Scheme' },
  { id: 'card-profile', icon: FileText, label: 'Card Profile' },
  { id: 'card-request', icon: CreditCard, label: 'Card Request' },
  { id: 'stock', icon: Package, label: 'Stock' },
  { id: 'cards', icon: CreditCard, label: 'Cards' },
  { id: 'block-unblock', icon: Lock, label: 'Block/Unblock Card' },
  { id: 'authorization-list', icon: UserCheck, label: 'Authorization List' },
  { id: 'authorization-queue', icon: Shield, label: 'Authorization Queue' },
  { id: 'trail', icon: Activity, label: 'Trail' },
  { id: 'account', icon: User, label: 'Account' }
];

export const monthlyIssuanceData: ChartDataPoint[] = [
  { month: 'May', Personalized: 52, Instant: 15 },
  { month: 'Jun', Personalized: 68, Instant: 25 },
  { month: 'Jul', Personalized: 35, Instant: 20 },
  { month: 'Aug', Personalized: 55, Instant: 18 },
  { month: 'Sep', Personalized: 48, Instant: 22 },
  { month: 'Oct', Personalized: 78, Instant: 28 },
  { month: 'Nov', Personalized: 72, Instant: 25 }
];

export const weeklyIncomeData: ChartDataPoint[] = [
  { day: 'Mon', value: 45 },
  { day: 'Tue', value: 52 },
  { day: 'Wed', value: 35 },
  { day: 'Thu', value: 48 },
  { day: 'Fri', value: 65 },
  { day: 'Sat', value: 58 },
  { day: 'Sun', value: 78 }
];

export const cardStatusData: CardStatusData[] = [
  { name: 'Active', value: 1960, color: '#01A4AF' },
  { name: 'Expired', value: 245, color: '#FFBA24' },
  { name: 'Inactive', value: 147, color: '#FF4457' },
  { name: 'Blocked', value: 65, color: '#8020E7' },
  { name: 'Lost', value: 33, color: '#014DAF' }
];

export const cardRequests: CardRequest[] = [
  { branch: 'Corporate', type: 'Instant', quantity: 10, status: 'Ready', statusColor: 'bg-green-100 text-green-800' },
  { branch: 'Corporate', type: 'Personalized', quantity: 10, status: 'In Progress', statusColor: 'bg-yellow-100 text-yellow-800' },
  { branch: 'Corporate', type: 'Personalized', quantity: 10, status: 'Acknowledged', statusColor: 'bg-blue-100 text-blue-800' },
  { branch: 'Corporate', type: 'Instant', quantity: 10, status: 'Pending', statusColor: 'bg-gray-100 text-gray-800' }
];

export const metricsData: MetricCard[] = [
  {
    title: 'Total Active Cards',
    value: '26,478',
    change: '+9%',
    changeType: 'positive',
    period: 'this month',
    icon: CreditCard,
    iconBg: 'text-blue-500'
  },
  {
    title: 'Total Personalized Cards',
    value: '15,703',
    change: '+8.5%',
    changeType: 'positive',
    period: 'this month',
    icon: CreditCard,
    iconBg: 'text-purple-500'
  },
  {
    title: "Today's Revenue",
    value: '₦9.3M',
    change: '+6%',
    changeType: 'positive',
    period: 'vs yesterday',
    icon: Banknote,
    iconBg: 'text-green-500'
  },
  {
    title: 'Pending Requests',
    value: '38',
    change: 'Requires attention',
    changeType: 'negative',
    period: '',
    icon: Hourglass,
    iconBg: 'text-orange-500'
  }
];