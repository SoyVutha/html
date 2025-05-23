import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Dropdownbar(){
    return(
        <DropdownMenu>
  <DropdownMenuTrigger>Pages ⮟</DropdownMenuTrigger>
  <DropdownMenuContent>
  <DropdownMenuSeparator />
  <DropdownMenuItem><a href="/Shop">Shop</a></DropdownMenuItem>
  <DropdownMenuItem><a href="/Blog">Blog</a></DropdownMenuItem>
  <DropdownMenuItem><a href="/About">About</a></DropdownMenuItem>
  <DropdownMenuItem><a href="/Contact">Contact</a></DropdownMenuItem>
  <DropdownMenuItem><a href="/FAQs">FAQs</a></DropdownMenuItem>
</DropdownMenuContent>

</DropdownMenu>
    )
}

