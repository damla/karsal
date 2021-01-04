import Head from 'next/head'

import Layout from '../components/layout/layout.component'
import Section from '../components/section/section.component'
import Content from '../components/content/content.component'
import ImageBox from '../components/image-box/image-box.component'
import BlockQuote from '../components/block-quote/block-quote.component'
import CustomButton from '../components/custom-button/custom-button.component'
import Logo from '../components/logo/logo.component'

import { GetStaticProps } from 'next'
import { CommonModel, HomePageModel } from '../interfaces/index'
import React, { ReactElement } from 'react'
import { getData } from '../lib'

interface Props {
  common: CommonModel
  page: HomePageModel
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData: Props['common'] = await getData('common', locale)
  const pageData: Props['page'] = await getData('home-page', locale)

  return {
    props: {
      common: commonData,
      page: pageData
    }
  }
}

export default function Anasayfa ({
  common,
  page: {
    title
  }
}: Props
): ReactElement {
  function scrollToSection (sectionId: string): void {
    if (typeof window !== 'undefined') {
      document?.querySelector(`#${sectionId}`)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout data={common}>
        <Section id="section-1" banner>
          <Content
            backgroundColor={'#bed0bd20'}
            left={<Logo width={120} height={40} />}
            title={title}
            blockquote={
              <BlockQuote>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </BlockQuote>
            }
            button={
              <CustomButton onClick={() => scrollToSection('section-2')}>
                <span>Daha Fazlası</span>
                <span>&#8594;</span>
              </CustomButton>
            }
          />

          <ImageBox
            src="/assets/images/section-1.jpg"
            alt="Picture of the fabric"
            objectFit={'fill'}
            priority
          />
        </Section>

        <Section id="section-2">
          <ImageBox
            src="/assets/images/section-2.jpg"
            alt="Picture of yarns"
            objectFit="fill"
            wider
            priority
          />
          <Content
            narrower
            backgroundColor="#f1f5f1"
            title="Kumaşın Mimarı..."
            blockquote={
              <BlockQuote>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </BlockQuote>
            }
            button={
              <CustomButton href="/about-us">
                <span>Daha Fazlası</span>
                <span>&#8594;</span>
              </CustomButton>
            }
          />
        </Section>
        <Section id="section-3">
          <Content
            narrower
            backgroundColor={'#f1f5f1'}
            title={'Kumaşın Mimarı...'}
            blockquote={
              <BlockQuote>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </BlockQuote>
            }
            button={
              <CustomButton href="/about-us">
                <span>Daha Fazlası</span>
                <span>&#8594;</span>
              </CustomButton>
            }
          />
          <ImageBox
            src="/assets/images/section-3.jpg"
            alt="Picture of yarns"
            objectFit={'cover'}
            wider
            priority
          />
        </Section>
      </Layout>
    </>
  )
}
