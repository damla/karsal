import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../components/layout/layout.component'
import Section from '../components/section/section.component'
import Content from '../components/content/content.component'
import ImageBox from '../components/image-box/image-box.component'
import BlockQuote from '../components/block-quote/block-quote.component'
import CustomButton from '../components/custom-button/custom-button.component'
import Logo from '../components/logo/logo.component'

import { CommonModel, HomePageModel } from '../interfaces/index'
import { getBase64Values } from '../utils/imageUtils'
import { getData } from '../utils/dbUtils'

interface Props {
  common: CommonModel
  page: HomePageModel
  Base64Values: string[]
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<HomePageModel>('home-page', locale)

  const sections = ['section_1', 'section_2', 'section_3']
  const base64Values: string[] = getBase64Values(sections)

  return {
    props: {
      common: commonData,
      page: pageData,
      Base64Values: base64Values
    }
  }
}

export default function HomePage ({
  common,
  page: {
    title,
    sections
  },
  Base64Values
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
        <Section id="section-1" banner marginBottom="10vh">
          <Content
            backgroundColor={'#F9F8F4'}
            logo={<Logo width={120} height={80} />}
            title={sections[0].content.title}
            blockquote={
              <BlockQuote>
                {sections[0].content.blockquote}
              </BlockQuote>
            }
            button={
              <CustomButton onClick={() => scrollToSection('section-2')}>
                <span>{sections[0].content.button}</span>
                <span>&#8594;</span>
              </CustomButton>
            }
          />
          <ImageBox
            src="/assets/images/section-1.jpg"
            alt={sections[0].image.alt}
            objectFit='cover'
            priority
            quality={75}
            lowQualitySrc={Base64Values[0]}
          />
        </Section>

        <Section id="section-2" marginBottom="10vh">
          <ImageBox
            src="/assets/images/section-2.jpg"
            alt={sections[1].image.alt}
            objectFit='cover'
            objectPosition="right"
            priority
            quality={75}
            lowQualitySrc={Base64Values[1]}
          />

          <Content
            narrower
            backgroundColor="#F9F8F4"
            title={sections[1].content.title}
            blockquote={
              <BlockQuote>
                {sections[1].content.blockquote}
              </BlockQuote>
            }
            button={
              <CustomButton href="/about-us">
                <span>{sections[1].content.button}</span>
                <span>&#8594;</span>
              </CustomButton>
            }
          />
        </Section>
        <Section id="section-3" marginBottom="10vh">
          <Content
            narrower
            backgroundColor={'#F9F8F4'}
            title={sections[2].content.title}
            blockquote={
              <BlockQuote>
                {sections[2].content.blockquote}
              </BlockQuote>
            }
            button={
              <CustomButton href="/contact">
                <span>{sections[2].content.button}</span>
                <span>&#8594;</span>
              </CustomButton>
            }
          />
          <ImageBox
            src="/assets/images/section-3.jpg"
            alt={sections[2].image.alt}
            objectFit='cover'
            quality={75}
            lowQualitySrc={Base64Values[2]}
          />
        </Section>
      </Layout>
    </>
  )
}
