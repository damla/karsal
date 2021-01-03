import { ObjectID } from 'mongodb'

export interface CommonModel {
  _id: ObjectID
  lang: string
  announcement: {
    email: {
      link: string
      image_alt: string
      text: string
    }
    text: string
    phone: {
      link: string
      image_alt: string
      text: string
    }
  }
  sidebar: {
    about_us: {
      link: string
      text: string
    }
    factory: {
      link: string
      text: string
    }
    catalog: {
      link: string
      text: string
    }
    contact: {
      link: string
      text: string
    }
    turkish: {
      link: string
      locale: string
      text: string
    }
    english: {
      link: string
      locale: string
      text: string
    }
    footer: {
      text: string
      copyright: string
    }
  }
  navbar: {
    about_us: {
      link: string
      text: string
    }
    factory: {
      link: string
      text: string
    }
    catalog: {
      link: string
      text: string
    }
    contact: {
      link: string
      text: string
    }
    turkish: {
      link: string
      locale: string
      text: string
    }
    english: {
      link: string
      locale: string
      text: string
    }
  }
  footer: {
    text: string
    copyright: string
    email: {
      link: string
      text: string
    }
    phone: {
      link: string
      text: string
    }
  }
}

export interface HomePageModel {
  _id: ObjectID
  lang: string
  title: string
}

export interface AboutUsModel {
  _id: ObjectID
  lang: string
  title: string
}

export interface CatalogModel {
  _id: ObjectID
  lang: string
  title: string
}

export interface ContactModel {
  _id: ObjectID
  lang: string
  title: string
}

export interface FactoryModel {
  _id: ObjectID
  lang: string
  title: string
}
