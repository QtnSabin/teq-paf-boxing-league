'use client';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="fr">
      <body id="body">
        <main className="h-fit bg-primaryWhite flex flex-col items-center">
          {children}
        </main>
      </body>
    </html >
  )
}
