import Head from 'next/head';
import { FC } from 'react';

export interface IMeta {
    title: string;
    description?: string;
}

const Meta: FC<IMeta> = ({ title, description }) => {
    return <>
        <Head>
            <title>{title}</title>
            <link
                rel="shortcut icon"
                href="/favicon.ico"
                type="image/x-icon"
            />
            {description ? (
                <meta ItemProp="description" name="description" content={description} />
            ) : (
                <meta name="robots" content="noindex, nofollow" />
            )}
        </Head>
    </>
}

export default Meta;