import "../styles/global.css";
import Navigation from "../components/navigation";
//root layout


export const metadata = {
  title: {
    template :  '%s | Newyork Times',
    default: 'Newyork Times',
  },
  description: 'Welcome to Newyork Times',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/*  crossorigin  */}
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Imbue:opsz,wght@10..100,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
