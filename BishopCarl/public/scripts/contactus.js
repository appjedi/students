const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

const sendContact = async () => {
    const data = {
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }
    console.log(data);
    // const resp = await fetch("https://linkedin.com");
    // const text = await resp.text();
    const resp = await fetch("/contactus",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        });
    const json = await resp.json();
    console.log("RESPONSE FROM SERVER:", json);
}
//pageLoad();

/*
Python
JavaScript / TypeScript
SQL
ETL: Extract, Transform, Load
Mongo or NoSQL
HTML
CSS
Java

email from node.
web scrapper.
stripe.
*/