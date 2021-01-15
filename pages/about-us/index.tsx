import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'

import { getData } from '../../lib'
import { CommonModel, AboutUsModel } from '../../interfaces/index'
import styles from './about-us.module.scss'

interface Props {
  common: CommonModel
  page: AboutUsModel
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<AboutUsModel>('about-us', locale)

  return {
    props: {
      common: commonData,
      page: pageData
    }
  }
}

export default function AboutUs ({
  common,
  page: { title }
}: Props
): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout data={common} navbarBg>
        <Section relative minHeight={'60vh'}>
          <ImageBox
            src="/assets/images/about_us_hero.jpg"
            alt="banner-image"
            quality={75}
            objectFit="cover"
            hero
            placeholderColor="#404040"
          />
          <h1 className={styles.h1}>{title}</h1>
        </Section>
        <Section relative>
          <div style={{
            minHeight: '100vh'
          }}>
          </div>
        </Section>
      </Layout>
    </>
  )
}
