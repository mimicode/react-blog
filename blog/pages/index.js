import Head from 'next/head'
import { Button } from 'antd'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>项目开始</h1>
      <Button>真的开始了，安装依赖</Button>
    </div>
  )
}
