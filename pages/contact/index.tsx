import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'

import { getData } from '../../lib'
import { CommonModel, ContactModel } from '../../interfaces/index'

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
      <Layout data={common} navbarBg={true}>
        <div
          style={{
            height: '100vh',
            backgroundColor: '#bad1f7'
          }}
        ></div>
      </Layout>
    </>
  )
}
