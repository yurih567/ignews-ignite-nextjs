import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all publications <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <Image src="/images/avatar.svg" alt="Girl coding" width={336} height={521} />
      </main>
    </>
  )
}

export default Home
