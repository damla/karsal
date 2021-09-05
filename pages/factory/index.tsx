import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'

import styles from './factory.module.scss'

import { CommonModel, FactoryModel } from '../../interfaces/index'
import { getFactoryImage } from '../../utils/imageUtils'
import { getData } from '../../utils/dbUtils'

import Content from '../../components/content/content.component'
import BlockQuote from '../../components/block-quote/block-quote.component'
import EmblaCarousel from '../../components/emblaCarousel/emblaCarousel.component'

interface Props {
  common: CommonModel
  page: FactoryModel
  imageLocations: string[][]
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const imageLocations: string[][] = []

  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<FactoryModel>('factory', locale)

  const sections = ['orme', 'boyama', 'kalite-kontrol-ve-lab', 'depo-ve-sevkiyat']
  sections.forEach(item => {
    (item) ? imageLocations.push(getFactoryImage(item)) : console.log('an error occured')
  })

  return {
    props: {
      common: commonData,
      page: pageData,
      imageLocations: imageLocations
    }
  }
}

export default function Factory ({
  common,
  page: {
    title
  },
  imageLocations
}: Props
): ReactElement {
  const getSlides = (index: number): any => {
    const slides: any = []
    for (let i = 0; i < imageLocations[index].length; i++) {
      slides.push(<img key={`${i}`} src={`/assets/factory-images/${index}/${imageLocations[index][i]}.jpg`} width="800" height="500" alt={`${index}`} />)
    }
    return slides
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout data={common} navbarBg>
        <Section relative minHeight='60vh'>
          <div className={styles.container}>
            <video className={styles.video} controls poster='assets/images/factory_hero.jpg'>
              <source src='https://res.cloudinary.com/dqht7aysn/video/upload/v1627919367/karsal-assets/karsal-factory_qa0xkl.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </Section>
        <Section relative>
          <h1 className={styles.h1}>{title}</h1>
        </Section>
        <Section relative>
          <Content
            justifyContent="center"
            backgroundColor="#F9F8F4"
            title={'Örme'}
            blockquote={
              <BlockQuote>
                Alaninda uzman kadrosuyla her cesit kumas uretimi
                Mayer , orizio , pailung basta olmak uzere 200 e yakin makineden olusan genis orme parkuru ile her tur orme kumas cesidi yuksek standartlarda uretiyoruz
              </BlockQuote>
            }
          />
          <EmblaCarousel slides={getSlides(0)} />
        </Section>
        <Section relative paddingTop="10vh">
          <EmblaCarousel slides={getSlides(1)} />
          <Content
            justifyContent="center"
            backgroundColor="#F9F8F4"
            title="degis"
            blockquote={
              <BlockQuote>
                degis
              </BlockQuote>
            }
          />
        </Section>
        <Section relative paddingTop="10vh">
          <Content
            justifyContent="center"
            backgroundColor={'#F9F8F4'}
            title="Test"
            blockquote={
              <BlockQuote>
                Test
              </BlockQuote>
            }
          />
          <EmblaCarousel slides={getSlides(2)} />
        </Section>
        <Section relative paddingTop="10vh">
          <EmblaCarousel slides={getSlides(3)} />
          <Content
            justifyContent="center"
            backgroundColor="#F9F8F4"
            title="degis"
            blockquote={
              <BlockQuote>
                degis
              </BlockQuote>
            }
          />
        </Section>
      </Layout>
    </>
  )
}
