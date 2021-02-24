document.addEventListener("DOMContentLoaded", function(event) {
    const form = document.querySelector('form');

    async function login(values) {
        const realm = "Apsky-demo";
        const clientId = "react-app";
        // const loginUri = "http://localhost:8080/auth/realms/" + realm.toLocaleLowerCase() + "/protocol/openid-connect/token";
        const loginUri = "http://localhost:8080/auth/realms/apsky-demo/protocol/openid-connect/auth";

        console.log('loginUri: ', loginUri);

        const data = {
            "client_id": "react-app",
            "username": values.name,
            "password": values.password,
            "grant_type": "password",
            "response_type" : "code"
        };

        console.log('data:', data);

        const result = await fetch(loginUri,{
            method: "POST",
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(data)
        })
            .then(res => console.log(res));

        console.log('result : ', result)
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        const values = {
            name,
            password
        };

        const res = await login(values);

    })
});