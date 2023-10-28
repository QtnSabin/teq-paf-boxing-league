import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import Image from "next/image";

export default function Header() {
  return (
    <NavigationMenu className="w-max">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/ranks" legacyBehavior passHref>
            <Image
              src="/images/skulls-logo.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-secondaryRed">
          <Link href="/ranks" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-primaryWhite"}>
              Classement
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/rules" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-primaryWhite"}>
              Règlement
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/sponsors" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-primaryWhite"}>
              Partenaires
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/sponsors" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-primaryWhite"}>
              Qui sommes nous ?
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
