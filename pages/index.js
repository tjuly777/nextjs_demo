import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.scss';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <Link href='/posts/first-post/'>
          <a>first post</a>
        </Link>
        <p>
          (this is a sample website - you'll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
