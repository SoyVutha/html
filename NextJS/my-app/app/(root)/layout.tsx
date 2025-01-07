import Navbar from "../components/Navbar"
export default function Layout({ children }: { children: React.ReactNode }) //this line is must have (children: React.ReactNode) to avoid error
 {
  return (
    <main>
        <Navbar />
        {children}
    </main>
  )
}