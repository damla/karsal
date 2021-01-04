import Head from 'next/head'
import Layout from '../../components/layout/layout.component'

import { GetStaticProps } from 'next'
import { getData } from '../../lib'
import { CommonModel, ContactModel } from '../../interfaces/index'
import React, { ReactElement } from 'react'

interface Props {
  common: CommonModel
  page: ContactModel
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData: Props['common'] = await getData('common', locale)
  const pageData: Props['page'] = await getData('contact', locale)

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
      <Layout data={common}>
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
