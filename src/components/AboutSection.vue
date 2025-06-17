<script setup lang="ts">
const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '10+', label: 'Years Experience' },
  { number: '25+', label: 'Happy Clients' },
  { number: '17', label: 'Countries With Activations' }
]
</script>

<template>
  <section id="about" class="section section-alternate">
    <div class="container">
      <div class="about-content">
        <div class="about-text fade-in">
          <h2>About Untether Games</h2>
          <p class="lead">
            We have been creating experiences that blur the boundaries between real and digital since 2012.
          </p>
          <p>
            Founded with a vision to push the boundaries of interactive entertainment, Untether Games 
            has grown into a creative powerhouse that combines cutting-edge technology with artistic 
            excellence. Our diverse team brings together expertise in game development, software 
            engineering, and emerging technologies like Mixed Reality.
          </p>
          <p>
            From mobile games that delight millions to enterprise software solutions that transform 
            businesses, we approach every project with the same commitment to quality, innovation, 
            and user experience. We believe that great technology should not only function flawlessly 
            but also create meaningful connections between people and digital experiences.
          </p>
          <p>
            Our collaborative approach ensures that every client becomes a true partner in the 
            creative process, resulting in solutions that exceed expectations and deliver lasting value.
          </p>
        </div>
        
        <div class="about-stats fade-in">
          <div class="stats-grid">
            <div 
              v-for="(stat, index) in stats" 
              :key="stat.label"
              class="stat-item"
              :style="{ 'animation-delay': `${index * 0.1}s` }"
            >
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="team-values fade-in">
        <h3>Our Values</h3>
        <div class="values-grid">
          <div class="value-item">
            <div class="value-icon">🚀</div>
            <h4>Innovation</h4>
            <p>We embrace new technologies and push creative boundaries to deliver cutting-edge solutions.</p>
          </div>
          <div class="value-item">
            <div class="value-icon">🤝</div>
            <h4>Collaboration</h4>
            <p>We work closely with our clients and team members to achieve shared goals and exceed expectations.</p>
          </div>
          <div class="value-item">
            <div class="value-icon">⭐</div>
            <h4>Excellence</h4>
            <p>We maintain the highest standards in everything we do, from code quality to client service.</p>
          </div>
          <div class="value-item">
            <div class="value-icon">🎯</div>
            <h4>Impact</h4>
            <p>We create solutions that make a meaningful difference in our clients' success and users' lives.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
  align-items: start;
}

.about-text h2 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-lg);
}

.lead {
  font-size: 1.2rem;
  color: var(--text-primary);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-lg);
  line-height: 1.5;
}

.about-text p {
  margin-bottom: var(--spacing-md);
  line-height: 1.7;
}

.about-stats {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 20px var(--shadow);
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: var(--font-weight-medium);
}

.team-values h3 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: var(--spacing-xl);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.value-item {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  text-align: center;
  box-shadow: 0 4px 20px var(--shadow);
  transition: transform 0.3s ease;
}

.value-item:hover {
  transform: translateY(-4px);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-md);
}

.value-item h4 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.value-item p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .value-item {
    padding: var(--spacing-lg);
  }
}
</style>