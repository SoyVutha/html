import HeaderBox from "@/components/ui/HeaderBox"
import TotalBalanceBox from "@/components/ui/TotalBalanceBox"
const page = () => {
  const LoggedIn={firstname:" Vutha"}
  return (
    <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox type="greeting" title="Welcome" user={LoggedIn?.firstname||'Guest'} subtext="Access and manage your account and transaction efficiently"  />
            <TotalBalanceBox  accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}   />
          </header>

        </div>
    </section>
  )
}

export default page