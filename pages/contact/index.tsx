import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'

import { getData } from '../../lib'
import { CommonModel, ContactModel } from '../../interfaces/index'
import Section from '../../components/section/section.component'
import ImageBox from '../../components/image-box/image-box.component'

interface Props {
  common: CommonModel
  page: ContactModel
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<ContactModel>('contact', locale)

  return {
    props: {
      common: commonData,
      page: pageData
    }
  }
}
export default function Contact ({
  common,
  page: {
    title
  }
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
            src="/assets/images/contact-us.jpg"
            alt="banner-image"
            quality={75}
            objectFit="cover"
            hero
            placeholderColor="#404040"
            objectPosition="bottom"
          />
        </Section>
        <Section relative>
          <div style={{ minHeight: '100vh' }}>

          </div>
        </Section>
      </Layout>
    </>
  )
}
