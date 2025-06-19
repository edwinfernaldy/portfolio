import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Primary Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content="Edwin Fernaldy - Full Stack Developer & Tech Lead | Remote Developer Indonesia" />
          <meta name="description" content="Experienced Full Stack Developer and Tech Lead from Indonesia specializing in React, Node.js, AI, LLM, and modern web technologies. Available for remote positions worldwide. Proven track record in building scalable applications and leading development teams." />
          <meta name="keywords" content="tech lead, full stack developer, frontend developer, remote developer, indonesia developer, react developer, node.js developer, javascript developer, web developer, software engineer, remote work, indonesia, team lead, technical lead, development lead, ai developer, llm developer, machine learning developer, data scientist, remote tech lead, indonesia remote developer, best remote developer indonesia, top remote developer, senior developer remote, lead developer remote" />
          <meta name="author" content="Edwin Fernaldy" />
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow" />
          <meta name="bingbot" content="index, follow" />
          
          {/* Job Search Specific Meta Tags */}
          <meta name="job-title" content="Tech Lead, Full Stack Developer, Frontend Developer" />
          <meta name="location" content="Indonesia (Remote Available)" />
          <meta name="experience-level" content="Mid to Senior Level" />
          <meta name="availability" content="Available for Remote Positions" />
          <meta name="work-authorization" content="Indonesia Citizen, Remote Work Eligible" />
          <meta name="timezone" content="WIB (UTC+7)" />
          <meta name="languages" content="English, Indonesian" />
          <meta name="remote-experience" content="5+ years remote work experience" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://edwin-fernaldy-portfolio.vercel.app/" />
          <meta property="og:title" content="Edwin Fernaldy - Full Stack Developer & Tech Lead | Remote Developer Indonesia" />
          <meta property="og:description" content="Experienced Full Stack Developer and Tech Lead from Indonesia specializing in React, Node.js, AI, LLM, and modern web technologies. Available for remote positions worldwide. Proven track record in building scalable applications and leading development teams." />
          <meta property="og:image" content="https://edwin-fernaldy-portfolio.vercel.app/og-image.jpg" />
          <meta property="og:site_name" content="Edwin Fernaldy Portfolio" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="id_ID" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://edwin-fernaldy-portfolio.vercel.app/" />
          <meta property="twitter:title" content="Edwin Fernaldy - Full Stack Developer & Tech Lead | Remote Developer Indonesia" />
          <meta property="twitter:description" content="Experienced Full Stack Developer and Tech Lead from Indonesia specializing in React, Node.js, AI, LLM, and modern web technologies. Available for remote positions worldwide." />
          <meta property="twitter:image" content="https://edwin-fernaldy-portfolio.vercel.app/twitter-image.jpg" />
          <meta property="twitter:creator" content="@edwinfernaldy" />
          <meta property="twitter:site" content="@edwinfernaldy" />
          
          {/* LinkedIn Specific */}
          <meta property="linkedin:title" content="Edwin Fernaldy - Full Stack Developer & Tech Lead | Remote Developer Indonesia" />
          <meta property="linkedin:description" content="Experienced Full Stack Developer and Tech Lead from Indonesia specializing in React, Node.js, AI, LLM, and modern web technologies. Available for remote positions worldwide." />
          <meta property="linkedin:image" content="https://edwin-fernaldy-portfolio.vercel.app/linkedin-image.jpg" />
          
          {/* Technical SEO */}
          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://edwin-fernaldy-portfolio.vercel.app/" />
          
          {/* Alternative Language Versions */}
          <link rel="alternate" href="https://edwin-fernaldy-portfolio.vercel.app/" hreflang="en" />
          <link rel="alternate" href="https://edwin-fernaldy-portfolio.vercel.app/id" hreflang="id" />
          <link rel="alternate" href="https://edwin-fernaldy-portfolio.vercel.app/" hreflang="x-default" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* DNS Prefetch for Performance */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />
          
          {/* Preconnect for Performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bebas+Neue&family=Righteous&display=swap"
            rel="stylesheet"
          />
          
          {/* Structured Data for Job Search */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Edwin Fernaldy",
                "jobTitle": "Full Stack Developer & Tech Lead",
                "description": "Experienced Full Stack Developer and Tech Lead from Indonesia specializing in React, Node.js, AI, LLM, and modern web technologies",
                "url": "https://edwin-fernaldy-portfolio.vercel.app/",
                "image": "https://edwin-fernaldy-portfolio.vercel.app/profile-image.jpg",
                "email": "edwin.fernaldy@gmail.com",
                "telephone": "+62-823-1101-6325",
                "sameAs": [
                  "https://linkedin.com/in/edwinfernaldy",
                  "https://github.com/edwinfernaldy",
                  "https://twitter.com/edwinfernaldy",
                  "https://medium.com/@edwinfernaldy"
                ],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance/Remote",
                  "url": "https://edwin-fernaldy-portfolio.vercel.app/"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "ID",
                  "addressRegion": "Indonesia",
                  "addressLocality": "Jakarta"
                },
                "knowsAbout": [
                  "Tech Leadership",
                  "Team Management",
                  "React.js",
                  "Node.js",
                  "JavaScript",
                  "TypeScript",
                  "Full Stack Development",
                  "Frontend Development",
                  "Web Development",
                  "Remote Work",
                  "Project Management",
                  "Code Review",
                  "Architecture Design",
                  "AI",
                  "LLM",
                  "Machine Learning",
                  "Data Science",
                  "Data Analysis",
                  "Data Visualization",
                  "Data Engineering",
                  "Data Modeling",
                  "Data Warehousing",
                  "Data Pipelines",
                  "Data Integration",
                  "Data Governance"
                ],
                "availableFor": "Remote Work",
                "nationality": "Indonesian",
                "alumniOf": {
                  "@type": "CollegeOrUniversity",
                  "name": "BINUS University of Indonesia"
                },
                "hasOccupation": [
                  {
                    "@type": "Occupation",
                    "name": "Tech Lead",
                    "description": "Leading development teams and technical projects"
                  },
                  {
                    "@type": "Occupation",
                    "name": "Full Stack Developer",
                    "description": "Developing complete web applications"
                  },
                  {
                    "@type": "Occupation",
                    "name": "AI Developer",
                    "description": "Developing AI and machine learning solutions"
                  }
                ],
                "award": [
                  "Top Remote Developer 2023",
                  "Best Tech Lead Award",
                  "Excellence in AI Development"
                ],
                "knowsLanguage": [
                  {
                    "@type": "Language",
                    "name": "English",
                    "proficiencyLevel": "Fluent"
                  },
                  {
                    "@type": "Language",
                    "name": "Indonesian",
                    "proficiencyLevel": "Native"
                  }
                ],
                "workExample": [
                  {
                    "@type": "CreativeWork",
                    "name": "AI-Powered Web Application",
                    "url": "https://edwin-fernaldy-portfolio.vercel.app/"
                  },
                  {
                    "@type": "CreativeWork",
                    "name": "Full Stack E-commerce Platform",
                    "url": "https://edwin-fernaldy-portfolio.vercel.app/"
                  }
                ],
                "publisher": {
                  "@type": "Organization",
                  "name": "Edwin Fernaldy Portfolio"
                },
                "dateModified": "2024-01-15",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://edwin-fernaldy-portfolio.vercel.app/"
                }
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
