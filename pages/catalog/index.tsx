import React, { ReactElement } from 'react'
import { GetStaticProps } from 'next'

import Head from 'next/head'
import Layout from '../../components/layout/layout.component'

import './catalog.module.scss'

import { CommonModel, CatalogModel } from '../../interfaces/index'
import { getData } from '../../utils/dbUtils'

interface Props {
  common: CommonModel
  page: CatalogModel
}

export const getStaticProps: GetStaticProps = async ({ locale = 'tr' }) => {
  const commonData = await getData<CommonModel>('common', locale)
  const pageData = await getData<CatalogModel>('catalog', locale)

  return {
    props: {
      common: commonData,
      page: pageData
    }
  }
}

export default function Catalog ({
  common,
  page: {
    title
  }
}: Props
): ReactElement {
  return (
    <>
      <Head>
        <title>{title} </title>
      </Head>
      <Layout data={common} navbarBg>
        <div
          style={
            {
              height: '100vh',
              backgroundColor: '#bad1f7'
            }
          }>
        </div>
      </Layout>
    </>
  )
}
