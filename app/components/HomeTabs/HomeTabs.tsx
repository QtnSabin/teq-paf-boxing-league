import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import RankingTable, { RankingTableProps } from '../RankingTable/RankingTable'
import classNames from 'classnames'
import styles from './HomeTabs.module.css';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


export default function HomeTabs() {
  const rankingTableData: RankingTableProps['data'] = [
    {
      status: "DOWN",
      displayName: "Rhys Everhart",
      surname: "Le surfeur",
      history: {
        win: 1,
        loss: 1,
        draw: 1
      },
      cashprize: '$5000',
      points: 21,
    },
    {
      status: "DOWN",
      displayName: "Rhys Everhart",
      surname: "Le surfeur",
      history: {
        win: 1,
        loss: 1,
        draw: 1
      },
      cashprize: '$150',
      points: 21,
    },
    {
      status: "EQUAL",
      displayName: "Rhys Everhart",
      surname: "Le surfeur",
      history: {
        win: 1,
        loss: 1,
        draw: 1
      },
      cashprize: '$150',
      points: 21,
    },
    {
      status: "UP",
      displayName: "Rhys Everhart",
      surname: "Le surfeur",
      history: {
        win: 1,
        loss: 1,
        draw: 1
      },
      cashprize: '$150',
      points: 21,
    },
    {
      status: "UP",
      displayName: "Rhys Everhart",
      surname: "Le surfeur",
      history: {
        win: 1,
        loss: 1,
        draw: 1
      },
      cashprize: '$150',
      points: 21,
    },
    {
      status: "UP",
      displayName: "Rhys Everhart",
      surname: "Le surfeur",
      history: {
        win: 1,
        loss: 1,
        draw: 1
      },
      cashprize: '$150',
      points: 21,
    },
    {
      status: "UP",
      displayName: "Rhys Everhart",
      surname: "Le surfeur",
      history: {
        win: 1,
        loss: 1,
        draw: 1
      },
      cashprize: '$150',
      points: 21,
    },
    {
      status: "UP",
      displayName: "Rhys Everhart",
      surname: "Le surfeur",
      history: {
        win: 1,
        loss: 1,
        draw: 1
      },
      cashprize: '$150',
      points: 21,
    },
    {
      status: "UP",
      displayName: "Rhys Everhart",
      surname: "Le surfeur",
      history: {
        win: 1,
        loss: 1,
        draw: 1
      },
      cashprize: '$150',
      points: 21,
    },
  ]

  return (
    <Tabs defaultValue="ranks" className="w-[90%]">
      <TabsList className={classNames(styles.TabsList, "grid w-full grid-cols-4")}>
        <TabsTrigger className={styles.TabsTrigger} value="ranks">Classement</TabsTrigger>
        <TabsTrigger className={styles.TabsTrigger} value="informations">Informations</TabsTrigger>
        <TabsTrigger className={styles.TabsTrigger} value="programme">Programmation</TabsTrigger>
        <TabsTrigger className={styles.TabsTrigger} value="about">Qui sommes nous ?</TabsTrigger>
      </TabsList>
      <TabsContent value="ranks">
        <Card className='overflow-x-hidden overflow-y-hidden'>
          <RankingTable data={rankingTableData}></RankingTable>
        </Card>
      </TabsContent>
      <TabsContent value="informations">
        <Card>
          <CardContent className='pb-0'>
            <Accordion type="single" collapsible className={styles.Accordion}>
              <AccordionItem value="item-1">
                <AccordionTrigger>La Skulls Boxing League</AccordionTrigger>
                <AccordionContent>
                  Prochainement
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Les combats</AccordionTrigger>
                <AccordionContent>
                  Prochainement
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Comment s'inscrire pour combattre ?</AccordionTrigger>
                <AccordionContent>
                  Prochainement
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Le classement</AccordionTrigger>
                <AccordionContent>
                  Prochainement
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>La rémunération</AccordionTrigger>
                <AccordionContent>
                  Prochainement
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="programme">
        <Card className='h-[200px] w-full'>
          <CardContent className="p-6 w-full h-full flex center justify-center items-center">
            <p className='text-xl text-primaryGray'>Prochainement</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="about">
        <Card className='h-[200px] w-full'>
          <CardContent className="p-6 w-full h-full flex center justify-center items-center">
            <p className='text-xl text-primaryGray'>Prochainement</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}