# Novocrust checkout

A crypto checkout that can sit on a page the way Stripe Checkout does. The home route renders `CryptoCheckoutWidget`. A second route collects recipient details. The same widget is bundled for embedding with Rollup (`src/checkout-widget.tsx`).

The npm package name is `novocrsut-assessment`.

## Stack

Next.js (App Router), React, TypeScript, Tailwind CSS, Ant Design, and `react-phone-input-2`. The embed build uses Rollup.

## Routes

| Path | What it is |
| --- | --- |
| `/` | Checkout widget |
| `/recipient-details` | Recipient details form |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run build` builds the Next.js app. `npm run build:widget:css` builds the widget stylesheet used by the embed.
