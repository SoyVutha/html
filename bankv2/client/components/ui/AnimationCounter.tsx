import CountUp from "react-countup"
const AnimationCounter = ({amount}:{amount:number}) => {
  return (
    <div className="w-full">
        <CountUp decimal="," duration={1.5} decimals={2} prefix="$" end={amount}/>
    </div>
  )
}

export default AnimationCounter