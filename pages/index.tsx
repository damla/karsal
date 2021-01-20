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
import { getData } from '../lib'

interface Props {
  common: CommonModel
  page: HomePageModel
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<HomePageModel>('home-page', locale)

  return {
    props: {
      common: commonData,
      page: pageData
    }
  }
}

export default function HomePage ({
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
        <Section id="section-1" banner marginBottom="5vh">
          <Content
            backgroundColor={'#e1dddc'}
            left={<Logo width={90} height={60} />}
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
            objectFit='fill'
            priority
            quality={100}
            placeholderColor="#bed0bd20"
          />
        </Section>

        <Section id="section-2" marginBottom="5vh">
          <ImageBox
            src="/assets/images/section-2.jpg"
            alt="Picture of yarns"
            objectFit='cover'
            wider
            priority
            quality={75}
            placeholderColor="#bed0bd20"
          />
          <Content
            narrower
            backgroundColor="#e1dddc"
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
            backgroundColor={'#e1dddc'}
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
            objectFit='cover'
            wider
            quality={75}
            placeholderColor = "#bed0bd20"
          />
        </Section>
      </Layout>
    </>
  )
}
