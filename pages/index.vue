<template>
  <div id="app">
    <the-hero @show:login="openLogin" @show:contact="showContact = true" />
    <strategy-section />
    <services-section />
    <greenline-section />
    <newsletter-section />
    <logo-cloud />
    <testimonial-section />
    <the-footer @show:contact="showContact = true" @show:login="openLogin" />

    <login-modal :open="showLogin" @closed="showLogin = false" />
    <contact-modal :open="showContact" @closed="showContact = false" />
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
import LoginModal from '../components/LoginModal'
import ContactModal from '../components/ContactModal'

export default {
  components: {
    TheHero,
    TheFooter,
    LogoCloud,
    StrategySection,
    NewsletterSection,
    GreenlineSection,
    ServicesSection,
    TestimonialSection,
    LoginModal,
    ContactModal
  },

  data() {
    return {
      showLogin: false,
      showContact: false
    }
  },

  computed: {
    buttonValue() {
      if (this.forgotPassword) {
        return 'Reset';
      }
  }
}
</script>
