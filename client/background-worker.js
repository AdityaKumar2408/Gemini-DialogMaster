// background-worker.js
self.addEventListener('message', async (event) => {
    const { prompt, apiKey } = event.data;
  
    try {
      // Perform background processing (e.g., fetching data from the API)
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: prompt,
          apiKey: apiKey
        })
      });
  
      if (response.ok) {
        const responseData = await response.json();
        const parsedData = responseData.bot.trim();
        self.postMessage({ bot: parsedData });
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (error) {
      console.error(error);
      self.postMessage({ error: error.message });
    }
  });
  