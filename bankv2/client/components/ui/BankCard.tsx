import { formatAmount } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import Paypass from '../../public/icons/Paypass.svg'
import mastercard from '../../public/icons/mastercard.svg'
import visa from '../../public/icons/visa.svg'
import Lines from '../../public/icons/Lines.svg'

const BankCard = ({account,userName,showBalance}:CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
      <div className="bank-card_content">
        <div>
          <h1 className="text-16 font-semibold text-white">{account.name || userName}</h1>
          <p className="font-ibm-plex-serif font-black text-white">
            {formatAmount(account.currentBalance)};
          </p>
        </div>
        <article className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h1 className="text-12 font-semibold text-white ">{userName}</h1>
            <h2 className="text-12 font-semibold text-white "> ●● / ●●</h2>
          </div>
          <p className="text-14 font-semibold text-white tracking-[2px]"> ●●●● ●●●● ●●●●<span className="text-16"> 1234</span></p>
        </article>
      </div>

      <div className="bank-card_icon">
        <Image src={Paypass} alt="paypass" width={20} height={24}  ></Image>
        <Image src={mastercard} alt="mastercard" width={45} height={32}></Image>
      </div>

      <Image src={Lines} width={360} height={190} alt="line" className="absolute top-0 left-0"></Image>
      </Link>
    </div>
  )
}

export default BankCard