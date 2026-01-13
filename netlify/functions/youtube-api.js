exports.handler = async (event, context) => {
  const { httpMethod, queryStringParameters } = event;
  
  if (httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const API_KEY = process.env.VITE_YOUTUBE_API_KEY;
  const { endpoint, ...params } = queryStringParameters;
  
  const baseUrl = 'https://www.googleapis.com/youtube/v3';
  const url = new URL(`${baseUrl}/${endpoint}`);
  
  // Add API key and other parameters
  url.searchParams.append('key', API_KEY);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  try {
    const response = await fetch(url.toString());
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API request failed' }),
    };
  }
};