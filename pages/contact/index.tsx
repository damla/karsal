import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'

import styles from './contact.module.scss'

import { CommonModel, ContactModel } from '../../interfaces/index'
import { getBase64Values } from '../../utils/imageUtils'
import { getData } from '../../utils/dbUtils'

interface Props {
  common: CommonModel
  page: ContactModel
  Base64Values: string[]
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<ContactModel>('contact', locale)

  const images = ['contact_us_hero']
  const base64Values: string[] = getBase64Values(images)

  return {
    props: {
      common: commonData,
      page: pageData,
      Base64Values: base64Values
    }
  }
}
export default function Contact ({
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
            src="/assets/images/contact_us_hero.jpg"
            alt="banner-image"
            quality={75}
            objectFit="cover"
            hero
            lowQualitySrc={Base64Values[0]}
            objectPosition="bottom"
          />
        </Section>
        <Section relative>
          <div className={styles.section_container}>
            <h1 className={styles.h1}>Contact Us</h1>
            <h3 className={styles.h3}>To get perfect fabric swatches, please reach us via phone, e-mail or contact form.</h3>
            <div className={styles.section_body}>
              <div className={styles.section_body__left}>
                <ul style={{ display: 'flex', flexDirection: 'row' }}>
                  <li>
                    test
                  </li>
                  <li>
                  test
                  </li>
                  <li>
                  test
                  </li>
                </ul>
              </div>
              <div className={styles.section_body__right}>

              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  )
}
