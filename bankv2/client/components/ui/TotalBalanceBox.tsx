"use client";
import AnimationCounter from "./AnimationCounter"
import DonutChart from "./DonutChart";
const TotalBalanceBox = ({accounts=[],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) => {
    const amounts = [1250, 2500, 3870];
    const labels = ["Bank 1", "Bank 2", "Bank 3"];
  return (
   <section className="total-balance">
    <div className="total-balance-chart">
        <DonutChart amounts={amounts} labels={labels} />
    </div>

    <div className="flex flex-col gap-6">
        <h2 className="header-2">
            Bank Accounts : {totalBanks}
        </h2>
    <div className="flex flex-col gap-2">
        <p className="total-balance-label">Total Current Balance </p>
        <div className="total-balance-amount flex-center gap-2">
            <AnimationCounter amount={totalCurrentBalance}/>
        </div>
    </div>
    </div>

   </section>
  )
}

export default TotalBalanceBox