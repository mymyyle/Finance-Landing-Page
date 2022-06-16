import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import ArticlePreview from '../components/article-preview'
import Calculator from '../components/calculator'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulIntro.edges')
    const hero = get(this, 'props.data.contentfulHero')

    return (
      <>
        <Navigation />
        <Hero title={hero.title} description={hero.description} />
        <ArticlePreview posts={posts} />
        <Calculator />
        <Footer />
      </>
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
