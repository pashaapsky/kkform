document.addEventListener("DOMContentLoaded", function (event) {
    const form = document.querySelector('form');

    async function login(values) {
        const realm = "Apsky-demo";
        const clientId = "react-app";
        // const loginUri = "http://localhost:8080/auth/realms/" + realm.toLocaleLowerCase() + "/protocol/openid-connect/token";
        const loginUri = "http://localhost:8080/auth/realms/apsky-demo/protocol/openid-connect/token";

        console.log('loginUri: ', loginUri);

        // const data = {
        //     client_id: "react-app",
        //     grant_type: "password",
        //     username: values.name,
        //     password: values.password
        // };

        // let data = new FormData(form);
        // data.append("client_id", "react-app");
        // data.append("grant_type", "password");

        let data = new URLSearchParams({
            client_id: "react-app",
            grant_type: "password",
            username: values.name,
            password: values.password
        });

        console.log('data:', data);

        try {
            const response = await fetch(loginUri, {
                method: "POST",
                // mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    // 'Content-Type': 'application/json;charset=utf-8',
                    //     // 'Access-Control-Allow-Origin': '*',
                    //     // 'Access-Control-Allow-Headers': '*'
                },
                body: data
            });

            let result = await response.json();
            console.log('result:', result);
        } catch (e) {
            console.log(e.message);
            console.log(e);
        }

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

        console.log('res:', res);
    })
});