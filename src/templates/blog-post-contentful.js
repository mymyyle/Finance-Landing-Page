import React from 'react'
// import { Link, graphql } from 'gatsby'
// import get from 'lodash/get'
// import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
// import readingTime from 'reading-time'

import Layout from '../components/layout'
// import Hero from '../components/hero'
// import * as styles from './blog-post.module.css'

class BlogPostContentFulTemplate extends React.Component {
  render() {
    // const post = get(this.props, 'data.contentfulBlogPost')
    // const previous = get(this.props, 'data.previous')
    // const next = get(this.props, 'data.next')
    // const plainTextDescription = documentToPlainTextString(
    //   JSON.parse(post.description.raw)
    // )
    // const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw))
    // const { minutes: timeToRead } = readingTime(plainTextBody)
    return (
      <></>
      //  <Layout location={this.props.location}>
      //     <Seo
      //       title={post.title}
      //       description={plainTextDescription}
      //       image={`http:${post.heroImage.resize.src}`}
      //     />
      //     <Hero
      //       image={post.heroImage?.gatsbyImageData}
      //       title={post.title}
      //       content={post.description}
      //     />
      //     <div className={styles.container}>
      //       <span className={styles.meta}>
      //         {post.author?.name} &middot;{' '}
      //         <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
      //         {timeToRead} minute read
      //       </span>
      //       <div className={styles.article}>
      //         <div className={styles.body}>
      //           {post.body?.raw && renderRichText(post.body)}
      //         </div>
      //         <Tags tags={post.tags} />
      //         {(previous || next) && (
      //           <nav>
      //             <ul className={styles.articleNavigation}>
      //               {previous && (
      //                 <li>
      //                   <Link to={`/blog/${previous.slug}`} rel="prev">
      //                     ← {previous.title}
      //                   </Link>
      //                 </li>
      //               )}
      //               {next && (
      //                 <li>
      //                   <Link to={`/blog/${next.slug}`} rel="next">
      //                     {next.title} →
      //                   </Link>
      //                 </li>
      //               )}
      //             </ul>
      //           </nav>
      //         )}
      //       </div>
      //     </div>
      // </Layout>
    )
  }
}

export default BlogPostContentFulTemplate

// export const pageQuery = graphql`
//   query BlogPostContentfulBySlug(
//     $slug: String!
//     $previousPostSlug: String
//     $nextPostSlug: String
//   ) {
//     allContentfulIntro {
//       edges {
//         node {
//           title
//           description
//           id
//         }
//       }
//     }
//   }
// `
