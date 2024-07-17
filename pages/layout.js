// These styles apply to every route in the application
import 'styles/global.css'
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}