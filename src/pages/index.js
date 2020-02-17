import React from "react"

import Hero from "../components/hero"
import About from "../components/about"
import Industry1 from "../components/industry1"
import Steps from "../components/steps"
import Why from "../components/why"
import Faq from "../components/faq"

import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

// export default () => (
//     <div>
//       <Hero/>
//       <Steps/>
//       <Background/>
//       <h2>Equipment Loans</h2>
//       <p className="medium">Such wow. Very React.</p>
//       <h3>Equipment Loans</h3>
//       <p>Such wow. Very React.</p>
//       <h4>Equipment Loans</h4>
//       <p>Such wow. Very React.</p>
//     </div>
//   )

  const IndexPage = (props) => (
    <main>
        <Hero/>
        <About/>
        <Steps/>
          <BackgroundImage
              className="background-section"
              fluid={props.data.indexImage.childImageSharp.fluid}
              fadeIn
          >
          <div className="black-overlay"></div>
          </BackgroundImage>
        <Why/>
        <Faq/>
    </main>
  )

  
  
  export default IndexPage;
  
  export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "tow1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;