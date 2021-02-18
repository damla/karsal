import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'
import Paragraph from '../../components/paragraph/paragraph.component'

import { CommonModel, AboutUsModel } from '../../interfaces/index'
import { getData } from '../../utils/dbUtils'
import { getBase64Values } from '../../utils/imageUtils'
import CustomContainer from '../../components/custom-container/custom-container.component'
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
          <CustomContainer page="about-us" h1={title} h2={subtitle} justifyContent='space-between'>
            {
              paragraphs.map((element, index) => (
                <Paragraph key={index}>
                  {element}
                </Paragraph>
              ))
            }
          </CustomContainer>
        </Section>
      </Layout>
    </>
  )
}
