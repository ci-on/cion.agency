<template>
  <div>
    <the-hero />
    <chris-quote />
    <feature-section />
    <testimonial-section />
    <the-footer />
  </div>
</template>

<script>
import TheHero from '../components/TheHero'
import TheFooter from '../components/TheFooter'
import ChrisQuote from '../components/ChrisQuote'
import FeatureSection from '../components/FeatureSection'
import TestimonialSection from '../components/TestimonialSection'

export default {
  components: {
    TheHero,
    TheFooter,
    ChrisQuote,
    FeatureSection,
    TestimonialSection
  }
}
</script>
