import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import Content from '../../components/content/content.component'
import ImageBox from '../../components/image-box/image-box.component'
import BlockQuote from '../../components/block-quote/block-quote.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import Logo from '../../components/logo/logo.component'

import './factory.module.scss'

import { getData } from '../../lib'
import { CommonModel, FactoryModel } from '../../interfaces/index'

interface Props {
  common: CommonModel
  page: FactoryModel
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<FactoryModel>('factory', locale)

  return {
    props: {
      common: commonData,
      page: pageData
    }
  }
}

export default function Factory ({
  common,
  page: {
    title
  }
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
            placeholderColor="#404040"
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
