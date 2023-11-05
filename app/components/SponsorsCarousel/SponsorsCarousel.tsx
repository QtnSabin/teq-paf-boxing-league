'use client';

import styles from './SponsorsCarousel.module.css'
import classNames from 'classnames'
import { useRef, useEffect, useState } from 'react';

export default function SponsorsCarousel() {
  const scroller = useRef<any>(null)

  const sponsors = [
    {
      imageUrl: "url(/images/Tequi-la-la-GTAV.png)",
      name: "TEQUI-LA-LA"
    },
    {
      imageUrl: "url(/images/Tequi-la-la-GTAV.png)",
      name: "Sponsor 2"
    },
    {
      imageUrl: "url(/images/Tequi-la-la-GTAV.png)",
      name: "Sponsor 3"
    },
    {
      imageUrl: "url(/images/Tequi-la-la-GTAV.png)",
      name: "Sponsor 4"
    },
    {
      imageUrl: "url(/images/Tequi-la-la-GTAV.png)",
      name: "Sponsor 5"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scroller.current) return;
      console.log(scroller.current.children[0].children[0].children[0])

      scroller.current.children[1].classList.add(styles.active)
      scroller.current.children[0].classList.remove(styles.active)
      scroller.current.children[0].classList.add(styles.animated)

      setTimeout(() => {
        if (!scroller.current) return;
        scroller.current.appendChild(scroller.current.children[0])
        scroller.current.children[scroller.current.children.length - 1].classList.remove(styles.animated)
      }, 500)

    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section className={styles.gameSection}>
      <h2 className={styles.lineTitle}>Les partenaires</h2>
      <div ref={scroller} className={classNames(styles.owlCarousel, styles.customCarousel, styles.owlTheme)}>
        {sponsors.map((sponsor, index) => (
          <div className={classNames(styles.sponsorContainer, index == 0 ? styles.active : null)}>
            <div className={classNames(styles.item)} style={{ backgroundImage: sponsor.imageUrl }}>
              <div className={styles.itemDesc}>
                <h3>{sponsor.name}</h3>
                <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the
                  Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section >
  )
}