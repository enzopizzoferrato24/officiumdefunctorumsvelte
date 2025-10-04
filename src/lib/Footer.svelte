<footer>
  <div class="footer-content">
    <div class="footer-branding">
      <a href="https://sicutincensum.wordpress.com/" class="image-link">
        <img src="/visuals/CS_LOGO_Full_white.png" alt="Canticum Salomonis Logo" class="footer-logo">
      </a>
    </div>
    <div class="footer-links">
      <span>&copy; 2025</span>
      <a href="mailto:canticumsalomonis@gmail.com">Contact</a>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: #000000;
    color: white;
    padding: 30px 20px;
    text-align: center;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-top: 40px;
    margin-bottom: -20px;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .footer-branding {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-logo {
    height: 40px;
    width: auto;
  }

  .footer-brand-name {
    font-size: 1.2em;
    font-weight: bold;
    color: white;
  }

  .footer-links {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-links a:hover {
    color: #ccc;
  }

  @media (max-width: 768px) {
    .footer-branding {
      flex-direction: column;
      gap: 10px;
    }
    
    .footer-links {
      flex-direction: column;
      gap: 10px;
    }
  }
</style>
