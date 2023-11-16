import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import classNames from 'classnames'
import styles from './HomeTabs.module.css';
import RankingTable, { RankingTableProps } from './components/RankingTable/RankingTable';
import InformationsTab from './components/InformationsTab/InformationTab';


export default function HomeTabs() {
  const sponsors = {
    tequilala: {
      name: "Tequi-la-la",
      bgColor: "#F1C31B",
      isLight: true
    },
    autoExotic: {
      name: "Auto Exotic",
      bgColor: "#4285f4",
      isLight: true
    },
    '2cent47': {
      name: "2 cent 47",
      bgColor: "#0f51a3",
      isLight: false
    },
    bahamas: {
      name: "Bahamas",
      bgColor: "#02ffe7",
      isLight: true
    },
    uwu: {
      name: "Uwu",
      bgColor: "#000",
      isLight: false
    },
    blackWoods: {
      name: "Black Woods",
      bgColor: "#00a4ff",
      isLight: true
    },
    'dynasty8': {
      name: "Dynasty8",
      bgColor: "#696969",
      isLight: false
    },
    wingStop: {
      name: "WingStop",
      bgColor: "#34a853",
      isLight: false
    },
    lspd: {
      name: "LSPD",
      bgColor: "#02155d",
      isLight: false
    },
    bennys: {
      name: "Bennys's",
      bgColor: "#8C2226",
      isLight: false
    },
    unicorn: {
      name: "Unicorn",
      bgColor: "#cd6eff",
      isLight: true
    },
    flyWeels: {
      name: "FlyWheel's",
      bgColor: "#ff6d01",
      isLight: true
    },
    nsGalaxy: {
      name: "NS Galaxy",
      bgColor: "#9C0677",
      isLight: false
    },
    motorsport: {
      name: "Motorsport",
      bgColor: "#dc041d",
      isLight: false
    },
    luxuryAutos: {
      name: "Luxury Autos",
      bgColor: "#dda002",
      isLight: false
    },
    bcso: {
      name: "BCSO",
      bgColor: "#000",
      isLight: false
    }
  }

  const rankingTableData: RankingTableProps['data'] = [
    {
      status: "DOWN",
      displayName: "Rhys Everhart",
      surname: "Le surfeur",
      sponsor: sponsors.tequilala,
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
      sponsor: sponsors['2cent47'],
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
      sponsor: sponsors.autoExotic,
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
      sponsor: sponsors.bahamas,
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
      sponsor: sponsors.bcso,
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
      sponsor: sponsors.bennys,
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
      sponsor: sponsors.blackWoods,
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
      sponsor: sponsors.dynasty8,
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
      sponsor: sponsors.flyWeels,
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
      sponsor: sponsors.lspd,
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
      sponsor: sponsors.luxuryAutos,
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
      sponsor: sponsors.motorsport,
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
      sponsor: sponsors.nsGalaxy,
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
      sponsor: sponsors.unicorn,
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
      sponsor: sponsors.uwu,
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
      sponsor: sponsors.wingStop,
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