// Paymob Payment Integration for Egypt
// Documentation: https://docs.paymob.com/

const PAYMOB_API_BASE = 'https://accept.paymob.com/api';

// These will be set from environment variables
const PAYMOB_API_KEY = import.meta.env.VITE_PAYMOB_API_KEY || '';
const PAYMOB_INTEGRATION_ID_CARD = import.meta.env.VITE_PAYMOB_INTEGRATION_ID_CARD || '';
const PAYMOB_INTEGRATION_ID_WALLET = import.meta.env.VITE_PAYMOB_INTEGRATION_ID_WALLET || '';
const PAYMOB_IFRAME_ID = import.meta.env.VITE_PAYMOB_IFRAME_ID || '';

export interface PaymobBillingData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  street: string;
  city: string;
  country: string;
  state: string;
  postal_code: string;
  building: string;
  floor: string;
  apartment: string;
}

export interface PaymobOrderItem {
  name: string;
  amount_cents: number;
  quantity: number;
}

// Step 1: Get Authentication Token
export const getAuthToken = async (): Promise<string> => {
  const response = await fetch(`${PAYMOB_API_BASE}/auth/tokens`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: PAYMOB_API_KEY,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to authenticate with Paymob');
  }

  const data = await response.json();
  return data.token;
};

// Step 2: Create Order
export const createOrder = async (
  authToken: string,
  amountCents: number,
  items: PaymobOrderItem[]
): Promise<number> => {
  const response = await fetch(`${PAYMOB_API_BASE}/ecommerce/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      auth_token: authToken,
      delivery_needed: false,
      amount_cents: amountCents,
      currency: 'EGP',
      items: items,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create order');
  }

  const data = await response.json();
  return data.id;
};

// Step 3: Get Payment Key
export const getPaymentKey = async (
  authToken: string,
  orderId: number,
  amountCents: number,
  billingData: PaymobBillingData,
  integrationId: string
): Promise<string> => {
  const response = await fetch(`${PAYMOB_API_BASE}/acceptance/payment_keys`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      auth_token: authToken,
      amount_cents: amountCents,
      expiration: 3600, // 1 hour
      order_id: orderId,
      billing_data: billingData,
      currency: 'EGP',
      integration_id: integrationId,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to get payment key');
  }

  const data = await response.json();
  return data.token;
};

// Main function to initiate card payment
export const initiateCardPayment = async (
  amountEGP: number,
  customerData: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  },
  packageName: string
): Promise<string> => {
  try {
    // Convert EGP to cents (Paymob uses cents)
    const amountCents = Math.round(amountEGP * 100);

    // Split full name
    const nameParts = customerData.fullName.trim().split(' ');
    const firstName = nameParts[0] || 'Customer';
    const lastName = nameParts.slice(1).join(' ') || 'N/A';

    // Step 1: Get auth token
    const authToken = await getAuthToken();

    // Step 2: Create order
    const orderId = await createOrder(authToken, amountCents, [
      {
        name: packageName,
        amount_cents: amountCents,
        quantity: 1,
      },
    ]);

    // Step 3: Get payment key
    const billingData: PaymobBillingData = {
      first_name: firstName,
      last_name: lastName,
      email: customerData.email,
      phone_number: customerData.phone,
      street: customerData.address || 'N/A',
      city: customerData.city || 'Cairo',
      country: 'EG',
      state: 'N/A',
      postal_code: 'N/A',
      building: 'N/A',
      floor: 'N/A',
      apartment: 'N/A',
    };

    const paymentKey = await getPaymentKey(
      authToken,
      orderId,
      amountCents,
      billingData,
      PAYMOB_INTEGRATION_ID_CARD
    );

    // Return the iframe URL for card payment
    return `https://accept.paymob.com/api/acceptance/iframes/${PAYMOB_IFRAME_ID}?payment_token=${paymentKey}`;
  } catch (error) {
    console.error('Paymob payment error:', error);
    throw error;
  }
};

// Main function to initiate wallet payment (Vodafone Cash, etc.)
export const initiateWalletPayment = async (
  amountEGP: number,
  customerData: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  },
  packageName: string,
  walletPhoneNumber: string
): Promise<{ redirect_url?: string; iframe_redirection_url?: string }> => {
  try {
    // Convert EGP to cents
    const amountCents = Math.round(amountEGP * 100);

    // Split full name
    const nameParts = customerData.fullName.trim().split(' ');
    const firstName = nameParts[0] || 'Customer';
    const lastName = nameParts.slice(1).join(' ') || 'N/A';

    // Step 1: Get auth token
    const authToken = await getAuthToken();

    // Step 2: Create order
    const orderId = await createOrder(authToken, amountCents, [
      {
        name: packageName,
        amount_cents: amountCents,
        quantity: 1,
      },
    ]);

    // Step 3: Get payment key for wallet
    const billingData: PaymobBillingData = {
      first_name: firstName,
      last_name: lastName,
      email: customerData.email,
      phone_number: customerData.phone,
      street: customerData.address || 'N/A',
      city: customerData.city || 'Cairo',
      country: 'EG',
      state: 'N/A',
      postal_code: 'N/A',
      building: 'N/A',
      floor: 'N/A',
      apartment: 'N/A',
    };

    const paymentKey = await getPaymentKey(
      authToken,
      orderId,
      amountCents,
      billingData,
      PAYMOB_INTEGRATION_ID_WALLET
    );

    // Step 4: Pay with wallet
    const response = await fetch(`${PAYMOB_API_BASE}/acceptance/payments/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source: {
          identifier: walletPhoneNumber,
          subtype: 'WALLET',
        },
        payment_token: paymentKey,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to initiate wallet payment');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Paymob wallet payment error:', error);
    throw error;
  }
};

// Check if Paymob is configured
export const isPaymobConfigured = (): boolean => {
  return !!(
    PAYMOB_API_KEY &&
    PAYMOB_INTEGRATION_ID_CARD &&
    PAYMOB_IFRAME_ID
  );
};
