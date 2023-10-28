import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import HomeTabs from './components/HomeTabs/HomeTabs'
import styles from './styles.module.css'
import classNames from 'classnames'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export const dynamic = 'force-dynamic'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <>
      <div className={classNames(styles.firstPage, "w-full", "flex")}>
        <div className={classNames(styles.backgroundImage, "w-full")} />
        <div className={styles.firstPageContainer}>
          <div className={styles.skullsLogoContainer}>
            <img src='/images/skulls-logo.png'></img>
          </div>
          <div className={styles.skullsBoxingLeagueContainer}>
            <img src='/images/Skulls-2.svg'></img>
            <p className={styles.presentationText}>
              Découvrez l'adrénaline pure et la passion du noble art avec notre ligue de boxe ! <br></br>Que vous soyez débutant ou champion confirmé, notre communauté accueille tous les amoureux de la boxe. <span>Êtes-vous prêt à relever le défi ?</span>
            </p>
            {/* <Sheet>
              <SheetTrigger>
                <Button className='bg-primaryRed text-primaryWhite'>Je participe</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" value="@peduarte" className="col-span-3" />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet> */}
            <Button className='bg-primaryRed text-primaryWhite'>Je participe</Button>
          </div>
        </div>
        {/* <div className={classNames(styles.transitionPattern, 'w-full')}>
          <h2 className='text-primaryWhite'>Voir la league</h2>
        </div> */}
      </div >
      <div className={classNames(styles.secondPage, "w-full", "flex", "justify-center")}>
        <HomeTabs />
      </div>
    </>
  )
}
