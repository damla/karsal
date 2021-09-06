import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'
import Section from '../../components/section/section.component'
import { getData } from '../../utils/dbUtils'
import { CommonModel, SocialPolicyModel } from '../../interfaces'
// import ImageBox from '../../components/image-box/image-box.component'
import Image from 'next/image'

// import styles from './social-policy.module.scss'

import { getBase64Values } from '../../utils/imageUtils'
// import Content from '../../components/content/content.component'
// import BlockQuote from '../../components/block-quote/block-quote.component'
// import ImageBox from '../../components/image-box/image-box.component'

interface Props {
  common: CommonModel
  page: SocialPolicyModel
  Base64Values: string[]
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<SocialPolicyModel>('social-policy', locale)

  const images = ['nature', 'wind_energy', 'animals']
  const base64Values: string[] = getBase64Values(images)

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
  // infographic-icons-06
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout data={common} navbarBg>
        <Section relative minHeight={'60vh'}>
          <Image
            alt="nature"
            src="/assets/images/nature.jpg"
            placeholder="blur"
            blurDataURL={Base64Values[0]}
            layout="fill"
            objectFit="cover"
          />
        </Section>
        {/* <Section relative minHeight="50vh" backgroundColor="#AEADAB">
          <Content
            title={'test'}
            blockquote={
              <BlockQuote>
                test
              </BlockQuote>
            }
          />
          <Image
            src="/assets/svgs/infographic-icons/1.svg"
            width={200}
            height={200}
            alt='test'
          /> */}

        {/* </Section> */}
        {/* <Section relative minHeight="50vh">
          <Image
            alt="nature"
            src="/assets/images/nature.jpg"
            placeholder="blur"
            blurDataURL={Base64Values[0]}
            layout="fill"
            objectFit="cover"
          />
        </Section> */}
      </Layout>
    </>
  )
}
