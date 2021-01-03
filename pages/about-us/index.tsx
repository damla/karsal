import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import Content from '../../components/content/content.component'
import ImageBox from '../../components/image-box/image-box.component'
import BlockQuote from '../../components/block-quote/block-quote.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import Logo from '../../components/logo/logo.component'

import { GetStaticProps } from 'next'
import { getCommonData } from '../../lib/common'
import { getAboutUsData } from '../../lib/page-data/about-us'
import { CommonModel, AboutUsModel } from '../../interfaces/index'
import React, { ReactElement } from 'react'

interface Props {
  common: CommonModel
  page: AboutUsModel
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData: Props['common'] = await getCommonData(locale)
  const pageData: Props['page'] = await getAboutUsData(locale)

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
      <Layout data={common}>
        <Section>
          <Content
            backgroundColor={'#bed0bd20'}
            left={<Logo width={120} height={40} />}
            title={''}
            blockquote={
              <BlockQuote>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </BlockQuote>
            }
            button={
              <CustomButton href="/en/about-us">
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
      </Layout>
    </>
  )
}
