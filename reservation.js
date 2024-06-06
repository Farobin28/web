async function submitOrder() {
  try {
    const eventName = document.getElementById("event").value;
    const ticketQuantity = parseInt(document.getElementById("tickets").value);

    const response = await fetch("http://localhost:3000/api/ticket/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: eventName,
        number: ticketQuantity,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit order");
    }

    console.log("Order submitted successfully");

    window.location.href = "success-order.html";
  } catch (error) {
    console.error(error.message);
  }
}

document
  .getElementById("order-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    submitOrder();
  });
