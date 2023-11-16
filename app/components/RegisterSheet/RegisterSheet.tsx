'use client';

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import styles from './RegisterSheet.module.css'
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowRight, HeartPulse, Terminal, UserCircle2 } from 'lucide-react';

export default function RegisterSheet() {
  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) document.getElementById('body')?.classList.add(styles.fullHeight);
    else {
      setTimeout(() => {
        document.getElementById('body')?.classList.remove(styles.fullHeight);
      }, 500);
    }
  }

  return (
    <Sheet onOpenChange={handleOpenChange}>
      <SheetTrigger>
        <Button>Je souhaite rejoindre la ligue <ArrowRight className="text-primaryWhite h-6 w-6 ms-2" /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Je souhaite m'inscrire ?</SheetTitle>
          <SheetDescription>
            Si vous ne faites pas encore partie de la ligue, suivez les étapes suivantes.
          </SheetDescription>
        </SheetHeader>
        <div className={styles.alertContainer}>
          <Alert className='bg-secondaryBlack mb-4'>
            <HeartPulse className="text-primaryRed h-6 w-6" />
            <AlertTitle className='text-primaryWhite' style={{ paddingLeft: "37px" }}>Lisez le réglement</AlertTitle>
            <AlertDescription className='text-primaryWhite' style={{ paddingLeft: "37px" }}>
              Lisez les règles et informations de la Teq-Paf Boxing League. Vous y retrouverez toutes les informations concernant les modalités d'inscription, de rémunération, les contraintes d'équipements...
            </AlertDescription>
          </Alert>
          <Alert className='bg-secondaryBlack my-4'>
            <HeartPulse className="text-primaryRed h-6 w-6" />
            <AlertTitle className='text-primaryWhite' style={{ paddingLeft: "37px" }}>Passez votre visite médicale</AlertTitle>
            <AlertDescription className='text-primaryWhite' style={{ paddingLeft: "37px" }}>
              La Teq-Paf Boxing League travail en collaboration avec le LSMD afin d'assurer votre sécurité. Pour y parvenir, nous avons mit en place une visite médical obligatoire pour contrôler votre aptitude à rejoindre ou non la ligue.
            </AlertDescription>
          </Alert>
          <Alert className='bg-secondaryBlack my-4'>
            <UserCircle2 className="text-primaryRed h-6 w-6" />
            <AlertTitle className='text-primaryWhite' style={{ paddingLeft: "37px" }}>Créez votre profil de combattant(e)</AlertTitle>
            <AlertDescription className='text-primaryWhite' style={{ paddingLeft: "37px" }}>
              Envoyer un message sur le Life Invader à <strong>Rhys Everhart</strong> avec les informations suivantes :
              <ul className='list-disc pl-6'>
                <li>Nom, prénom et surnom de scène</li>
                <li>Numéro de téléphone</li>
                <li>IBAN</li>
                <li>Une photo de votre tête</li>
              </ul>
            </AlertDescription>
          </Alert>
          <Alert className='bg-secondaryBlack my-4'>
            <HeartPulse className="text-primaryRed h-6 w-6" />
            <AlertTitle className='text-primaryWhite' style={{ paddingLeft: "37px" }}>Inscrivez-vous dès maintenant à la prochaine session</AlertTitle>
            <AlertDescription className='text-primaryWhite' style={{ paddingLeft: "37px" }}>
              Félicitation et bienvenue dans la Teq-Paf Boxing League. Vous pouvez dès à présent vous inscrire pour la prochaine session de boxe. Pour cela, il vous suffit de suivre l'actualité du <strong><a href="https://lifeinvader.storylife.fr/s/tequi-la-la/" style={{ textDecorationLine: 'underline' }} target='_blank'>Tequi-la-la</a></strong> sur le Life Invader afin d'être tenu informé lors de l'ouverture des inscriptions. Vous pourrez ensuite vous inscrire pour combattre en suivant le guide situé dans <strong>Information {'>'} Comment s'inscrire pour combattre</strong>.
            </AlertDescription>
          </Alert>
        </div>
      </SheetContent>
    </Sheet>
  )
}