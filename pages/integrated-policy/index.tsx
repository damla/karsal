import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import CustomContainer from '../../components/custom-container/custom-container.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import Image from 'next/dist/client/image'

import styles from './integrated-policy.module.scss'

import { CommonModel } from '../../interfaces/index'
import { getBase64Values } from '../../utils/imageUtils'
import { getData } from '../../utils/dbUtils'

interface Props {
  common: CommonModel
  Base64Values: string[]
  locale: string
  title: string
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)

  const images = ['integrated_policy_hero']
  const title =
    locale === 'tr' ? 'Entegre Politikamız' : 'Our Integrated Policy'
  const base64Values: string[] = getBase64Values(images)

  return {
    props: {
      common: commonData,
      Base64Values: base64Values,
      locale: locale,
      title
    }
  }
}
export default function IntegratedPolicy ({
  common,
  Base64Values,
  title
}: Props): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout data={common} navbarBg>
        <Section relative minHeight={'60vh'}>
          <Image
            src={'/assets/images/integrated_policy_hero.jpg'}
            placeholder='blur'
            blurDataURL={Base64Values[0]}
            objectFit='cover'
            layout='fill'
            loading='eager'
            objectPosition='center'
            alt='banner-image'
          />
        </Section>
        <Section relative>
          <CustomContainer page='policies' h1={title} justifyContent='center'>
            <div className={styles.container}>
              <CustomButton
                center
                inverted
                openTab
                href={'/integrated-policy/ENTEGRE-POLITIKASI.pdf'}
              >
                <span>{title}</span>
              </CustomButton>
            </div>
          </CustomContainer>
        </Section>
      </Layout>
    </>
  )
}
