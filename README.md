# LAPO Fintech Dashboard

A modern, responsive dashboard application built for LAPO Microfinance Bank. This dashboard provides comprehensive analytics and management tools for card issuance, revenue tracking, and administrative functions.

![Dashboard Preview]()

## ✨ Features

### 📊 **Analytics & Visualization**
- Real-time metrics display with trend indicators
- Interactive stacked bar chart for monthly card issuance
- Weekly income tracking with smooth line charts
- Card status distribution with elegant donut chart
- Responsive data tables for card request management

### 🎨 **Modern UI/UX**
- Clean, professional design matching LAPO branding
- Smooth hover animations and transitions
- Fully responsive layout for all screen sizes
- Intuitive navigation with visual feedback
- Dark blue sidebar with orange accent colors

### 🛠️ **Quick Actions**
- Manage existing cards
- Issue instant cards
- Issue personalized cards
- Review card requests

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm 


## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx              # Navigation sidebar with hover effects
│   ├── Header.tsx               # Top header with search and user info
│   ├── QuickAccess.tsx          # Quick action buttons
│   ├── MetricCards.tsx          # Statistics display cards
│   ├── Charts.tsx               # Bar and line charts
│   ├── CardStatusChart.tsx      # Pie chart for card status
│   └── CardRequestsTable.tsx    # Data table for requests
├── data/
│   └── dashboardData.tsx        # Centralized data and configurations
├── types/
│   └── index.tsx                # TypeScript type definitions
└── Dashboard.tsx                # Main dashboard component
```

## 🔧 Configuration

## 📊 Data Customization

### Adding New Menu Items

Edit `data/dashboardData.tsx`:

```typescript
export const menuItems: MenuItem[] = [
  { id: 'new-feature', icon: YourIcon, label: 'New Feature' },
  // ... existing items
];
```

### Updating Chart Data

Modify the data arrays in `data/dashboardData.tsx`:

```typescript
export const monthlyIssuanceData: ChartDataPoint[] = [
  { month: 'Dec', Personalized: 85, Instant: 30 },
  // ... add more data points
];
```


## 🎨 Styling

The project uses Tailwind CSS for styling. Key design tokens:

- **Primary Colors**: Blue shades (`blue-600`, `blue-900`)
- **Accent Color**: Orange (`orange-500`)
- **Background**: Light gray (`gray-50`)
- **Cards**: White with subtle shadows

### Custom CSS Classes

Additional styling can be added to your CSS file:

```css
.custom-chart-tooltip {
  @apply bg-white border border-gray-200 rounded-lg shadow-lg p-3;
}

.sidebar-transition {
  @apply transition-all duration-200 ease-in-out;
}
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:

- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 1024px (adjusted grid)
- **Desktop**: > 1024px (full layout)

## 🔒 Security Considerations

- All data is stored in memory (no localStorage usage)
- TypeScript provides compile-time type safety
- Input validation should be added for production use
- API endpoints should be secured with proper authentication

## 🚀 Deployment

### Build for Production

```bash
npm run dev
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **LAPO Microfinance Bank** for the design inspiration
- **Recharts** for the beautiful chart components
- **Lucide React** for the icon library
- **Tailwind CSS** for the utility-first CSS framework
- **Cardinfra** for powering the backend infrastructure

