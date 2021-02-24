import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'
import CustomContainer from '../../components/custom-container/custom-container.component'

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
    title,
    maintitle,
    subtitle,
    informations
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
          <CustomContainer page='contact' h1={maintitle} h3={subtitle} justifyContent='space-around'>
            {
              informations.map((element, index) => (
                <div key={index} className={styles.item}>
                  <h3 className={styles.boxTitle}>{element.city}</h3>
                  <h4 className={styles.h4}>{element.address.field_name}</h4>
                  <p className={styles.p}>{element.address.value}</p>
                  <h4 className={styles.h4}>{element.phone.field_name}</h4>
                  <p className={styles.p}>{element.phone.value}</p>
                  <h4 className={styles.h4}>{element.email.field_name}</h4>
                  <p className={styles.p}>{element.email.value}</p>
                  <h4 className={styles.h4}>FAX</h4>
                  <p className={styles.p}>+90 (212) 875 87 95</p>
                </div>
              ))
            }
          </CustomContainer>
        </Section>
      </Layout>
    </>
  )
}
// lat: 41.231282, lng: 28.420897
