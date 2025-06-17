<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import Navigation from './Navigation.vue'
import HeroSection from './HeroSection.vue'
import ServicesSection from './ServicesSection.vue'
import AboutSection from './AboutSection.vue'
import ContactSection from './ContactSection.vue'
import FooterSection from './FooterSection.vue'

// Intersection Observer for fade-in animations
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  // Observe all elements with fade-in class
  const elements = document.querySelectorAll('.fade-in')
  elements.forEach((el) => observer?.observe(el))
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div class="home-page">
    <Navigation />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>