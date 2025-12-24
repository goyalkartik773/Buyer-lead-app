<div align="center">

<!-- Professional Banner -->
<img src="./screeenshots/banner.jpeg" alt="BuyerLead Banner" width="100%" style="border-radius: 10px; margin-bottom: 20px;"/>

</div>

# 🏢 BuyerLead - Professional Lead Management System

<div align="center">

![BuyerLead Logo](https://img.shields.io/badge/BuyerLead-CRM-purple?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==)

**A modern, full-stack lead management system built with Next.js 15, TypeScript, and Prisma**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat&logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Features](#-features) • [Screenshots](#-screenshots) • [Installation](#-installation) • [Usage](#-usage) • [API](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage Guide](#-usage-guide)
- [Database Schema](#-database-schema)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

**BuyerLead** is a comprehensive, enterprise-grade lead management system designed for real estate professionals and sales teams. It provides a complete solution for capturing, tracking, and converting buyer leads with an intuitive interface and powerful features.

### Why BuyerLead?

- ✅ **Professional Design** - Clean, corporate UI suitable for business environments
- ✅ **Full CRUD Operations** - Create, Read, Update, Delete leads with ease
- ✅ **Advanced Filtering** - Search and filter by multiple criteria
- ✅ **Bulk Operations** - Import/Export leads via CSV
- ✅ **Complete Audit Trail** - Track all changes with detailed history
- ✅ **Type-Safe** - Built with TypeScript for reliability
- ✅ **Responsive** - Works perfectly on desktop, tablet, and mobile
- ✅ **Dark Mode** - Full dark mode support

---

## 📸 Screenshots

### 🏠 Homepage
<h2><em>Modern, professional homepage with feature highlights and call-to-action</em></h2>
<div align="center">
  <img src="./screeenshots/dashboard1.png" alt="BuyerLead Homepage" width="800"/>
</div>

<div align="center">
  <img src="./screeenshots/dashboard2.png" alt="BuyerLead Homepage" width="800"/>
</div>

<div align="center">
  <img src="./screeenshots/dashboard3.png" alt="BuyerLead Homepage" width="800"/>
</div>

### 📊 Dashboard - Leads List
<h2><em>Complete leads overview with search, filters, and status badges</em></h2>
<div align="center">
  <img src="./screeenshots/view.png" alt="Leads Dashboard" width="800"/>
</div>

### ➕ Create New Lead
<h2><em>Comprehensive form with validation and professional styling</em></h2>
<div align="center">
  <img src="./screeenshots/new.png" alt="Create Lead Form" width="800"/>
</div>

### ✏️ Edit Lead & History
<h2><em>Edit lead details with complete change history timeline</em></h2>
<div align="center">
  <img src="./screeenshots/edit1.png" alt="Edit Lead" width="800"/>
</div>

<div align="center">
  <img src="./screeenshots/edit2.png" alt="Edit Lead" width="800"/>
</div>

### 📁 CSV Import
<h2><em>Bulk import with drag-and-drop and validation error reporting</em></h2>
<div align="center">
  <img src="./screeenshots/import.png" alt="CSV Import" width="800"/>
</div>

---

## ✨ Features

### 🎨 **User Interface**
- **Modern Dashboard** - Clean, professional interface with real-time statistics
- **Responsive Design** - Optimized for all screen sizes
- **Dark Mode Support** - Automatic theme switching based on system preferences
- **Professional Color Scheme** - Purple and emerald gradient theme
- **Smooth Animations** - Subtle, professional transitions and effects

### 📊 **Lead Management**
- **Create Leads** - Comprehensive form with validation
- **Edit Leads** - Update lead information with change tracking
- **View Details** - Complete lead profile with history timeline
- **Delete Leads** - Safe deletion with confirmation
- **Status Tracking** - 7 lead stages (New, Qualified, Contacted, Visited, Negotiation, Converted, Dropped)

### 🔍 **Search & Filter**
- **Global Search** - Search across name, phone, and email
- **Multi-Filter** - Filter by city, property type, status, and timeline
- **Real-time Results** - Instant search with debouncing
- **URL Parameters** - Shareable filtered views

### 📁 **Bulk Operations**
- **CSV Import** - Bulk import up to 200 leads
- **CSV Export** - Export filtered leads to CSV
- **Validation** - Row-by-row validation with detailed error reporting
- **Partial Import** - Import valid rows even if some fail

### 📝 **Audit Trail**
- **Change History** - Complete log of all modifications
- **Field-Level Tracking** - See exactly what changed
- **Timestamps** - When each change occurred
- **User Attribution** - Who made each change

### 🔐 **Data Validation**
- **Schema Validation** - Zod-based validation on client and server
- **Type Safety** - TypeScript ensures data integrity
- **Error Messages** - Clear, actionable error feedback
- **Required Fields** - Enforced data completeness

---

## 🛠 Tech Stack

### Frontend
- **[Next.js 15.5.3](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Utility-first CSS
- **[date-fns](https://date-fns.org/)** - Date formatting

### Backend
- **[Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)** - Server-side logic
- **[Prisma 6](https://www.prisma.io/)** - Type-safe ORM
- **[SQLite](https://www.sqlite.org/)** - Database (development)
- **[Zod](https://zod.dev/)** - Schema validation
- **[csv-parser](https://www.npmjs.com/package/csv-parser)** - CSV processing

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Turbopack](https://turbo.build/pack)** - Fast bundler

---

## 🚀 Installation

### Prerequisites

- **Node.js** 18.17 or higher
- **npm** or **yarn** or **pnpm**
- **Git**

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/buyerlead-app.git
cd buyerlead-app

# Install dependencies
npm install

# Set up the database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"

# Optional: For production
# DATABASE_URL="postgresql://user:password@localhost:5432/buyerlead"
```

### Database Setup

```bash
# Generate Prisma Client
npx prisma generate

# Create database and tables
npx prisma db push

# (Optional) Seed database with sample data
npx prisma db seed
```

### Prisma Studio

View and edit your database with Prisma Studio:

```bash
npx prisma studio
```

---

## 📖 Usage Guide

### 1. Creating a Lead

1. Navigate to the dashboard
2. Click **"Add New Lead"** button
3. Fill in the required fields:
   - Full Name (required)
   - Phone (required, 10 digits)
   - City (required)
   - Property Type (required)
   - Purpose (Buy/Rent)
   - Timeline (required)
   - Source (required)
4. Optional fields:
   - Email
   - BHK (for Apartment/Villa)
   - Budget Range
   - Notes
   - Tags
5. Click **"Create Lead"**

### 2. Viewing Leads

**Dashboard View:**
- See all leads in a table format
- View key information at a glance
- Status badges with color coding
- Quick actions (Edit button)

**Detail View:**
- Click on any lead to see full details
- View complete history timeline
- See all field values
- Track all changes made

### 3. Editing a Lead

1. Click **"Edit"** on any lead
2. Modify any fields
3. Click **"Update Lead"**
4. Changes are automatically tracked in history

### 4. Searching & Filtering

**Search:**
- Type in the search box
- Searches across name, phone, and email
- Results update in real-time

**Filters:**
- **City** - Filter by location
- **Property Type** - Apartment, Villa, Plot, etc.
- **Status** - Lead stage
- **Timeline** - Purchase timeframe

**Combine Filters:**
- Use multiple filters together
- Filters are applied with AND logic
- URL updates for shareable links

### 5. Importing Leads (CSV)

**Prepare CSV File:**

```csv
fullName,email,phone,city,propertyType,bhk,purpose,budgetMin,budgetMax,timeline,source,notes,tags,status
John Doe,john@example.com,9876543210,Chandigarh,Apartment,2,Buy,5000000,8000000,0-3m,Website,Looking for 2BHK,Hot Lead,New
Jane Smith,jane@example.com,9876543211,Mohali,Villa,3,Buy,10000000,15000000,3-6m,Referral,Prefers gated community,Family,Qualified
```

**Import Steps:**
1. Go to **"Import CSV"** page
2. Click **"Choose CSV File"**
3. Select your file (max 200 rows)
4. Click **"Import Leads"**
5. Review results:
   - Success: Shows count of imported leads
   - Errors: Shows table with row numbers and issues

**Required CSV Columns:**
- `fullName` - Text (2-100 characters)
- `phone` - 10 digits
- `city` - Chandigarh, Mohali, Zirakpur, Panchkula, Other
- `propertyType` - Apartment, Villa, Plot, Office, Retail
- `purpose` - Buy, Rent
- `timeline` - 0-3m, 3-6m, >6m, Exploring
- `source` - Website, Referral, Walk-in, Call, Other

**Optional CSV Columns:**
- `email` - Valid email format
- `bhk` - 1, 2, 3, 4, Studio (required for Apartment/Villa)
- `budgetMin` - Number
- `budgetMax` - Number (must be >= budgetMin)
- `notes` - Any text
- `tags` - Comma-separated
- `status` - Defaults to "New"

### 6. Exporting Leads (CSV)

1. Apply any filters you want
2. Click **"Export CSV"** button
3. File downloads automatically
4. Includes all filtered leads
5. All fields included in export

---

## 🗄 Database Schema

### Buyer Table

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | String | Yes | Unique identifier (CUID) |
| `fullName` | String | Yes | Lead's full name |
| `email` | String | No | Email address |
| `phone` | String | Yes | 10-digit phone number |
| `city` | String | Yes | City location |
| `propertyType` | String | Yes | Type of property |
| `bhk` | String | No | Bedrooms (for Apartment/Villa) |
| `purpose` | String | Yes | Buy or Rent |
| `budgetMin` | Int | No | Minimum budget |
| `budgetMax` | Int | No | Maximum budget |
| `timeline` | String | Yes | Purchase timeframe |
| `source` | String | Yes | Lead source |
| `notes` | String | No | Additional notes |
| `tags` | String | No | Comma-separated tags |
| `status` | String | Yes | Lead status (default: "New") |
| `ownerId` | String | Yes | User who owns the lead |
| `createdAt` | DateTime | Yes | Creation timestamp |
| `updatedAt` | DateTime | Yes | Last update timestamp |

### BuyerHistory Table

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | String | Yes | Unique identifier (CUID) |
| `buyerId` | String | Yes | Reference to Buyer |
| `changedBy` | String | Yes | User who made change |
| `diff` | JSON | Yes | Changed fields (old/new values) |
| `createdAt` | DateTime | Yes | Change timestamp |

### Relationships

```
Buyer (1) ←→ (N) BuyerHistory
```

---

## 🔌 API Documentation

### Server Actions

All API calls use Next.js Server Actions for type-safe, server-side operations.

#### `createBuyer(formData: FormData)`

Creates a new buyer lead.

**Parameters:**
- `formData` - Form data containing lead information

**Returns:**
```typescript
{
  message: string;
  errors?: ZodIssue[];
}
```

**Example:**
```typescript
const result = await createBuyer(formData);
if (result.errors) {
  // Handle validation errors
} else {
  // Success
}
```

#### `updateBuyer(buyerId: string, updatedAt: Date, formData: FormData)`

Updates an existing buyer lead.

**Parameters:**
- `buyerId` - Lead ID
- `updatedAt` - Last known update time (for optimistic concurrency)
- `formData` - Updated form data

**Returns:**
```typescript
{
  message: string;
  errors?: ZodIssue[];
}
```

#### `importBuyersFromCsv(formData: FormData)`

Imports leads from CSV file.

**Parameters:**
- `formData` - Contains CSV file

**Returns:**
```typescript
{
  message: string;
  errors: ZodIssue[];
  validationErrors: {
    row: number;
    errors: ZodIssue[];
  }[];
}
```

#### `exportBuyersToCsv(searchParams: Record<string, string>)`

Exports leads to CSV format.

**Parameters:**
- `searchParams` - Current filters (city, status, etc.)

**Returns:**
- CSV string

---

## 📁 Project Structure

```
buyerlead-app/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── dev.db                 # SQLite database (dev)
├── public/
│   ├── apple-touch-icon.png   # iOS icon
│   ├── favicon-16x16.png      # Favicon 16x16
│   ├── favicon-32x32.png      # Favicon 32x32
│   └── site.webmanifest       # PWA manifest
├── src/
│   ├── actions/
│   │   └── buyer.ts           # Server actions
│   ├── app/
│   │   ├── buyers/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx   # Edit lead page
│   │   │   ├── import/
│   │   │   │   └── page.tsx   # CSV import page
│   │   │   ├── new/
│   │   │   │   └── page.tsx   # New lead page
│   │   │   └── page.tsx       # Leads list page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── EditBuyerForm.tsx  # Edit form component
│   │   ├── ExportButton.tsx   # CSV export button
│   │   ├── NewBuyerForm.tsx   # New lead form
│   │   └── SearchAndFilters.tsx # Search/filter UI
│   ├── lib/
│   │   └── prisma.ts          # Prisma client
│   └── schemas/
│       └── buyer.ts           # Zod validation schemas
├── .env                       # Environment variables
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

---

## 💻 Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format

# Database commands
npx prisma studio        # Open database GUI
npx prisma generate      # Generate Prisma Client
npx prisma db push       # Push schema changes
npx prisma migrate dev   # Create migration
```

### Code Quality

**Linting:**
```bash
npm run lint
```

**Type Checking:**
```bash
npx tsc --noEmit
```

### Database Migrations

```bash
# Create a new migration
npx prisma migrate dev --name your_migration_name

# Apply migrations
npx prisma migrate deploy

# Reset database (WARNING: Deletes all data)
npx prisma migrate reset
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables for Production

```env
DATABASE_URL="postgresql://user:password@host:5432/database"
```

### Database Migration for Production

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate deploy
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue: "Module not found" error**
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Issue: Database connection failed**
```bash
# Solution: Regenerate Prisma Client
npx prisma generate
npx prisma db push
```

**Issue: Import fails with "Database import failed"**
- Check CSV format matches requirements
- Ensure budget values are numbers
- Verify all required fields are present
- See `DATABASE_IMPORT_FIX.md` for detailed fix

**Issue: Build fails**
```bash
# Solution: Clear Next.js cache
rm -rf .next
npm run build
```

### Getting Help

- 📖 Check the [documentation](#-usage-guide)
- 🐛 [Open an issue](https://github.com/yourusername/buyerlead-app/issues)
- 💬 [Discussions](https://github.com/yourusername/buyerlead-app/discussions)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation
- Ensure code passes linting

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What This Means

You are free to:
- ✅ Use this project commercially
- ✅ Modify and distribute
- ✅ Use privately
- ✅ Sublicense

**Requirements:**
- Include the original copyright notice
- Include the license text

**Limitations:**
- No warranty provided
- No liability

---

## 👤 Author

**Kartik Goel**

- 🌐 Portfolio: [Your Portfolio URL]
- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 📧 Email: goyalkartik773@gmail.com
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) - Amazing React framework
- [Prisma Team](https://www.prisma.io/) - Excellent ORM
- [Vercel](https://vercel.com/) - Hosting platform
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Zod](https://zod.dev/) - TypeScript-first schema validation

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/buyerlead-app)
![GitHub language count](https://img.shields.io/github/languages/count/yourusername/buyerlead-app)
![GitHub top language](https://img.shields.io/github/languages/top/yourusername/buyerlead-app)
![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/buyerlead-app)
![GitHub issues](https://img.shields.io/github/issues/yourusername/buyerlead-app)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/buyerlead-app)
![GitHub](https://img.shields.io/github/license/yourusername/buyerlead-app)

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

## 📝 Changelog

### Version 1.0.0 (2025-01-01)
- ✅ Initial release
- ✅ Complete CRUD operations
- ✅ CSV import/export functionality
- ✅ Advanced search and filtering
- ✅ Complete audit trail
- ✅ Professional UI with dark mode
- ✅ Type-safe with TypeScript
- ✅ Comprehensive documentation

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and Prisma**

**BuyerLead** - Professional Lead Management System

[⬆ Back to Top](#-buyerlead---professional-lead-management-system)

</div>
