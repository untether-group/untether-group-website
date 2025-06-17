<script setup lang="ts">
import { ref } from 'vue'

interface Service {
  title: string
  description: string
  icon: string
  features: string[]
}

const services: Service[] = [
  {
    title: 'Software Development',
    description: 'Custom software solutions built with cutting-edge technologies and industry best practices.',
    icon: '💻',
    features: ['Full-stack Development', 'API Integration', 'Database Design', 'Quality Assurance']
  },
  {
    title: 'Mobile Games',
    description: 'Engaging mobile gaming experiences designed for iOS and Android platforms.',
    icon: '📱',
    features: ['Cross-platform Development', 'In-app Purchases', 'Social Features', 'Performance Optimization']
  },
  {
    title: 'Web Applications',
    description: 'Modern, responsive web applications that deliver exceptional user experiences.',
    icon: '🌐',
    features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Integration']
  },
  {
    title: 'Game Development',
    description: 'Immersive gaming experiences across multiple platforms with stunning visuals and gameplay.',
    icon: '🎮',
    features: ['2D/3D Game Development', 'Multiplayer Systems', 'Game Physics', 'Asset Creation']
  },
  {
    title: 'Mixed Reality',
    description: 'Revolutionary AR/VR experiences that blend digital and physical worlds seamlessly.',
    icon: '🥽',
    features: ['AR Applications', 'VR Experiences', '3D Modeling', 'Spatial Computing']
  },
  {
    title: 'Interactive Hardware',
    description: 'Bespoke sensors and electronics to bring exhibition and shows to life.',
    icon: '⚡',
    features: ['Custom Sensors', 'Interactive Installations', 'IoT Integration', 'Real-time Data Processing']
  }
]

const selectedService = ref<Service | null>(null)

const selectService = (service: Service) => {
  selectedService.value = selectedService.value === service ? null : service
}
</script>

<template>
  <section id="services" class="section">
    <div class="container">
      <div class="section-header fade-in">
        <h2>Our Services</h2>
        <p>We specialise in creating innovative digital solutions that push the boundaries of technology and entertainment.</p>
      </div>
      
      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          class="service-card fade-in"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
          @click="selectService(service)"
          :class="{ 'active': selectedService === service }"
        >
          <div class="service-icon">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          
          <div class="service-features" v-if="selectedService === service">
            <h4>Key Features:</h4>
            <ul>
              <li v-for="feature in service.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.section-header h2 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
}

.section-header p {
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
}

.service-card {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 20px var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::before,
.service-card.active::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px var(--shadow-hover);
}

.service-card.active {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(58, 89, 209, 0.2);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  display: block;
}

.service-card h3 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.service-card p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.service-features {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border);
  animation: slideDown 0.3s ease;
}

.service-features h4 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
  font-size: 1rem;
}

.service-features ul {
  list-style: none;
  padding: 0;
}

.service-features li {
  padding: var(--spacing-xs) 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: var(--spacing-md);
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-color);
  font-weight: bold;
}

.service-cta {
  margin-top: var(--spacing-md);
  color: var(--primary-color);
  font-weight: var(--font-weight-medium);
  font-size: 0.9rem;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .service-card {
    padding: var(--spacing-lg);
  }
}
</style>