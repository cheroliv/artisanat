import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import DomainFacade from "../components/domain/domain-facade"

const Home = () =>
  <>
    <Hero />
    <Layout>
      <DomainFacade />
    </Layout>
  </>

export default Home