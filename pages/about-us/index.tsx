import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'

import { getData } from '../../lib'
import { CommonModel, AboutUsModel } from '../../interfaces/index'

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
      <Layout data={common} navbarBg={true}>
        <Section>
          <div style={{
            position: 'relative',
            flexGrow: 1,
            flexBasis: '100vw',
            minHeight: '80vh'
          }}>
            <Image src="/assets/images/section-3.jpg" alt="banner-image" objectFit="cover" layout="fill"/>
          </div>
          <div style={{
            position: 'absolute',

            color: 'white'
          }}>
            test
          </div>
        </Section>
        <Section>
          <div style={{
            minHeight: '100vh'
          }}>
            <p>test</p></div>
        </Section>
      </Layout>
    </>
  )
}
