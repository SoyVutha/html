"use client";
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/icons/logo.svg"
import { sidebarLinks } from "../../constants/index"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const Sidebar = ({user}:SiderbarProps) => {
    const path=usePathname();
    
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            
            <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
            <Image className="size-[24px] max-xl:size-14" alt="horizon logo" src={logo} width={34} height={34}/>
            <h1 className="sidebar-logo">Horizon</h1></Link>
            
            {sidebarLinks.map((item)=>{
                const isActive=path===item.route|| path.includes(item.route)||path.startsWith(item.route);
                return(
                    <Link href={item.route} key={item.label} className={`flex items-center gap-2 ${cn('sidebar-link', {'bg-bank-gradient': isActive})}`}>
                        <Image src={item.imgURL} alt="pic" width={24} height={24}  className={cn({"brightness-75 invert-0": isActive})}></Image>
                        <p className={cn("sidebar-label", { "!text-white": isActive })}>{item.label}</p>
                        </Link>
                )
            })}
            {/* USER */}

        </nav>
        {/* FOOTER */}
    </section>
  )
}

export default Sidebar