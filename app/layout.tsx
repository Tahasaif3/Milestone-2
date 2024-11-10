import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className="container">
            <p>&copy; 2024 SMIT Hyderabad. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}