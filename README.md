# Trimmer - URL Shortener

**Trimmer** is a modern URL shortener application built with React, Tailwind CSS, Supabase, and Shadcn UI. It provides users with an intuitive interface to shorten URLs and track detailed analytics about each link. Users can see statistics such as the number of clicks, the devices used (mobile or desktop), and geographical locations of the clicks, all presented in interactive charts.

## Features

- **URL Shortening**: Easily shorten long URLs for convenient sharing.
- **Click Analytics**: Track detailed statistics about each shortened URL:
  - Number of clicks
  - Device type (mobile or desktop)
  - Geographical location of clicks
- **Responsive Design**: Optimized for both mobile and desktop devices.
- **User-Friendly Interface**: Built with React and styled with Tailwind CSS for a sleek and modern look.
- **Interactive Charts**: Visualize click data using interactive charts from Shadcn UI.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and creating responsive designs.
- **Supabase**: For backend services including database and authentication.
- **Shadcn UI**: For interactive charting and UI components.

## Getting Started

To get started with **Trimmer**, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/))

### Installation

1. **Clone the repository**

   ```bash
   git clone git remote add origin https://github.com/abduldevlop/Trimmer---URL-Shortner.git
   cd url-shorter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up Supabase**
4. **Create a .env file in the root of the project with the following content**
   ```bash
   VITE_SUPABASE_KEY=your_supabse_key
   VITE_SUPABASE_URL=your_supabse_url
   ```
5. **Run the application**

```bash
  npm run dev
```
