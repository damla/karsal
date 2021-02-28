import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'

import styles from './factory.module.scss'

import { CommonModel, FactoryModel } from '../../interfaces/index'
import { getBase64Values } from '../../utils/imageUtils'
import { getData } from '../../utils/dbUtils'

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
          <div className={styles.container}>
            <video className={styles.video} autoPlay loop muted poster='assets/images/factory-1.jpg'>
              <source src='https://res.cloudinary.com/dqht7aysn/video/upload/v1614270816/karsal_factory_da1rr4.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </Section>
        <Section relative>
          <div style={{ minHeight: '100vh' }}>

          </div>
        </Section>
      </Layout>
    </>
  )
}
