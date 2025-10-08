<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}


const scrollToSection = (sectionId: string) => {
  // If we're not on the home page, navigate there first
  if (window.location.pathname !== '/') {
    window.location.href = `/#${sectionId}`
    return
  }
  
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  closeMenu()
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">
        <div class="logo" @click="scrollToSection('hero')">
          <router-link to="/" class="logo-link">
            <span class="logo-text">Untether</span>
          </router-link>
        </div>
        
        <div class="hamburger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div class="nav-menu" :class="{ 'active': isMenuOpen }">
          <a @click="scrollToSection('hero')" class="nav-link">Home</a>
          <a @click="scrollToSection('services')" class="nav-link">Services</a>
          <a @click="scrollToSection('about')" class="nav-link">About</a>
          <a @click="scrollToSection('contact')" class="nav-link">Contact</a>
          <router-link to="/foodtopia" class="nav-link" @click="closeMenu">Foodtopia</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.98);
  border-bottom-color: var(--border);
  box-shadow: 0 2px 20px var(--shadow);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) 0;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-text {
  color: var(--text-primary);
}

.logo-accent {
  color: var(--primary-color);
  margin-left: 0.25rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: var(--spacing-xs);
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: var(--text-primary);
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.nav-menu {
  display: flex;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--text-primary);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-link:hover {
  color: var(--primary-color);
  background-color: rgba(58, 89, 209, 0.1);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    padding: var(--spacing-lg);
    box-shadow: 0 4px 20px var(--shadow);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    border-bottom: 1px solid var(--border);
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-link {
    padding: var(--spacing-sm);
    text-align: center;
    border-bottom: 1px solid var(--border);
  }
  
  .nav-link:last-child {
    border-bottom: none;
  }
}
</style>