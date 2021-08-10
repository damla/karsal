import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'

import styles from './factory.module.scss'

import { CommonModel, FactoryModel } from '../../interfaces/index'
import { getBase64Values } from '../../utils/imageUtils'
import { getData } from '../../utils/dbUtils'

import Content from '../../components/content/content.component'
import BlockQuote from '../../components/block-quote/block-quote.component'
import CustomButton from '../../components/custom-button/custom-button.component'

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
  const data: readonly ReactImageGalleryItem[] = [

    {
      original: 'https://res.cloudinary.com/dqht7aysn/image/upload/c_scale,h_600,w_1000/v1618071726/factory/1.jpg',
      thumbnail: 'https://res.cloudinary.com/dqht7aysn/image/upload/c_scale,h_150,w_250/v1618071726/factory/1.jpg'
    },
    {
      original: 'https://res.cloudinary.com/dqht7aysn/image/upload/c_scale,h_600,w_1000/v1618071729/factory/2.jpg',
      thumbnail: 'https://res.cloudinary.com/dqht7aysn/image/upload/c_scale,h_150,w_250/v1618071729/factory/2.jpg'
    },
    {
      original: 'https://res.cloudinary.com/dqht7aysn/image/upload/c_scale,h_600,w_1000/v1618071168/factory/3.jpg',
      thumbnail: 'https://res.cloudinary.com/dqht7aysn/image/upload/c_scale,h_150,w_250/v1618071168/factory/3.jpg'
    }

  ]
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout data={common} navbarBg>
        <Section relative minHeight='60vh'>
          <div className={styles.container}>
            <video className={styles.video} controls poster='assets/images/factory_hero.jpg'>
              <source src='https://res.cloudinary.com/dqht7aysn/video/upload/v1627919367/karsal-assets/karsal-factory_qa0xkl.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </Section>
        <Section relative>
          <h1 className={styles.h1}>Fabrikamiz</h1>
        </Section>
        <Section relative>
          <ImageBox
            src="https://res.cloudinary.com/dqht7aysn/image/upload/c_scale,h_600,w_1000/v1618071726/factory/1.jpg"
            alt="degis"
            objectFit='cover'
            objectPosition="right"
            priority
            quality={75}
            lowQualitySrc="https://res.cloudinary.com/dqht7aysn/image/upload/c_scale,h_150,w_250/v1618071726/factory/1.jpg"
          />
          <Content
            narrower
            backgroundColor="#F9F8F4"
            title="degis"
            blockquote={
              <BlockQuote>
                degis
              </BlockQuote>
            }
            button={
              <CustomButton href="/degistir">
                <span>Test</span>
                <span>&#8594;</span>
              </CustomButton>
            }
          />
        </Section>
        <Section relative paddingTop="10vh" marginBottom="10vh">
          <Content
            narrower
            backgroundColor={'#F9F8F4'}
            title="Test"
            blockquote={
              <BlockQuote>
                Test
              </BlockQuote>
            }
            button={
              <CustomButton href="/contact">
                <span>Test</span>
                <span>&#8594;</span>
              </CustomButton>
            }
          />
          <ImageBox
            src="https://res.cloudinary.com/dqht7aysn/image/upload/c_scale,h_600,w_1000/v1618071729/factory/2.jpg"
            alt="test"
            objectFit='cover'
            quality={75}
            lowQualitySrc="https://res.cloudinary.com/dqht7aysn/image/upload/c_scale,h_150,w_250/v1618071729/factory/2.jpg"
          />
        </Section>
      </Layout>
    </>
  )
}
