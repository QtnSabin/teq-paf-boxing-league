'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import styles from './InformationsTab.module.css'

export default function InformationsTab() {
  return (
    <Card>
      <CardContent className='pb-0'>
        <Accordion type="single" collapsible className={styles.Accordion}>
          <AccordionItem value="item-1">
            <AccordionTrigger className={styles.AccordionTrigger}>La Teq-Paf Boxing League</AccordionTrigger>
            <AccordionContent>
              <p>
                <span className={styles.tab}></span>La Teq-Paf Boxing League est une ligue de boxe mixte, innovante et dynamique qui révolutionne le paysage de la boxe contemporaine. Contrairement aux ligues traditionnelles, la SKULL Boxing League se distingue par son approche novatrice et divertissante, offrant aux spectateurs une expérience unique.

                <br></br><br></br><span className={styles.tab}></span>Cette compétition met en avant des combats de boxe de haute intensité entre certains des combattants les plus talentueux mais aussi amateurs. La ligue met l'accent sur l'excitation, le spectacle et l'engagement du public, créant ainsi une atmosphère électrisante lors de chaque événement.

                <br></br><br></br><span className={styles.tab}></span>Outre l'aspect compétitif, la ligue met en avant le respect, la discipline et l'éthique sportive, promouvant ainsi des valeurs positives au sein de la communauté de la boxe.

                <br></br><br></br><span className={styles.tab}></span>La SKULLS Boxing League offre également une opportunité unique aux participants talentueux de vivre de leur passion pour la boxe.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Les combats</AccordionTrigger>
            <AccordionContent>
              <span className={styles.tab}></span>La Teq-Paf boxing league est composée de 15 combats maximum par participants. Parmi ces 15 soirées d’affrontements, les 3 premières seront des matchs de placement afin de pouvoir débuter le classement réel. S’en suivra ensuite les 12 soirées ou le classement sera pris en compte pour les cash prizes.

              <br></br><br></br><span className={styles.tab}></span>Les combats se déroulent en BO3 (2 victoires gagnantes). Si les 2 combattants tombent inconscient tous les 2 lors du même round, cela reviendra à 1 victoire chacun. Si cela se produit lors du 3ème affrontement alors les 2 combattants seront égalités.
              <br></br><br></br><span className={styles.tab}></span>{'0 - 0 -> 1 - 1 -> draw'}
              <br></br><span className={styles.tab}></span>{'1 - 0 -> V - D'}
              <br></br><br></br><span className={styles.tab}></span>Afin de laisser le temps aux combattants de se faire soigner et de reprendre leurs esprits, les matchs se feront en quinconce. Une fois le round 1 du match 1 finis, le round 1 du match 2 débutera puis suivra ensuite le round 2 du match 1…

              <br></br><br></br><span className={styles.tab}></span>Le médecin sera disponible le temps de la soirée. Les frais médicaux des combattants seront payés par la ligue.

              <br></br><br></br><span className={styles.tab}></span>Il est possible d’annuler un combat. Pour cela, il faudra prévenir 48h à l’avance en envoyant un message au 651-2300. Lorsque vous prévenez au minimum 48h à l’avance, le match sera comptabilisé comme une défaite, les frais de participation ne vous seront pas rendus. Une fois dépassé le délai de 48h, si vous prévenez trop tard ou pas du tout, vous recevrez une pénalité de -3 points. Lorsque des annulations ont lieu, nous nous efforçons de proposer un nouveau combat de remplacement. Si cela n’est pas possible, le combattant censé combattre contre la personne qui a annulé sera désigné automatiquement vainqueur. Il ne gagnera cependant pas le cashprize correspondant à son palier, seul le prix de sa participation lui sera rendu.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Tenues de combat</AccordionTrigger>
            <AccordionContent>
              Prochainement
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Comment s'inscrire pour combattre ?</AccordionTrigger>
            <AccordionContent>
              <span className={styles.tab}></span>Pour participer à un combat, il faut au préalable s'être inscrit. Si vous ne faites pas encore partie de la ligue, cliquez ici.

              <br></br><br></br><span className={styles.tab}></span>Les inscriptions sont limitées à 1 combat maximum par semaine. Pour s’inscrire, il vous suffit d’envoyer un message au 651-2300 ainsi qu’un virement de 0000$ à l'association (iban: ???). Votre inscription ne sera validée qu’une fois le virement effectué.

              <br></br><br></br><span className={styles.tab}></span>Attention : les inscriptions seront clôturées 3 jours avant la date des combats.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Le classement</AccordionTrigger>
            <AccordionContent>
              <span className={styles.tab}></span>Le classement durera tout le temps de la ligue (15 combats). Il déterminera la position des combattant ainsi que le palier dans lequel ils sont

              <br></br><br></br><span className={styles.tab}></span>Lors du lancement de la ligue, les 3 premiers matchs de placements n’influenceront pas les paliers des participants. Tous les combattants seront dans le dernier palier. Une fois les matchs de placements terminés, les combattants seront classés selon leurs points accumulés durant les matchs de placements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>La rémunération</AccordionTrigger>
            <AccordionContent>
              <span className={styles.tab}></span>Les combattants sont rémunérés selon leurs performances dans la ligue. Leur classement détermine le cash prize des combats. Après le combat, le participant victorieux recevra la totalité du cash prize tandis que le perdant n’aura rien.

              <br></br><br></br><span className={styles.tab}></span>Les cash prizes peuvent changer durant tout le temps de la ligue. Cela peut varier en fonction du nombre de participants et principalement en fonction des dons que la ligue reçoit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Les sponsors</AccordionTrigger>
            <AccordionContent>
              Prochainement
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}