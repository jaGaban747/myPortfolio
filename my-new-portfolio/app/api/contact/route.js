export async function POST(request) {
    const { name, email, subject, message } = await request.json();
  
    // Simulate sending an email or saving to a database
    console.log("Form Submission Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  
    // Return a success response
    return new Response(JSON.stringify({ message: "Form submitted successfully!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }