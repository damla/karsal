import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'

import './factory.module.scss'

import { getData } from '../../lib'
import { CommonModel, FactoryModel } from '../../interfaces/index'
import axios from 'axios'

interface Props {
  common: CommonModel
  page: FactoryModel
  Base64Values: string[]
}
// const hostname = typeof window !== 'undefined' ? process.env.API_URL : 'localhost:3000'
// const protocol = typeof window !== 'undefined' ? window.location.protocol : 'http:'

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<FactoryModel>('factory', locale)

  // const portVal = process.env.PORT !== undefined ? process.env.PORT : 3000

  const images = ['factory_hero']
  const base64Values = []

  for (const image of images) { // http://localhost:${portVal}/api/page-images/${image}.jpg
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_URL !== undefined ? 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL : 'http://localhost:3000'}/api/page-images/${image}.jpg`).then(response => {
      const base64Values: string = response.data.pid
      return `data:image/png;base64,${base64Values}`
    }).catch((err) => console.log(err))
    base64Values.push(response)
  }

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
