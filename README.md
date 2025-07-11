# KhataPay

KhataPay is a lightweight digital-ledger web application designed for small businesses. It allows owners to add customers, record every cash-in and cash-out entry, and view running balances in real time. The codebase is prepared for future extensions such as PDF exports, SMS reminders, and graphical cash-flow reports.

## Key features

KhataPay lets you tag customers as payable or receivable, attach notes and files to each transaction, and view both per-customer and overall ledger summaries. Authentication is handled with JWT, the user interface is fully responsive and installable as a Progressive Web App, and the database layer enforces row-level multi-tenant security.

## Technology stack

The project is built with Next.js (App Router) on the front and back ends, Formik for form state, Yup or Joi for validation, Sequelize with PostgreSQL for persistence, Mantine for UI components, Axios for client-side requests, jsonwebtoken for stateless sessions, dotenv for configuration, cors for controlled cross-origin access, date-fns for date manipulation, and Recharts for upcoming visualisations.


## Getting started

Clone the repository, install dependencies, supply environment variables, run database migrations and seeds, then start the development server:

```bash
git clone https://github.com/<your-org>/khata-pay.git
cd khata-pay
npm install                                 # or pnpm install
cp .env.example .env                        # edit DB_URL, JWT_SECRET, etc.
npx sequelize db:migrate && npx sequelize db:seed:all
npm run dev                                 # open http://localhost:3000
```

For a production build:

```bash
npm run build && npm start
```

## Folder layout

```
app/            Next.js route handlers and pages
components/     Reusable React components
hooks/          Custom React hooks
models/         Sequelize models
services/       API and utility helpers
utils/          Pure helper functions with no side effects
configs/        Centralised configuration files
validators/     Yup / Joi schemas
constants/      Static values and enums
assets/         Images, icons, and other static files
```

## Contributing

Fork the repository, create a descriptive feature branch, follow the Prettier and ESLint guidelines included in the project, and submit a pull request when your work is ready for review. Clear commit messages and small, focused changes make the review process easier.

## License

KhataPay is released under the MIT License. You are free to use, modify, and distribute it as long as the license terms are respected.
