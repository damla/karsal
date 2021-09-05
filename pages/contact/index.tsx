import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'
import CustomContainer from '../../components/custom-container/custom-container.component'
import Map from '../../components/map/map.component'

import styles from './contact.module.scss'

import { CommonModel, ContactModel } from '../../interfaces/index'
import { getBase64Values } from '../../utils/imageUtils'
import { getData } from '../../utils/dbUtils'

interface Props {
  common: CommonModel
  page: ContactModel
  Base64Values: string[]
  locale: string
  mapApi: string
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
      Base64Values: base64Values,
      locale: locale,
      mapApi: process.env.MAPBOXGL_API
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
  locale,
  Base64Values,
  mapApi
}: Props
): ReactElement {
  return (
    <>
      <Head>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css' rel='stylesheet' />
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
          <CustomContainer page='contact' h1={maintitle} h3={subtitle} justifyContent='center'>
            {
              informations.map((element, index) => (

                <div key={index} className={styles.item}>
                  <div className={styles.container}>
                    <h3 lang={locale} className={styles.boxTitle}>{element.title}</h3>
                    <div className={styles.boxSubtitle}>
                      <Image
                        src="/assets/svgs/map-pin-primary.svg"
                        width={20}
                        height={20}
                        alt="map-pin-icon"
                      />
                      <h4 className={styles.h4}>{element.address.field_name}</h4>
                    </div>
                    <p className={styles.p}>{element.address.value}</p>
                    <div className={styles.boxSubtitle}>
                      <Image
                        src="/assets/svgs/phone-primary.svg"
                        width={20}
                        height={20}
                        alt="phone-icon"
                      />
                      <h4 className={styles.h4}>{element.phone.field_name}</h4>
                    </div>
                    <p className={styles.p}><a href={element.phone.link}>{element.phone.value}</a></p>
                    <div className={styles.boxSubtitle}>
                      <Image
                        src="/assets/svgs/envelope-primary.svg"
                        width={20}
                        height={20}
                        alt="envelope-icon"
                      />
                      <h4 className={styles.h4}>{element.email.field_name}</h4>
                    </div>
                    <p className={styles.p}><a href={element.email.link}>{element.email.value}</a></p>
                    <div className={styles.boxSubtitle}>
                      <Image
                        src="/assets/svgs/fax-primary.svg"
                        width={20}
                        height={20}
                        alt="fax-icon"
                      />
                      <h4 className={styles.h4}>{element.fax.field_name}</h4>
                    </div>
                    <p className={styles.p}><a href={element.fax.link}>{element.fax.value}</a></p>
                  </div>
                  <Map mapApi={mapApi} id={element.map.id} coordinate={element.map.coordinate} HTML={element.map.HTML} bounds={element.map.bounds}/>
                </div>
              ))
            }
          </CustomContainer>
        </Section>
      </Layout>
    </>
  )
}
// TODO: Apply deeplink to all
// browser'dan tiklarsa farkli url lazim
