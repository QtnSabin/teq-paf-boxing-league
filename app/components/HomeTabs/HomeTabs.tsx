import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import classNames from 'classnames'
import styles from './HomeTabs.module.css';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import RankingTable, { RankingTableProps } from './components/RankingTable/RankingTable';
import InformationsTab from './components/InformationsTab/InformationTab';


export default function HomeTabs() {
  const rankingTableData: RankingTableProps['data'] = [
    {
      status: "DOWN",
      displayName: "Rhys Everhart",
      surname: "Le surfeur",
      sponsor: {
        name: "Tequi-la-la",
        bgColor: "#F1C31B",
        isLight: true
      },
      history: {
        win: 1,
        loss: 1,
        draw: 1
      },
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
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
      points: 21,
      avatarPath: '/images/profils/Rhys-circle.png',
    },
  ]

  for (let index = 0; index < 30; index++) {
    rankingTableData.unshift({
      status: "EQUAL",
      displayName: "MATCHS DE PLACEMENT",
      surname: "",
      history: {
        win: 0,
        loss: 0,
        draw: 0
      },
      points: 0,
    },)

  }

  return (
    <Tabs defaultValue="ranks" className="w-[90%]">
      <TabsList className={classNames(styles.TabsList, "grid w-full grid-cols-4 pb-12")}>
        <TabsTrigger className={styles.TabsTrigger} value="ranks">Classement</TabsTrigger>
        <TabsTrigger className={styles.TabsTrigger} value="informations">Informations</TabsTrigger>
        <TabsTrigger className={styles.TabsTrigger} value="programme">Programmation</TabsTrigger>
        <TabsTrigger className={styles.TabsTrigger} value="about">Qui sommes nous ?</TabsTrigger>
      </TabsList>
      <TabsContent value="ranks">
        <Card className={classNames(styles.RankingTableCard, 'overflow-x-hidden', 'overflow-y-hidden')}>
          <RankingTable data={rankingTableData}></RankingTable>
        </Card>
      </TabsContent>
      <TabsContent value="informations">
        <InformationsTab></InformationsTab>
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