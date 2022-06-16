import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import Calculator from '../components/calculator'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulIntro.edges')
    const hero = get(this, 'props.data.contentfulHero')

    return (
      <Layout location={this.props.location}>
        <Hero title={hero.title} description={hero.description} />
        <ArticlePreview posts={posts} />
        <Calculator />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulIntro {
      edges {
        node {
          title
          description
          id
        }
      }
    }
    contentfulHero {
      title
      description
    }
  }
`
