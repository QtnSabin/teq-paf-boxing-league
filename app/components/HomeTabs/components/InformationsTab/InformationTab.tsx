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
              <ul className={styles.list}>
                <li>La Teq-Paf Boxing League est une ligue de boxe mixte, innovante et dynamique qui révolutionne le paysage de la boxe contemporaine. Contrairement aux ligues traditionnelles, la Teq-Paf Boxing League se distingue par son approche novatrice et divertissante, offrant aux spectateurs une expérience unique.</li>

                <li>Cette compétition met en avant des combats de boxe de haute intensité entre certains des combattants les plus talentueux mais aussi amateurs. La ligue met l'accent sur l'excitation, le spectacle et l'engagement du public, créant ainsi une atmosphère électrisante lors de chaque événement.</li>

                <li>Outre l'aspect compétitif, la ligue met en avant le respect, la discipline et l'éthique sportive, promouvant ainsi des valeurs positives au sein de la communauté de la boxe.</li>

                <li>La Teq-Paf Boxing League offre également une opportunité unique aux participants talentueux de vivre de leur passion pour la boxe que vous soyez expérimenté au débuttant, profitez de chacun des cash prizes lors de vos victoires.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Les combats</AccordionTrigger>
            <AccordionContent>
              <ul className={styles.list}>
                <li>La Teq-Paf boxing league est composée de 11 combats maximum par participants. Parmi ces 11 soirées d’affrontements, les 3 premières seront des matchs de placement ayant pour objectif de créer la répartition des combattants dans le classement selon leurs niveaux. Les matchs de placement sont tout autant important que les suivants étant donné que les points pour le classment sont déja comptabilisés. Durant ces matchs de placement, les combats seront tirés au sort. S’en suivra ensuite les 8 soirées ou le classement déterminera le choix des opposants.</li>

                <li>Les combats se déroulent en <strong>BO3</strong> (2 rounds gagnants). Un round se termine une fois seulement une fois qu'un des 2 combattants est KO ou que l'arbitre en as décidé. Si les 2 combattants tombent inconscient tous les 2 lors du même round, cela reviendra à 1 victoire chacun. Si cela se produit lors du 3ème affrontement alors les 2 combattants seront égalités. Afin de laisser le temps aux combattants de se faire soigner et de reprendre leurs esprits, les matchs se feront en quinconce. Une fois le round 1 du match 1 finis, le round 1 du match 2 débutera puis suivra ensuite le round 2 du match 1… Un médecin sera disponible le temps de la soirée. Les frais médicaux des combattants seront payés par la ligue.</li>

                <li>Les coups interdits incluent les coups bas, les coups de coude et les coups à l'arrière de la tête. Un arbitre supervise le combat et peut donner des avertissements et choisir le vainqueur du round s'il y a manquement au réglement.</li>

                <li>Lors de vos combats, veuillez vous présenter sur les lieux 15 minutes avant l'heure de programmation.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Tenue de combat</AccordionTrigger>
            <AccordionContent>
              <ul className={styles.list}>
                <li>La tenue de combat du combattant ne doit comporter aucun bijou ou accessoire. La tenue est composée d'une pair de chaussure adapté, ainsi que d'un short et d'un t-shirt/dévardeur.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Comment s'inscrire pour combattre ?</AccordionTrigger>
            <AccordionContent>
              <ul className={styles.list}>
                <li>Pour participer à un combat, il faut au préalable s'être inscrit. Si vous ne faites pas encore partie de la ligue, cliquez ici.</li>

                <li>Les inscriptions sont limitées à <strong>1 combat maximum par semaine</strong>. Pour s’inscrire, il vous suffit d’envoyer un message à <strong><a href="https://lifeinvader.storylife.fr/u/rhyseverhart/home" style={{ textDecorationLine: 'underline' }}></a>Rhys Everhart</strong> sur le Life Invader ainsi qu’un virement de 3000$ à l'association (iban: ???). Votre inscription ne sera validée qu’une fois le virement effectué.</li>

                <li><strong>Attention :</strong> les inscriptions seront <strong>clôturées 3 jours avant</strong> la date des combats.</li>

                <li>Il est possible d’annuler un combat. Pour cela, il faudra prévenir avant la cloturation des inscriptions, soit <strong>3 jours</strong> avant la date du combat. Pour cela, il vous suffit d'envoyer un message sur le Life Invader à <strong><a href="https://lifeinvader.storylife.fr/u/rhyseverhart/home" style={{ textDecorationLine: 'underline' }}>Rhys Everhart</a></strong>. Lorsque vous prévenez dans le délais autorisé, aucune pénalité ne vous sera appliquée et la somme d'inscription de 3000$ vous sera rendu. Cependant, une fois les inscriptions cloturées, cela sera comptabilisé comme un forfait et donc une défaite. Il vous sera impossible de récupérer les frais de participation. Si jamais vous ne nous prévené pas de votre absence, une pénalité de <strong>-2</strong> points vous sera appliqué. Lorsque des annulations ont lieu, nous nous efforçons de proposer un nouveau combat de remplacement. Si cela n’est pas possible, le combattant censé combattre contre la personne qui a annulé sera désigné automatiquement vainqueur au même titre que si le combat avait eu lieu.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Le classement</AccordionTrigger>
            <AccordionContent>
              <ul className={styles.list}>
                <li>Lors du lancement de la ligue, comme évoqué dans <strong>#Les combats</strong>, les 3 premieres soirées seront constituées des matchs de placements. Tant que les matchs de placement ne seront pas terminés, les combattants seront tous situé dans le dernier palier ({'>='} 31). Une fois les matchs de placements terminés, les combattants seront classés selon leurs points accumulés durant les matchs de placements.</li>
                <li>Le classement durera tout le temps de la ligue (11 combats). Il déterminera la position des combattant ainsi que le palier dans lequel ils sont, ce qui déterminera leur cash prize.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Les cash prizes</AccordionTrigger>
            <AccordionContent>
              <ul className={styles.list}>
                <li>Les combattants sont rémunérés selon leurs performances dans la ligue. Leur classement détermine le cash prize des combats. Après le combat, le participant victorieux recevra la totalité du cash prize tandis que le perdant n’aura rien. La récompense du vainqueur sera toujours le cash prize le plus haut parmis les 2 combattants.</li>
                <li>Lors des 3 premières soirées (matchs de placement), les combattants recevront en cas de victoire le cash prize correspondant au dernier palier de la ligue ({'>=31'}).</li>
                <li>Nous nous réservons le droit de modifier les cash prizes tout du long de la ligue.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Les sponsors</AccordionTrigger>
            <AccordionContent>
              <ul className={styles.list}>
                <li>Les sponsors peuvent être des entreprises, des commerces indépendants, des ordanisations publiques... Devenir sponsor est possible à partir du moment ou vous disposez d'une image public à promouvoir. Pour toutes les demandes de sponsorisation, veuillez contacter <strong><a href="https://lifeinvader.storylife.fr/u/rhyseverhart/home" style={{ textDecorationLine: 'underline' }}>Rhys Everhart</a></strong> sur le Life Invader pour obtenir toutes les informations.</li>
                <li>Le contrat de sponsorisation de la ligue se terminera à la fin de la 7ème soirée (3 matchs de placement + 4 matchs officiels). Ce contrat pour bien sur être renouvelé pour les 4 matchs officiels suivants qui clotureront la ligue.</li>
                <li>Chaque sponsor à la possibilité de sponsoriser jursqu'à 2 combattants, cela devra être fait avant les 2 derniers matchs précédents la fin du contrat de sponsorisation avec la ligue. <strong>En tant que combattant</strong>, vous faire sponsoriser vous permettra de bénéficier d'une réduction de $1000 lors de vos incriptions aux combats (= $2000). De plus, vous profiterez également d'une remise de 30% sur vos séances d'entrainement au bar. Vous l'aurez compris, il est donc tout à votre avantage d'accepter les propositions des sponsors qui vous démarche.</li>
                <li>Un podium récompensant les meilleurs sponsors sera créé à la fin de la 7ème et 11ème soirée d'affrontement. Ce classement sera calculé en additionnant les points des combattants de chacun de leurs combattants. En cas d'égalité, le palmares des combattants sera pris en considération.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card >
  )
}