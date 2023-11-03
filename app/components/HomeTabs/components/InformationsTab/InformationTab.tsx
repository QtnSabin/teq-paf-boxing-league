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
  )
}