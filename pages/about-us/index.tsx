import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'
import Blockquote from '../../components/block-quote/block-quote.component'

import { getData } from '../../lib'
import { CommonModel, AboutUsModel } from '../../interfaces/index'
import styles from './about-us.module.scss'

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
      <Layout data={common} navbarBg>
        <Section relative minHeight={'60vh'}>
          <ImageBox
            src="/assets/images/about_us_hero.jpg"
            alt="banner-image"
            quality={75}
            objectFit="cover"
            hero
            placeholderColor="#404040"
          />
          <h1 className={styles.h1}>{title}</h1>
        </Section>
        <Section relative>
          <div style={{ display: 'flex', flexBasis: '50vw', flexGrow: 1, alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Blockquote>
            &nbsp;&nbsp;Karsal Örme Tekstil San. A.Ş., 1970’li yıllarda Trabzon’da peştemal işleri ile tekstile başlayan KÖKSAL ailesi nin ikinci kuşak aile fertleri tarafından 1995 yılında İstanbul’da kurulmuştur.Karsal; 165 adet Meyer & Cie vb. markalı örme makinesi ve toplam 400 çalışanı ile üç iplik, iki iplik, süprem, ribana, interlog gibi hertürlü örgüyi yapabilecek altyapıya sahiptir. 35.000 m2 kapalı alanda faaliyet gösteren Karsal; yıllık ortalama 8.000 Ton (Sekizbin Ton) ham ve boyalı kumaş üretimi yapmaktadır. Karsal Örme Tekstil San. Tic. A. Ş., Ergene / Tekirdağ’ da faaliyet göstermektedir. Güçlü finansal yapısı ve entegre işletme olmasının verdiği güç ile karsal, müşteri talepleri doğrultusunda, iplik tedariki sonrası tüm işlemleri kendi işletmesi ve kendi sorumluluğunda yürüterek, müşterisine, boyanmış, kesime hazır kumaş olarak teslim etmektedir. Bir Karsal müşterisi, sadece kumaş numunesi veya seçimi yaptıktan sonra hiçbir işlemin sorumluluğu ve terminini takip etmek zorunda kalmadan faaliyet konusuna yoğunlaşabilmektedir. Bu nedenle Karsal üretimi kolaylaştırmaktadır. Karsal; Rusya, Hırvatistan, Bulgaristan, İtalya, Almanya, Portekiz, İspanya başta olmak üzere, birçok Avrupa ve Doğu Bloku ülkesine doğrudan ihracat yapmaktadır. Aileden gelen tekstil tecrübesi ile entegre bir sistemde üretimin yapılması, Karsal’a; üretilen kumaşların kalitesinin tüm sorumluluğunu üstlenebilmesini sağlamaktadır. Karsal; işinin profesyonelleri sayesinde müşterilerine, sağladığı kaliteli hammaddeyi, titiz bir işçilik ve düzenli ve hızlı sunumla müşteriye ulaştırmaktadır.
            </Blockquote>
          </div>
          <ImageBox
            src="/assets/images/section-2.jpg"
            alt='test'
            objectFit='cover'
            priority
            quality={100}
            placeholderColor="#bed0bd20"
          />
        </Section>
      </Layout>
    </>
  )
}
