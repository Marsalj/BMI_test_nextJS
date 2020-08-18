import Head from 'next/head'
import Count from'../components/count.js' 


export default function homePage() {
  return (
    <>  
      <Head>
        <title>BMI test</title>
      </Head>

      <body>
        <Count/>
      </body>
    </>
  )
}