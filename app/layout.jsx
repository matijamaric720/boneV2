export const metadata = {
  title: 'Bone Travel Services',
  description: 'Bone Travel Services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}