<script setup lang="ts">
import { onMounted } from 'vue'
import Navigation from './Navigation.vue'
import FooterSection from './FooterSection.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="legal-page">
    <Navigation />
    <main class="legal-main">
      <div class="container">
        <div class="legal-content">
          <h1>Privacy Policy for Untether</h1>
          <div class="last-updated">Last updated: January 2025</div>
          
          <div class="content-section">
            <section>
              <h2>1. Introduction</h2>
              <p>
                Welcome to Untether. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2>2. Data We Collect</h2>
              <p>
                We do not collect any personal data from our visitors. When you visit our website, you can browse without having to provide any personal information.
              </p>
            </section>

            <section>
              <h2>3. Use of Cookies and Tracking</h2>
              <p>
                Our website does not use cookies or any form of tracking technologies that collect personal information about visitors.
              </p>
            </section>

            <section>
              <h2>4. Third-Party Links</h2>
              <p>
                Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
              </p>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We have put in place suitable security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. However, as we do not collect personal data, the risk to your personal data is minimal.
              </p>
            </section>

            <section>
              <h2>6. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, such as the right to request access, correction, erasure, or transfer of your personal data. Since we do not collect any personal data, these rights may not be applicable.
              </p>
            </section>

            <section>
              <h2>7. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
              </p>
            </section>

            <section>
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at <a href="mailto:hello@untether.group">hello@untether.group</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
    <FooterSection />
  </div>
</template>

<style scoped>
.legal-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.legal-main {
  flex: 1;
  padding: var(--spacing-2xl) 0;
  background-color: var(--background-secondary);
  margin-top: 70px; /* Account for fixed navigation */
}

.legal-content {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 20px var(--shadow);
}

.legal-content h1 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.last-updated {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--border);
}

.content-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.content-section section {
  margin-bottom: var(--spacing-lg);
}

.content-section h2 {
  color: var(--text-primary);
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-xs);
  border-bottom: 2px solid var(--primary-color);
}

.content-section p {
  margin-bottom: var(--spacing-md);
  line-height: 1.7;
  color: var(--text-secondary);
}

.content-section a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
}

.content-section a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .legal-content {
    padding: var(--spacing-lg);
  }
  
  .legal-main {
    margin-top: 60px;
  }
  
  .content-section h2 {
    font-size: 1.3rem;
  }
}
</style>