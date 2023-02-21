import Header from '@/components/header'
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import './globals.css'
import Providers from './Providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <NavBar />
          <SearchBar />
          {children}
        </Providers>

      </body>
    </html>
  )
}
