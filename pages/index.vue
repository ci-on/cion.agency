<template>
  <div>
    <the-hero />
    <chris-quote />
    <feature-section />
    <services-section />
    <logo-cloud />
    <testimonial-section />
    <the-footer />
  </div>
</template>

<script>
import TheHero from '../components/TheHero'
import TheFooter from '../components/TheFooter'
import LogoCloud from '../components/LogoCloud'
import ChrisQuote from '../components/ChrisQuote'
import ServicesSection from '../components/ServicesSection'
import FeatureSection from '../components/FeatureSection'
import TestimonialSection from '../components/TestimonialSection'

export default {
  components: {
    TheHero,
    TheFooter,
    LogoCloud,
    ChrisQuote,
    FeatureSection,
    ServicesSection,
    TestimonialSection
  }
}
</script>
