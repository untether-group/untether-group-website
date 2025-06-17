<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <span class="logo-text">Untether</span>
          </div>
          <p class="footer-description">
            Crafting digital worlds and innovative solutions that push the boundaries of entertainment and technology.
          </p>
        </div>
        
        <div class="footer-section">
          <h4>Legal</h4>
          <div class="footer-links">
            <router-link to="/privacy-policy" class="footer-link">Privacy Policy</router-link>
            <router-link to="/cookie-policy" class="footer-link">Cookie Policy</router-link>
            <router-link to="/terms-website" class="footer-link">Terms and Conditions Website</router-link>
            <router-link to="/terms-services" class="footer-link">Terms and Conditions Services</router-link>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Address</h4>
          <div class="footer-address">
            <p>Untether Ltd.</p>
            <p>61 Bridge Street</p>
            <p>Kington, HR5 3DJ</p>
            <p>United Kingdom</p>
            <br>
            <p>Registered in England</p>
            <p>Company 06865665</p>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="footer-credits">
          <p>&copy; {{ currentYear }} Untether Ltd. All rights reserved.</p>
          <p class="footer-contact">
            <a href="mailto:hello@untether.group" class="footer-email">hello@untether.group</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--text-primary) 0%, #2A2A2A 100%);
  color: white;
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-xl);
}

.footer-section h4 {
  color: var(--primary-light);
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-bold);
}

.footer-logo {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

.logo-text {
  color: white;
}

.logo-accent {
  color: var(--primary-light);
  margin-left: 0.25rem;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 350px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
  text-decoration: none;
}

.footer-link:hover {
  color: var(--primary-light);
}

.footer-address {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.footer-address p {
  margin-bottom: var(--spacing-xs);
}

.footer-bottom {
  margin-top: var(--spacing-xl);
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin-bottom: var(--spacing-lg);
}

.footer-credits {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.footer-email {
  color: var(--primary-light);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color 0.3s ease;
}

.footer-email:hover {
  color: white;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    text-align: center;
  }
  
  .footer-credits {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }
  
  .footer-description {
    max-width: none;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: var(--spacing-xl) 0 var(--spacing-md);
  }
  
  .footer-links {
    align-items: center;
  }
}
</style>