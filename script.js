function orderProduct(productName) {
    const sender = prompt("Enter Sender Address:");
    if (!sender) return alert("Sender address is required");

    const receiver = prompt("Enter Receiver Address:");
    if (!receiver) return alert("Receiver address is required");

    const description = prompt("Enter Description:");
    if (!description) return alert("Description is required");

    sendOrder(sender, receiver, description, productName);
}

// Called when non-named parcel is ordered
function orderUnknownParcel() {
    const sender = prompt("Enter Sender Address:");
    if (!sender) return alert("Sender address is required");

    const receiver = prompt("Enter Receiver Address:");
    if (!receiver) return alert("Receiver address is required");

    const description = prompt("Enter Description:");
    if (!description) return alert("Description is required");

    sendOrder(sender, receiver, description, "");
}

// Send order to backend
function sendOrder(sender, receiver, description, product) {
    fetch("http://localhost:3000/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            sender: sender,
            receiver: receiver,
            description: description,
            product: product
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(
            "✅ Order Placed!\n\n" +
            "Category: " + data.deliveryType
        );
    })
    .catch(err => {
        console.error(err);
        alert("❌ Backend not running. Start server.js");
    });
}
