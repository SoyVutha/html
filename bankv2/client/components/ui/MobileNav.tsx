"use client"
import {Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle,SheetTrigger,SheetClose} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import hamburger from '../../public/icons/hamburger.svg'
import { sidebarLinks } from "../../constants/index"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import logo from "../../public/icons/logo.svg"

const MobileNav = ({user}:MobileNavProps) => {
    const path=usePathname();
  return (
    <section className="w-full max-w-[264px]" >
                         <Sheet>
                   <SheetTrigger>
                    <Image src={hamburger} alt="hamburger-icon" width={30} height={30 } className="cursor-pointer"></Image>
                   </SheetTrigger>
                   <SheetContent side="right" className="border-none bg-white">
                            <nav className="flex flex-col gap-4">
            
            <Link href="/" className=" flex cursor-pointer items-center gap-1 px-4">
            <Image className=" max-xl:size-14" alt="horizon logo" src={logo} width={34} height={34}></Image>
            <h1 className="font-inter font-bold text-[26px] text-black-1">Horizon</h1></Link>
            <div className="mobilenav-sheet">
                <SheetClose asChild>
                    <nav className="flex h-full flex-col gap-6 pt-10 text-white">
            {sidebarLinks.map((item)=>{
                const isActive=path===item.route|| path.includes(item.route)||path.startsWith(item.route);
                return(
                    <SheetClose asChild key={item.route}>
                    <Link href={item.route} key={item.label} className={`flex items-center gap-2 ${cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})}`}>
                        <Image src={item.imgURL} alt="pic" width={24} height={24}  className={cn({"brightness-200  invert-0": isActive})}></Image>
                        <p className={cn("text-16 font-bold text-black-2", { "text-white": isActive })}>{item.label}</p>
                        </Link>
                    </SheetClose>
                )
            })}         
                    </nav>
                </SheetClose>
            </div>
            
            {/* USER */}

        </nav>
                   </SheetContent>
                </Sheet>
    </section>
  )
}

export default MobileNav