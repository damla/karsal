import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'
import Paragraph from '../../components/paragraph/paragraph.component'

import styles from './about-us.module.scss'

import { CommonModel, AboutUsModel } from '../../interfaces/index'
import { getData } from '../../utils/dbUtils'
import { getBase64Values } from '../../utils/imageUtils'
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
  const base64Values: string[] = getBase64Values(images)

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
            <h2 className={styles.h2}>{subtitle}</h2>
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
