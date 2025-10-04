// src/routes/purchase/+page.server.js
import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    
    const formData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'), 
      email: data.get('email'),
      amount: data.get('amount'),
      intentions: data.get('intentions'),
      newsletter: data.get('newsletter') === 'on'
    };
    
    // Validation
    if (!formData.firstName || !formData.email) {
      return fail(400, {
        error: 'First name and email are required',
        ...formData
      });
    }
    
    // Here you would:
    // - Save to database
    // - Process payment
    // - Send confirmation email
    console.log('Purchase form submitted:', formData);
    
    return {
      success: true,
      message: 'Thank you for your purchase! We will contact you soon.'
    };
  }
};
