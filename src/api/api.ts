export async function submitContact(formData: { name: string; email: string; phone?: string; company?: string; division: string; message: string }) {
  try {
    const response = await fetch('/api/submitContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(formData),
    });
    
    const json = await response.json();
    if (!json.success) {
      throw new Error(json.error || "Failed to submit contact form.");
    }
    return json;
  } catch (error: any) {
    throw new Error(error.message || "Could not reach the server");
  }
}
