import  Head  from 'next/head';


const Meta =({title, keywords, description}) =>{
    return(
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            {/* <meta name="robots" content="noindex,nofollow" /> */}
            <meta name="AdsBot-Google" content="noindex"/>
            {/* <meta httpEquiv="Content-Security-Policy" content="script-src 'none'"/> */}
            <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
            <meta name='keywords' content={keywords}/>
            <meta name='description' key='desc' content={description}/>
            <meta name="google-site-verification" content="Jmq1suVh9r6zkgwUmd8IeQAhDRBwmekTU5yxyyAdEv8" />
            <meta charSet='utf-8'/>
            <meta name="theme-color" content="#6495ed"/>
            <link rel="apple-touch-icon" href="/favicon.ico"></link>
            <link rel='icon' href='/favicon.ico'/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps ={
    title:'Bryan Media',
    keywords: 'Web Development, Nigeria Programming, Tech, Tech Skills, Top IT and Tech skills in Nigeria, How, to, build, a blog site',
    description: "Bryan's media is a Nigeria blog site that showcases trendy News on Entertainment, Education, Technology, Sport, and Web-development.",
}

export default Meta