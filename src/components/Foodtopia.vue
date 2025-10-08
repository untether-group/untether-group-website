<script setup lang="ts">
import { ref } from 'vue'
import Navigation from './Navigation.vue'
import FooterSection from './FooterSection.vue'

const gameUrl = '/foodtopia/'
const hasLoaded = ref(false)
const hasError = ref(false)

const handleLoad = () => {
  hasLoaded.value = true
}

const handleError = () => {
  hasError.value = true
}
</script>

<template>
  <div class="foodtopia-page">
    <Navigation />

    <main>
      <section class="hero fade-in">
        <div class="container">
          <h1>Foodtopia</h1>
          <p>Explore our latest interactive experience built with Godot, playable right in your browser.</p>
        </div>
      </section>

      <section class="game-section fade-in">
        <div class="container">
          <div class="game-container" role="presentation">
            <iframe
              :src="gameUrl"
              title="Foodtopia game"
              @load="handleLoad"
              @error="handleError"
              allow="autoplay; fullscreen"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer"
            ></iframe>
          </div>

          <p v-if="!hasLoaded && !hasError" class="status">Loading Foodtopia…</p>
          <p v-if="hasError" class="status error">
            We couldn’t load the game. Ensure the Godot HTML5 export is copied into <code>public/foodtopia</code>.
          </p>
        </div>
      </section>
    </main>

    <FooterSection />
  </div>
</template>

<style scoped>
.foodtopia-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--background, #f8f9ff);
}

main {
  flex: 1;
  padding-top: 5rem;
}

.hero {
  padding: clamp(4rem, 8vw, 6rem) 0 2rem;
  text-align: center;
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1rem;
  color: var(--text-primary, #1b1f3b);
}

.hero p {
  max-width: 60ch;
  margin: 0 auto;
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text-secondary, rgba(27, 31, 59, 0.75));
}

.game-section {
  padding: 1rem 0 4rem;
}

.container {
  width: min(1100px, 92vw);
  margin: 0 auto;
}

.game-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #0c0f1f;
  border-radius: 1rem;
  box-shadow: 0 20px 60px rgba(12, 15, 31, 0.35);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background: #000;
}

.status {
  margin-top: 1.5rem;
  font-size: 1rem;
  color: var(--text-secondary, rgba(27, 31, 59, 0.75));
  text-align: center;
}

.status.error {
  color: #d24;
  font-weight: 600;
}

@media (max-width: 768px) {
  main {
    padding-top: 4.5rem;
  }

  .game-container {
    border-radius: 0.75rem;
  }
}
</style>
