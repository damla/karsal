import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'

import './factory.module.scss'

import { getData } from '../../utils/dbUtils'
import { CommonModel, FactoryModel } from '../../interfaces/index'
import { getBase64Values } from '../../utils/imageUtils'

interface Props {
  common: CommonModel
  page: FactoryModel
  Base64Values: string[]
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<FactoryModel>('factory', locale)

  const images = ['factory_hero']
  const base64Values: string[] = getBase64Values(images)

  return {
    props: {
      common: commonData,
      page: pageData,
      Base64Values: base64Values
    }
  }
}

export default function Factory ({
  common,
  page: {
    title
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
        <Section relative minHeight={'60vh'}>
          <ImageBox
            src="/assets/images/factory_hero.jpg"
            alt="banner-image"
            quality={75}
            objectFit="cover"
            hero
            lowQualitySrc={Base64Values[0]}
          />
        </Section>
        <Section relative>
          <div style={{ minHeight: '100vh' }}>

          </div>
        </Section>
      </Layout>
    </>
  )
}
