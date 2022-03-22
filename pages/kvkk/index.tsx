import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import CustomContainer from '../../components/custom-container/custom-container.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import Image from 'next/dist/client/image'

import styles from './integration-policy.module.scss'

import { CommonModel } from '../../interfaces/index'
import { getBase64Values } from '../../utils/imageUtils'
import { getData } from '../../utils/dbUtils'

interface Props {
  common: CommonModel
  Base64Values: string[]
  locale: string
  mapApi: string
  title: string
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)

  const images = ['kvkk_hero']
  const title =
    locale === 'tr'
      ? 'Kişisel Verilerin Korunması'
      : 'Protection of Personal Data'
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
export default function KVKK ({
  common,
  Base64Values,
  title
}: Props): ReactElement {
  const links: Array<{ link: string, name: string }> = [
    {
      link: 'CEREZ-POLITIKASI.pdf',
      name: 'Çerez Politikası'
    },
    {
      link: 'FRM-026-ZIYARETCI-AYDINLATMA-METNI.pdf',
      name: 'Ziyaretçi Aydınlatma Metni'
    },
    {
      link: 'FRM-028-CEREZ-BILGILENDIRME-METNI.pdf',
      name: 'Çerez Bilgilendirme Metni'
    },
    {
      link: 'FRM-030-MUSTERI-ACIK-RIZA-BEYANI-METNI.pdf',
      name: 'Müşteri Açık Rıza Beyanı Metni'
    },
    {
      link: 'FRM-032-TEDARIKCI-AYDINLATMA-METNI-KVKK.pdf',
      name: 'Tedarikçi Aydınlatma Metni KVKK'
    },
    {
      link: 'FRM-035-KAPALI-DEVRE-KAMERA-KAYIT-SISTEMI-AYDINLATMA-METNI.pdf',
      name: 'Kapalı Devre Kamera Kayıt Sistemi Aydınlatma Metni'
    },
    {
      link: 'FRM-209-AYDINLATMA-METNI.pdf',
      name: 'Aydınlatma Metni'
    },
    {
      link: 'FRM-210-BASVURU-FORMU.pdf',
      name: 'Başvuru Formu'
    },
    {
      link: 'KISISEL-VERILERI-KORUMA-KISISEL-VERI-SAKLAMA-VE-IMHA-POLITIKASI.pdf',
      name: 'Kişisel Verileri Koruma, Kişisel Veri Saklama ve İmha Politikası'
    }
  ]
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout data={common} navbarBg>
        <Section relative minHeight={'60vh'}>
          <Image
            src={'/assets/images/kvkk_hero.jpg'}
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
              {links.map((element, index) => (
                <CustomButton
                  key={index}
                  center
                  inverted
                  openTab
                  href={`/kvkk/${element.link}`}
                >
                  <span>{element.name}</span>
                </CustomButton>
              ))}
            </div>
          </CustomContainer>
        </Section>
      </Layout>
    </>
  )
}
