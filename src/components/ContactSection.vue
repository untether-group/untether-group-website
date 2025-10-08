<script setup lang="ts">
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('hello@untether.group')
    alert('Email address copied to clipboard!')
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = 'hello@untether.group'
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    alert('Email address copied to clipboard!')
  }
}

const openEmailClient = () => {
  window.location.href = 'mailto:hello@untether.group?subject=Project Inquiry'
}
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="section-header fade-in">
        <h2>Get In Touch</h2>
        <p>Ready to bring your vision to life? Let's discuss your next project and explore how we can help you achieve your goals.</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info fade-in">
          <h3>Let's Start a Conversation</h3>
          <p>
            Whether you have a specific project in mind or just want to explore possibilities, 
            we're here to help. Reach out to us directly using the contact methods below.
          </p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">📧</div>
              <div class="method-content">
                <h4>Email Us</h4>
                <div class="email-actions">
                  <button @click="copyEmail" class="btn-secondary" title="Copy to clipboard">
                    Copy Email
                  </button>
                  <button @click="openEmailClient" class="btn-primary" title="Open email client">
                    Send Email
                  </button>
                </div>
                <p class="email-address">hello@untether.group</p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">⚡</div>
              <div class="method-content">
                <h4>Quick Response</h4>
                <p>We typically respond to inquiries within 24 hours during business days.</p>
              </div>
            </div>
            
            <div class="contact-method">
              <div class="method-icon">🤝</div>
              <div class="method-content">
                <h4>Free Consultation</h4>
                <p>Schedule a complimentary consultation to discuss your project requirements.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-visual fade-in">
          <div class="contact-card">
            <h4>Ready to Get Started?</h4>
            <p>
              We're excited to learn about your project and discuss how we can help bring your ideas to life. 
              Our team is ready to provide expert guidance and innovative solutions tailored to your needs.
            </p>
            <div class="contact-highlights">
              <div class="highlight-item">
                <span class="highlight-icon">🎯</span>
                <span>Tailored Solutions</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">🚀</span>
                <span>Fast Turnaround</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">💡</span>
                <span>Expert Guidance</span>
              </div>
            </div>
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.contact-info h3 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.contact-info > p {
  margin-bottom: var(--spacing-xl);
  line-height: 1.7;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.contact-method {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.method-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.method-content h4 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.method-content p {
  margin-bottom: 0;
}

.email-actions {
  display: flex;
  gap: var(--spacing-sm);
  margin: var(--spacing-sm) 0;
  flex-wrap: wrap;
}

.email-actions button {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: 0.9rem;
}

.email-address {
  font-weight: var(--font-weight-medium);
  color: var(--primary-color);
  font-size: 0.95rem;
}

.contact-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-card {
  background: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 20px var(--shadow);
  text-align: center;
  width: 100%;
}

.contact-card h4 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
}

.contact-card p {
  margin-bottom: var(--spacing-lg);
  line-height: 1.7;
}

.contact-highlights {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  background-color: var(--background-secondary);
  border-radius: var(--border-radius);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
}

.highlight-icon {
  font-size: 1.2rem;
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
}

@media (max-width: 768px) {
  .email-actions {
    flex-direction: column;
  }
  
  .email-actions button {
    width: 100%;
  }
  
  .contact-card {
    padding: var(--spacing-lg);
  }
}
</style>