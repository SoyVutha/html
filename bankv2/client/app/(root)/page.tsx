import HeaderBox from "@/components/ui/HeaderBox"
import TotalBalanceBox from "@/components/ui/TotalBalanceBox"
import RightSidebar from "@/components/ui/RightSidebar"
 from "@/components/ui/BankCard"
const page = () => {
  const LoggedIn={firstName:" Duck",lastName:"Quack",email:"V010utha@gmail.com"}
  return (
    <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox type="greeting" title="Welcome" user={LoggedIn?.firstName||'Guest'} subtext="Access and manage your account and transaction efficiently"  />
            <TotalBalanceBox  accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}   />
          </header>

        Recent transaction
        </div>
      <RightSidebar user={LoggedIn} transactions={[]} banks={[{},{}]} />
    </section>
  )
}

export default page