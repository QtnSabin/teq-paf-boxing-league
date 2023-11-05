'use client';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronUp, Equal } from "lucide-react";
import * as Avatar from '@radix-ui/react-avatar';
import styles from './RankingTable.module.css';
import classnames from 'classnames';
import { Badge } from "@/components/ui/badge";

export interface RankingTableProps {
  data: Array<{
    status: "UP" | "DOWN" | "EQUAL",
    displayName: string,
    surname: string,
    sponsor?: {
      name: string,
      bgColor: string
      isLight: boolean
    },
    history: {
      win: number,
      loss: number,
      draw: number
    },
    points: number,
    cashprize: string,
  }>
}

export default function RankingTable({ data }: RankingTableProps) {
  const getRankIcon = (status: RankingTableProps['data'][number]['status']) => {
    if (status === 'UP') return <ChevronUp className="text-green-600"></ChevronUp>
    else if (status === 'DOWN') return <ChevronDown className="text-primaryRed"></ChevronDown>
    else return <Equal className="text-blue-500"></Equal>
  }

  return (
    <Table className={styles.Table}>
      <TableHeader className={classnames(styles.tableHeader, 'bg-gray-200')}>
        <TableRow>
          <TableHead className="text-center w-[100px]">Rang</TableHead>
          <TableHead className="">Combattant</TableHead>
          <TableHead className="text-center w-[50px]">Points</TableHead>
          <TableHead className="text-center w-[200px]">Palmares</TableHead>

          <TableHead className="w-[100px]">Cashprize</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className={styles.tableBody}>
        {data.map((item, index) => (
          <TableRow key={item.displayName}>

            <TableCell className="text-center">
              <div className="flex items-center justify-center">
                <div className="pe-2">
                  {getRankIcon(item.status)}
                </div>
                <span className="text-lg">{(index + 1).toString()}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <Avatar.Root className={classnames(styles.avatarRoot, 'pe-3')}>
                  <Avatar.Image
                    src="/images/profils/Rhys-circle.png"
                    alt="Image profil"
                    width={45}
                  />
                  <Avatar.Fallback />
                </Avatar.Root>
                <span>
                  {item.displayName}
                </span>
                <Badge className="bg-secondaryBlack text-primaryWhite ms-2"># {item.surname}</Badge>
                {item.sponsor && <Badge className={classnames(item.sponsor.isLight ? styles.lightBgColor : null, "text-primaryWhite", "ms-2", "font-bold")} style={{ backgroundColor: item.sponsor.bgColor }}>{item.sponsor.name}</Badge>}
              </div>
            </TableCell>
            <TableCell className="text-center">{item.points}</TableCell>
            <TableCell className={classnames(styles.historyCell, "text-center")}>
              <Badge className="bg-green-600 text-primaryWhite me-1">{item.history.win} W</Badge>
              <Badge className="bg-primaryRed text-primaryWhite me-1">{item.history.loss} L</Badge>
              <Badge className="bg-blue-500 text-primaryWhite">{item.history.draw} D</Badge>
            </TableCell>
            <TableCell className="text-center"><Badge className="bg-gray-200 text-secondaryBlack">{item.cashprize}</Badge></TableCell>
          </TableRow>
        ))
        }
      </TableBody >
    </Table >
  )
}