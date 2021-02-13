import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'
import Paragraph from '../../components/paragraph/paragraph.component'

import styles from './about-us.module.scss'

import { getData } from '../../lib'
import { CommonModel, AboutUsModel } from '../../interfaces/index'
import axios from 'axios'
// import Grid from '../../components/grid/grid.component'

interface Props {
  common: CommonModel
  page: AboutUsModel
  Base64Values: string[]
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<AboutUsModel>('about-us', locale)

  const portVal = process.env.PORT !== undefined ? process.env.PORT : 3000

  const images = ['about_us_hero']
  const base64Values = []

  for (const image of images) { // http://localhost:${portVal}/api/page-images/${image}.jpg
    const response = await axios.get(`https://karsal.vercel.app/api/page-images/${image}.jpg`).then(response => {
      const base64Values: string = response.data.pid
      return `data:image/png;base64,${base64Values}`
    })
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

export default function AboutUs ({
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
          <div className={styles.section_container}>
            <h1 className={styles.h1}>{title}</h1>
            <h3 className={styles.h3}>Karsal Örme Tekstil San. A.Ş., 1970’li yıllarda Trabzon’da peştemal işleri ile tekstile başlayan KÖKSAL ailesinin ikinci kuşak aile fertleri tarafından 1995 yılında İstanbul’da kurulmuştur.</h3>
            <div className={styles.section_body}>
              <Paragraph>
                Karsal; 165 adet Meyer & Cie vb. markalı örme makinesi ve toplam 400 çalışanı ile üç iplik, iki iplik, süprem, ribana, interlog gibi hertürlü örgüyi yapabilecek altyapıya sahiptir. 35.000 m2 kapalı alanda faaliyet gösteren Karsal; yıllık ortalama 8.000 Ton (Sekizbin Ton) ham ve boyalı kumaş üretimi yapmaktadır. Karsal Örme Tekstil San. Tic. ve A. Ş., Ergene / Tekirdağ’ da faaliyet göstermektedir. Güçlü finansal yapısı ve entegre işletme olmasının verdiği güç ile karsal, müşteri talepleri doğrultusunda, iplik tedariki sonrası tüm işlemleri kendi işletmesi ve kendi sorumluluğunda yürüterek, müşterisine, boyanmış, kesime hazır kumaş olarak teslim etmektedir.
              </Paragraph>
              <Paragraph>
              Bir Karsal müşterisi, sadece kumaş numunesi veya seçimi yaptıktan sonra hiçbir işlemin sorumluluğu ve terminini takip etmek zorunda kalmadan faaliyet konusuna yoğunlaşabilmektedir. Bu nedenle Karsal üretimi kolaylaştırmaktadır. Karsal; Rusya, Hırvatistan, Bulgaristan, İtalya, Almanya, Portekiz, İspanya başta olmak üzere, birçok Avrupa ve Doğu Bloku ülkesine doğrudan ihracat yapmaktadır. Aileden gelen tekstil tecrübesi ile entegre bir sistemde üretimin yapılması, Karsal’a; üretilen kumaşların kalitesinin tüm sorumluluğunu üstlenebilmesini sağlamaktadır. Karsal; işinin profesyonelleri sayesinde müşterilerine, sağladığı kaliteli hammaddeyi, titiz bir işçilik ve düzenli ve hızlı sunumla müşteriye ulaştırmaktadır.
              </Paragraph>
            </div>
            {/* <Grid/> */}
          </div>
        </Section>
      </Layout>
    </>
  )
}
