import './globals.css';

export const metadata = {
  title: 'Aldrien Velasco | Developer & Creator',
  description: 'Developer, video editor, and filmmaker from the Philippines.',
  icons: {
    icon: '/Aldrien-Logo-Recovered.ico',
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';var r=t==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t;document.documentElement.setAttribute('data-theme',r)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
