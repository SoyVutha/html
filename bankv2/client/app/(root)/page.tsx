import HeaderBox from "@/components/ui/HeaderBox"
import TotalBalanceBox from "@/components/ui/TotalBalanceBox"
import RightSidebar from "@/components/ui/RightSidebar"
import { getLoggedInUser } from "@/lib/actions/user.actions";

const page = async() => {
  const LoggedIn=await getLoggedInUser();
  return (
    <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox type="greeting" title="Welcome" user={LoggedIn?.name||'Guest'} subtext="Access and manage your account and transaction efficiently"  />
            <TotalBalanceBox  accounts={[]} totalBanks={1} totalCurrentBalance={1250.35}   />
          </header>

        Recent transaction
        </div>
      <RightSidebar user={getLoggedInUser()} transactions={[]} banks={[{currentBalance: 120.35},{currentBalance: 45.79}]} />
    </section>
  )
}

export default page