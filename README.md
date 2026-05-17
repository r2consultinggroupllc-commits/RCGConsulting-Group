# R2 Consulting Group Website

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd r2-consulting
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env` and set the `VITE_GAS_URL`:
   ```bash
   cp .env.example .env
   # Edit .env and paste your Google Apps Script Web App URL
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

## Google Apps Script & Google Sheets Setup

### 1. Google Sheets Setup

Create a new Google Sheet to store the site data. Create three tabs (sheets) exactly matching these block headers (row 1):

**Sheet 1: `CaseStudies`**
- `id` (e.g., 1)
- `title` (e.g., Enterprise Architecture Overhaul)
- `industry` (e.g., Manufacturing)
- `challenge` (e.g., Legacy systems preventing cross-factory visibility.)
- `result` (e.g., Deployed unified tracking portal across 12 facilities.)
- `stat` (e.g., 40%)
- `statLabel` (e.g., Reduction in downtime)
- `visible` (e.g., TRUE or FALSE)

**Sheet 2: `Services`**
- `id` (e.g., 1)
- `division` (e.g., General Consulting)
- `title` (e.g., Strategic Advisory)
- `description` (e.g., Aligning your organizational objectives...)
- `icon` (e.g., target, briefcase, zap)

**Sheet 3: `ContactLeads`**
- `Timestamp`
- `Name`
- `Email`
- `Phone`
- `Company`
- `Division`
- `Message`

### 2. Google Apps Script Setup

1. Open your Google Sheet.
2. Go to **Extensions > Apps Script**.
3. Paste the contents of `Code.gs` from this project into `Code.gs` in the editor.
4. Click **Deploy > New deployment**.
5. Set the type to **Web app**.
6. Set:
   - Execute as: **Me** (`r2consultinggroupllc@gmail.com`)
   - Who has access: **Anyone**
7. Click **Deploy**. Authorize permissions when prompted.
8. Copy the "Web app URL".
9. Paste that URL into your `.env` file as `VITE_GAS_URL`.

### 3. Deploying the Site

This Vite project is ready for Netlify or Vercel.
- Build command: `npm run build`
- Output directory: `dist`
