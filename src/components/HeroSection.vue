<script setup lang="ts">
import { ref, onMounted } from 'vue'

const videoLoaded = ref(false)

const handleVideoLoad = () => {
  videoLoaded.value = true
}

const scrollToServices = () => {
  const servicesSection = document.getElementById('services')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Add fade-in animation to hero content
  const heroContent = document.querySelector('.hero-content')
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add('visible')
    }, 500)
  }
})
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-video-container">
      <video
        autoplay
        muted
        loop
        playsinline
        class="hero-video"
        :class="{ 'loaded': videoLoaded }"
        @loadeddata="handleVideoLoad"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/showreel.mp4" type="video/mp4">
        <!-- Fallback image for browsers that don't support video -->
        <img src="/images/hero-poster.jpg" alt="Gaming background" />
      </video>
      <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content fade-in">
      <div class="container">
        <div class="hero-text">
          <h1>Crafting Digital Worlds</h1>
          <p class="hero-subtitle">
            We create immersive gaming experiences and cutting-edge digital solutions 
            that push the boundaries of entertainment and technology.
          </p>
          <div class="hero-actions">
            <button class="btn-primary" @click="scrollToServices">
              Services
            </button>
            <button class="btn-secondary" @click="scrollToContact">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator" @click="scrollToServices">
      <div class="scroll-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span>Scroll Down</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 85vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease;
}

.hero-video.loaded {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(58, 89, 209, 0.8) 0%,
    rgba(58, 89, 209, 0.6) 50%,
    rgba(0, 217, 255, 0.4) 100%
  );
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease;
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-text h1 {
  margin-bottom: var(--spacing-md);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-actions button {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: 1.1rem;
  min-width: 160px;
}

.btn-secondary {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.scroll-indicator {
  position: absolute;
  bottom: var(--spacing-lg);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: bounce 2s infinite;
}

.scroll-indicator:hover {
  color: white;
  transform: translateX(-50%) translateY(-5px);
}

.scroll-arrow {
  margin-bottom: var(--spacing-xs);
}

.scroll-indicator span {
  font-size: 0.9rem;
  font-weight: var(--font-weight-medium);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 80vh;
    min-height: 500px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-actions button {
    min-width: 200px;
  }
  
  .scroll-indicator {
    bottom: var(--spacing-md);
  }
}

@media (max-width: 480px) {
  .hero-subtitle {
    padding: 0 var(--spacing-sm);
  }
}
</style>