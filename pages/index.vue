<template>
  <div>
    <the-hero />
    <strategy-section />
    <services-section />
    <greenline-section />
    <newsletter-section />
    <logo-cloud />
    <testimonial-section />
    <the-footer />
  </div>
</template>

<script>
import TheHero from '../components/TheHero'
import TheFooter from '../components/TheFooter'
import LogoCloud from '../components/LogoCloud'
import StrategySection from '../components/StrategySection'
import ServicesSection from '../components/ServicesSection'
import NewsletterSection from '../components/NewsletterSection'
import GreenlineSection from '../components/GreenlineSection'
import TestimonialSection from '../components/TestimonialSection'

export default {
  components: {
    TheHero,
    TheFooter,
    LogoCloud,
    StrategySection,
    NewsletterSection,
    GreenlineSection,
    ServicesSection,
    TestimonialSection
  }
}
</script>
