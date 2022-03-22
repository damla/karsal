import { LngLatBoundsLike } from 'mapbox-gl'
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
    aboutUs: {
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
    kvkk: {
      link: string
      text: string
    }
    integratedPolicy: {
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
    aboutUs: {
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
    kvkk: {
      link: string
      text: string
    }
    integratedPolicy: {
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

export interface SectionModel {
  content: {
    title: string
    blockquote: string
    button: string
  }
  image: {
    alt: string
  }
}

export interface HomePageModel {
  _id: ObjectID
  title: string
  lang: string
  sections: SectionModel[]
}

export interface AboutUsModel {
  _id: ObjectID
  lang: string
  title: string
  subtitle: string
  paragraphs: string[]
}

export interface CatalogModel {
  _id: ObjectID
  lang: string
  title: string
}

export interface ItemModel {
  title: string
  address: {
    field_name: string
    value: string
  }
  phone: {
    field_name: string
    value: string
    link: string
  }
  email: {
    field_name: string
    value: string
    link: string
  }
  fax: {
    field_name: string
    value: string
    link: string
  }
  map: {
    id: string
    bounds: LngLatBoundsLike
    coordinate: [number, number]
    HTML: string
  }
}

export interface ContactModel {
  _id: ObjectID
  lang: string
  title: string
  maintitle: string
  subtitle: string
  informations: ItemModel[]
}

export interface FactorySectionModel {
  title: string
  content: string
}

export interface FactoryModel {
  _id: ObjectID
  lang: string
  title: string
  sections: FactorySectionModel[]
}
