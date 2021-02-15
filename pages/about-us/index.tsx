import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'
import Paragraph from '../../components/paragraph/paragraph.component'

import styles from './about-us.module.scss'

import { getData } from '../../lib'
import { CommonModel, AboutUsModel } from '../../interfaces/index'
import fs from 'fs'
// import Grid from '../../components/grid/grid.component'

interface Props {
  common: CommonModel
  page: AboutUsModel
  Base64Values: string[]
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<AboutUsModel>('about-us', locale)

  const images = ['about_us_hero']
  const base64Values = []

  for (const image of images) {
    const val: string = fs.readFileSync(`public/assets/low-quality-images/${image}.jpg`, 'base64')
    const res = `data:image/png;base64,${val}`
    base64Values.push(res)
  }

  return {
    props: {
      common: commonData,
      page: pageData,
      Base64Values: base64Values
    }
  }
}

export default function AboutUs ({
  common,
  page: {
    title,
    subtitle,
    paragraphs
  },
  Base64Values
}: Props
): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout data={common} navbarBg>
        <Section relative minHeight={'50vh'}>
          <ImageBox
            src="/assets/images/about_us_hero.jpg"
            alt="banner-image"
            quality={75}
            objectFit="cover"
            objectPosition="top"
            hero
            lowQualitySrc={Base64Values[0]}
          />
        </Section>
        <Section relative>
          <div className={styles.section_container}>
            <h1 className={styles.h1}>{title}</h1>
            <h3 className={styles.h3}>{subtitle}</h3>
            <div className={styles.section_body}>
              <Paragraph>
                {paragraphs[0]}
              </Paragraph>
              <Paragraph>
                {paragraphs[1]}
              </Paragraph>
            </div>
            {/* <Grid/> */}
          </div>
        </Section>
      </Layout>
    </>
  )
}
