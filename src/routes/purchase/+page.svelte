<script>
  import PageImage from '$lib/PageImage.svelte';
  import Lettrine from '$lib/Lettrine.svelte';
  
  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    newsletter: false,
    amount: '10',
    intentions: ''
  };
  
  let showThankYou = false;
  let isSubmitting = false;
  let errorMessage = '';
  let submissionId = null;
  
  async function handleSubmit(event) {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    isSubmitting = true;
    errorMessage = '';
    
    try {
      // Send data to PHP backend
      const response = await fetch('/api/submit-commission.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        submissionId = result.id;
        showThankYou = true;
        
        // Reset form data
        formData = {
          firstName: '',
          lastName: '',
          email: '',
          newsletter: false,
          amount: '10',
          intentions: ''
        };
        
      } else {
        errorMessage = result.error || 'An error occurred while submitting your request.';
      }
    } catch (error) {
      console.error('Submission error:', error);
      errorMessage = 'Network error. Please check your connection and try again.';
    } finally {
      isSubmitting = false;
    }
  }
  
  function resetForm() {
    showThankYou = false;
    submissionId = null;
    errorMessage = '';
  }
</script>

<svelte:head>
  <title>Purchase - Office of the Dead</title>
</svelte:head>

<section class="purchase-hero">
  <PageImage src="/visuals/requiem.jpeg" alt="Souls" />
</section>

<section class="book-purchase">
  <h1>BOOK PURCHASE</h1>
  
  <div class="book-content">
    <div class="book-description">
      <p><Lettrine letter="C" color="#DC143C" />anticum Salomonis is pleased to announce the publication of our latest book, a pocket-sized (4 × 6 in) edition of <strong>the traditional Roman Office of the Dead</strong> with facing English translation.</p>
      
      <p>The text of the Office is that found in the <strong>1568 Roman breviary</strong>, incorporating the additional orations—a second one for the day of burial; those for the three-day, week, and month anniversaries; for a deceased supreme pontiff; for a deceased bishop; two for a deceased priest; for a man deceased; for a woman deceased; and for deceased brethren, kinsfolk, and benefactors—included in the 1614 Roman ritual.</p>
      
      <p>The rubrics are in English, and the English translation of the psalms, as is the case in our Compline book, is that of the original Douay-Rheims version, with modernized spelling.</p>
      
      <p>The booklet also features a <strong>meditation on the mystical meaning of the Office of the Dead</strong> borrowed from Dom Prosper Guéranger's <em>Liturgical Year</em>, Englished by the Benedictines of Stanbrook, the text of the usual indulgenced prayers said before and after an Office, and a section at the back for the user to record his prayer intentions.</p>
    </div>
    
    <div class="amazon-links">
      <h3>IT IS AVAILABLE IN SOFTCOVER ON THE</h3>
      <div class="store-links">
        <a href="https://www.amazon.com/dp/B0DFGPNVHB" class="store-link us" target="_blank">US</a>
        <a href="https://www.amazon.co.uk/dp/B0DFGPNVHB" class="store-link uk" target="_blank">UK</a>
        <a href="https://www.amazon.ca/dp/B0DFGPNVHB" class="store-link canadian" target="_blank">CANADIAN</a>
        <a href="https://www.amazon.es/dp/B0DFGPNVHB" class="store-link spanish" target="_blank">SPANISH</a>
        <a href="https://www.amazon.fr/dp/B0DFGPNVHB" class="store-link french" target="_blank">FRENCH</a>
        <a href="https://www.amazon.it/dp/B0DFGPNVHB" class="store-link italian" target="_blank">ITALIAN</a>
        <a href="https://www.amazon.de/dp/B0DFGPNVHB" class="store-link german" target="_blank">GERMAN</a>
        <a href="https://www.amazon.nl/dp/B0DFGPNVHB" class="store-link dutch" target="_blank">DUTCH</a>
        <a href="https://www.amazon.pl/dp/B0DFGPNVHB" class="store-link polish" target="_blank">POLISH</a>
        <a href="https://www.amazon.se/dp/B0DFGPNVHB" class="store-link swedish" target="_blank">SWEDISH</a>
      </div>
      <h3 class="amazon-stores">AMAZON STORES.</h3>
    </div>
  </div>
</section>

<section class="commission-prayer">
  <h2 class="section-title">COMMISSION PRAYER</h2>
  
  <div class="commission-content">
    <div class="commission-text">
      <p><Lettrine letter="F" color="#DC143C" />or centuries, wealthy Christians, mindful of Christ's teaching that it is easier for a camel to pass through the eye of a needle than for a rich person to enter the kingdom of heaven, sought to work out their salvation with fear and trembling. Unable to fully heed the call to "sell everything and give it to the poor," they established foundations, monasteries, and chantries—endowments to fund Masses and the Office of the Dead for the forgiveness of sins, both known and unknown.</p>
      
      <p>This purgatorial economy not only offered mercy for themselves and their loved ones but also gave rise to hospitals, schools, and orphanages dedicated to praying for their founders' souls. Though modern secularism has diminished these practices, the urgent need for prayer for the dead persists. This initiative revives that sacred tradition by offering stipends for literate laymen to recite the Office, interceding for souls in purgatory.</p>
      
      <div class="stipend-info">
        <p><strong>Stipend:</strong> $10 per Office (or more, as you are able).</p>
        <p><strong>Payment:</strong> You'll receive instructions to send payment directly to the pray-er. We are not providing tax-deductible receipts at this stage.</p>
      </div>
    </div>
    
    <div class="commission-form">
      {#if !showThankYou}
        {#if errorMessage}
          <div class="error-message">
            <strong>Error:</strong> {errorMessage}
          </div>
        {/if}
        
        <form on:submit={handleSubmit}>
          <div class="form-group">
            <label for="firstName">Name <span class="required">(required)</span></label>
            <div class="name-fields">
              <input type="text" id="firstName" bind:value={formData.firstName} placeholder="First Name" required>
              <input type="text" id="lastName" bind:value={formData.lastName} placeholder="Last Name" required>
            </div>
          </div>
          
          <div class="form-group">
            <label for="email">Email <span class="required">(required)</span></label>
            <input type="email" id="email" bind:value={formData.email} required>
          </div>
          
          <div class="form-group checkbox-group">
            <label>
              <input type="checkbox" bind:checked={formData.newsletter}>
              Sign up for news and updates
            </label>
          </div>
          
          <div class="form-group">
            <label for="amount">Amount per Office</label>
            <div class="amount-input">
              <span class="currency">$</span>
              <input type="number" id="amount" bind:value={formData.amount} min="10" placeholder="10" step="1">
            </div>
          </div>
          
          <div class="form-group">
            <label for="intentions">Intentions</label>
            <textarea id="intentions" bind:value={formData.intentions} placeholder="[Name, number of offices]" rows="4"></textarea>
          </div>
          
          <button type="submit" class="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
          </button>
        </form>
      {:else}
        <div class="thank-you-message">
          <h3>Thank You!</h3>
          <p>Your prayer commission request has been submitted successfully!</p>
          {#if submissionId}
            <p class="submission-id">Request ID: <strong>#{submissionId}</strong></p>
          {/if}
          <p>We'll be in touch shortly with payment instructions.</p>
          <div class="thank-you-icon">✓</div>
          
          <button class="new-request-btn" on:click={resetForm}>
            Submit Another Request
          </button>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  section {
    margin-bottom: 30px;
  }

  h1, h2 {
    font-weight: normal;
    text-align: center;
  }

  .section-title {
    color: #DC143C;
    margin: 1.5em 0 1em 0;
  }

  .book-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .book-description {
    margin-bottom: 2em;
  }

  .amazon-links {
    text-align: center;
    margin: 2em 0;
  }

  .amazon-links h3 {
    margin: 1em 0;
    font-weight: bold;
  }

  .store-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 1em 0;
  }

  .store-link {
    background-color: #DC143C;
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .store-link:hover {
    background-color: #B22222;
  }

  .commission-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .stipend-info {
    background-color: #f9f9f9;
    padding: 1em;
    border-left: 4px solid #DC143C;
    margin: 1em 0;
  }

  .stipend-info p {
    margin: 0.5em 0;
  }

  .commission-form {
    background-color: #f9f9f9;
    padding: 2em;
    border-radius: 8px;
  }

  .error-message {
    background-color: #ffebee;
    color: #c62828;
    padding: 1em;
    border-radius: 4px;
    margin-bottom: 1em;
    border-left: 4px solid #c62828;
  }

  .form-group {
    margin-bottom: 1.5em;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5em;
    font-weight: bold;
    color: #333;
  }

  .required {
    color: #DC143C;
    font-weight: normal;
  }

  .name-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  input[type="text"], input[type="email"], input[type="number"], textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-family: 'EB Garamond', serif;
    font-size: 1em;
    box-sizing: border-box;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #DC143C;
  }

  .checkbox-group label {
    display: flex;
    align-items: center;
    font-weight: normal;
  }

  .checkbox-group input[type="checkbox"] {
    width: auto;
    margin-right: 10px;
  }

  .amount-input {
    display: flex;
    align-items: center;
  }

  .currency {
    background-color: #eee;
    padding: 10px;
    border: 2px solid #ddd;
    border-right: none;
    border-radius: 4px 0 0 4px;
    font-weight: bold;
  }

  .amount-input input {
    border-radius: 0 4px 4px 0;
    border-left: none;
  }

  .submit-btn {
    background-color: #DC143C;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 4px;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
  }

  .submit-btn:hover:not(:disabled) {
    background-color: #B22222;
  }

  .submit-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .thank-you-message {
    text-align: center;
    padding: 2em;
  }

  .thank-you-message h3 {
    color: #DC143C;
    margin-bottom: 1em;
  }

  .submission-id {
    background-color: #e8f5e8;
    color: #2e7d32;
    padding: 0.5em;
    border-radius: 4px;
    margin: 1em 0;
    font-family: monospace;
  }

  .thank-you-icon {
    font-size: 4em;
    color: #4caf50;
    margin: 1em 0;
    font-weight: bold;
  }

  .new-request-btn {
    background-color: #666;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 1em;
  }

  .new-request-btn:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    .commission-content {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .name-fields {
      grid-template-columns: 1fr;
    }
    
    .store-links {
      gap: 5px;
    }
    
    .store-link {
      padding: 6px 12px;
      font-size: 0.9em;
    }
  }
</style>
