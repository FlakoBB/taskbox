import '@/styles/globals.scss'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export const metadata = {
  title: 'TaskBox',
  description: 'Aplicación web de lista de tareas'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={jost.className}>{children}</body>
    </html>
  )
}
