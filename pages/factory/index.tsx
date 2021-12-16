import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'

import styles from './factory.module.scss'

import { CommonModel, FactoryModel } from '../../interfaces/index'
import { getBase64Values, getFactoryImage } from '../../utils/imageUtils'
import { getData } from '../../utils/dbUtils'

import Content from '../../components/content/content.component'
import BlockQuote from '../../components/block-quote/block-quote.component'
import EmblaCarousel from '../../components/emblaCarousel/emblaCarousel.component'

interface Props {
  common: CommonModel
  page: FactoryModel
  imageLocations: string[][]
  Base64Values: string[]
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const imageLocations: string[][] = []

  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<FactoryModel>('factory', locale)
  const base64Values: string[] = getBase64Values(['factory_hero'])

  const sections = ['orme', 'boyama', 'kalite-kontrol-ve-lab', 'depo-ve-sevkiyat']
  sections.forEach(item => {
    (item) ? imageLocations.push(getFactoryImage(item)) : console.log('an error occured')
  })

  return {
    props: {
      common: commonData,
      page: pageData,
      imageLocations: imageLocations,
      Base64Values: base64Values
    }
  }
}

export default function Factory ({
  common,
  page: {
    title,
    sections
  },
  imageLocations,
  Base64Values
}: Props
): ReactElement {
  const getSlides = (index: number): any => {
    const slides: any = []
    for (let i = 0; i < imageLocations[index].length; i++) {
      slides.push(<Image key={`${i}`}
        src={`/assets/factory-images/${index}/${imageLocations[index][i]}.jpg`}
        placeholder="blur"
        blurDataURL={Base64Values[0]}
        layout="fixed"
        width="800"
        height="500"
        objectPosition="top"
        alt={`${index}`} />)
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
        <Section relative minHeight='10vh' mobileNone />
        <Section relative>
          <Content
            justifyContent="center"
            backgroundColor="#F9F8F4"
            biggerTitle
            title={sections[0].title}
            blockquote={
              <BlockQuote bigger>
                {sections[0].content}
              </BlockQuote>
            }
          />
          <EmblaCarousel slides={getSlides(0)} />
        </Section>
        <Section relative minHeight='10vh' mobileNone />
        <Section relative>
          <EmblaCarousel slides={getSlides(1)} />
          <Content
            justifyContent="center"
            backgroundColor="#F9F8F4"
            biggerTitle
            title={sections[1].title}
            blockquote={
              <BlockQuote bigger>
                {sections[1].content}
              </BlockQuote>
            }
          />
        </Section>
        <Section relative minHeight='10vh' mobileNone />
        <Section relative>
          <Content
            justifyContent="center"
            backgroundColor={'#F9F8F4'}
            biggerTitle
            title={sections[2].title}
            blockquote={
              <BlockQuote bigger>
                {sections[2].content}
              </BlockQuote>
            }
          />
          <EmblaCarousel slides={getSlides(2)} />
        </Section>
        <Section relative minHeight='10vh' mobileNone />
        <Section relative>
          <EmblaCarousel slides={getSlides(3)} />
          <Content
            justifyContent="center"
            backgroundColor="#F9F8F4"
            biggerTitle
            title={sections[3].title}
            blockquote={
              <BlockQuote bigger>
                {sections[3].content}
              </BlockQuote>
            }
          />
        </Section>
      </Layout>
    </>
  )
}
