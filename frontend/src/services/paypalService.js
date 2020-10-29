import axios from 'axios';

export const addPayPalScript = async (user) => {
  const config = { headers: { Authorization: `Bearer ${user.token}` } };
  const { data: clientId } = await axios.get('/api/config/paypal', config);
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
  script.async = true;
  document.body.appendChild(script);
};
