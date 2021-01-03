import { ObjectID } from 'mongodb';

export type Common = {
    _id: ObjectID,
    lang: string,
    announcement: {
        email: {
            link: string,
            image_alt: string,
            text: string
        },
        text: string,
        phone: {
            link: string,
            image_alt: string,
            text: string
        }
    },
    sidebar: {
        about_us: {
            link: string,
            text: string
        },
        factory: {
            link: string,
            text: string
        },
        catalog: {
            link: string,
            text: string
        },
        contact: {
            link: string,
            text: string
        },
        turkish: {
            link: string,
            locale: string,
            text: string
        },
        english: {
            link: string,
            locale: string,
            text: string
        },
        footer: {
            text: string,
            copyright: string
        }
    },
    navbar: {
        about_us: {
            link: string,
            text: string
        },
        factory: {
            link: string,
            text: string
        },
        catalog: {
            link: string,
            text: string
        },
        contact: {
            link: string,
            text: string
        },
        turkish: {
            link: string,
            locale: string,
            text: string
        },
        english: {
            link: string,
            locale: string,
            text: string
        }
    },
    footer: {
        text: string,
        copyright: string,
        email: {
            link: string,
            text: string
        },
        phone: {
            link: string,
            text: string
        }
    }
}

export type HomePage = {
    _id: ObjectID,
    lang: string,
    title: string
}

export type AboutUs = {
    _id: ObjectID,
    lang: string,
    title: string
}

export type Catalog = {
    _id: ObjectID,
    lang: string,
    title: string
}

export type Contact = {
    _id: ObjectID,
    lang: string,
    title: string
}

export type Factory = {
    _id: ObjectID,
    lang: string,
    title: string
}