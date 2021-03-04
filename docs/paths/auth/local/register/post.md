---
id: registerAuth
slug: auth-local-register-post
title: User Registrarion
sidebar_label: POST
description: Register a new user with the default role.
---

<!-- prettier-ignore-start -->
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"


export const Method = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '6px',
      color: '#fff',
      padding: '0.6rem 1.2rem',
      textTransform: 'uppercase',
      fontWeight: 'bold'
    }}>
    {children}
  </span>
);

export const Path = ({children}) => (
  <span
    style={{
      borderRadius: '6px',
      color: '#fff',
      paddingLeft: '0.8rem',
      textTransform: 'lowercase',
      fontWeight: 'bold',
      fontFamily: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      fontsSize: '1.2rem'
    }}>
    {children}
  </span>
);

export const Url = ({children}) => {
  return (
    <div
      style={{
        marginBottom: '3rem',
        paddingTop: '1rem'
      }}>
      {children}
    </div>
  );
};

<!-- prettier-ignore-end -->

<Url>
  <Method color="#6b55b2">POST</Method><Path>{unescape(escape('/auth/local/register'))}</Path>
</Url>

> Register a new user with the default role.

## Request Body

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
  { label: "application/xml", value: "application/xml" },
  { label: "application/x-www-form-urlencoded", value: "application/x-www-form-urlencoded" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json
{
  "username": "jlopez",
  "email": "test@mydomain.com",
  "provider": "local",
  "password": "********",
  "resetPasswordToken": "26f425d6-9269-442b-89ed-e35ba63bf9c0",
  "confirmationToken": "eddc394a-8664-406e-852f-7a35d84a7fb7",
  "confirmed": false,
  "blocked": false,
  "role": "string",
  "Report": ["maia-c6cbaa76ba8f", "maia-3b5a054c593d", "maia-f95a8582aea5"]
}
```

</TabItem>

<TabItem value="application/xml">

```xml
<?xml version="1.0" encoding="utf-8"?>
<item>
  <username>jlopez</username>
  <email>test@mydomain.com</email>
  <provider>local</provider>
  <password>********</password>
  <resetPasswordToken>26f425d6-9269-442b-89ed-e35ba63bf9c0</resetPasswordToken>
  <confirmationToken>eddc394a-8664-406e-852f-7a35d84a7fb7</confirmationToken>
  <confirmed>false</confirmed>
  <blocked>false</blocked>
  <role>string</role>
  <Report>maia-c6cbaa76ba8f</Report>
  <Report>maia-3b5a054c593d</Report>
  <Report>maia-f95a8582aea5</Report>
</item>
```

</TabItem>

<TabItem value="application/x-www-form-urlencoded">

```json
{
  "username": "jlopez",
  "email": "test@mydomain.com",
  "provider": "local",
  "password": "********",
  "resetPasswordToken": "26f425d6-9269-442b-89ed-e35ba63bf9c0",
  "confirmationToken": "eddc394a-8664-406e-852f-7a35d84a7fb7",
  "confirmed": false,
  "blocked": false,
  "role": "string",
  "Report": ["maia-c6cbaa76ba8f", "maia-3b5a054c593d", "maia-f95a8582aea5"]
}
```

</TabItem>

</Tabs>

### Code Snippets

<!-- prettier-ignore-start -->

<Tabs defaultValue="node" values={[
  { label: "Shell + Curl", value: "shell" },
  { label: "Node + Native", value: "node" },
  { label: "Python + Python3", value: "python" },
  { label: "Php + Curl", value: "php" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="shell">

```shell
curl --request POST \
  --url https://maiascore.com/auth/local/register \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data '{"username":"jlopez","email":"test@mydomain.com","provider":"local","password":"********","resetPasswordToken":"26f425d6-9269-442b-89ed-e35ba63bf9c0","confirmationToken":"eddc394a-8664-406e-852f-7a35d84a7fb7","confirmed":false,"blocked":false,"role":"string","Report":["maia-c6cbaa76ba8f","maia-3b5a054c593d","maia-f95a8582aea5"]}'
```

</TabItem>

<TabItem value="node">

```javascript
const http = require("https");

const options = {
  method: "POST",
  hostname: "maiascore.com",
  port: null,
  path: "/auth/local/register",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    Authorization: "Bearer REPLACE_BEARER_TOKEN",
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(
  JSON.stringify({
    username: "jlopez",
    email: "test@mydomain.com",
    provider: "local",
    password: "********",
    resetPasswordToken: "26f425d6-9269-442b-89ed-e35ba63bf9c0",
    confirmationToken: "eddc394a-8664-406e-852f-7a35d84a7fb7",
    confirmed: false,
    blocked: false,
    role: "string",
    Report: ["maia-c6cbaa76ba8f", "maia-3b5a054c593d", "maia-f95a8582aea5"],
  })
);
req.end();
```

</TabItem>

<TabItem value="python">

```python
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

payload = "{\"username\":\"jlopez\",\"email\":\"test@mydomain.com\",\"provider\":\"local\",\"password\":\"********\",\"resetPasswordToken\":\"26f425d6-9269-442b-89ed-e35ba63bf9c0\",\"confirmationToken\":\"eddc394a-8664-406e-852f-7a35d84a7fb7\",\"confirmed\":false,\"blocked\":false,\"role\":\"string\",\"Report\":[\"maia-c6cbaa76ba8f\",\"maia-3b5a054c593d\",\"maia-f95a8582aea5\"]}"

headers = {
    'content-type': "application/x-www-form-urlencoded",
    'Authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("POST", "/auth/local/register", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

</TabItem>

<TabItem value="php">

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://maiascore.com/auth/local/register",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"username\":\"jlopez\",\"email\":\"test@mydomain.com\",\"provider\":\"local\",\"password\":\"********\",\"resetPasswordToken\":\"26f425d6-9269-442b-89ed-e35ba63bf9c0\",\"confirmationToken\":\"eddc394a-8664-406e-852f-7a35d84a7fb7\",\"confirmed\":false,\"blocked\":false,\"role\":\"string\",\"Report\":[\"maia-c6cbaa76ba8f\",\"maia-3b5a054c593d\",\"maia-f95a8582aea5\"]}",
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer REPLACE_BEARER_TOKEN",
    "content-type: application/x-www-form-urlencoded"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```

</TabItem>

```shell title="Shell + Curl"
curl --request POST \
  --url https://maiascore.com/auth/local/register \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data '{"username":"jlopez","email":"test@mydomain.com","provider":"local","password":"********","resetPasswordToken":"26f425d6-9269-442b-89ed-e35ba63bf9c0","confirmationToken":"eddc394a-8664-406e-852f-7a35d84a7fb7","confirmed":false,"blocked":false,"role":"string","Report":["maia-c6cbaa76ba8f","maia-3b5a054c593d","maia-f95a8582aea5"]}'
```

```javascript title="Node + Native"
const http = require("https");

const options = {
  method: "POST",
  hostname: "maiascore.com",
  port: null,
  path: "/auth/local/register",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    Authorization: "Bearer REPLACE_BEARER_TOKEN",
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(
  JSON.stringify({
    username: "jlopez",
    email: "test@mydomain.com",
    provider: "local",
    password: "********",
    resetPasswordToken: "26f425d6-9269-442b-89ed-e35ba63bf9c0",
    confirmationToken: "eddc394a-8664-406e-852f-7a35d84a7fb7",
    confirmed: false,
    blocked: false,
    role: "string",
    Report: ["maia-c6cbaa76ba8f", "maia-3b5a054c593d", "maia-f95a8582aea5"],
  })
);
req.end();
```

```python title="Python + Python3"
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

payload = "{\"username\":\"jlopez\",\"email\":\"test@mydomain.com\",\"provider\":\"local\",\"password\":\"********\",\"resetPasswordToken\":\"26f425d6-9269-442b-89ed-e35ba63bf9c0\",\"confirmationToken\":\"eddc394a-8664-406e-852f-7a35d84a7fb7\",\"confirmed\":false,\"blocked\":false,\"role\":\"string\",\"Report\":[\"maia-c6cbaa76ba8f\",\"maia-3b5a054c593d\",\"maia-f95a8582aea5\"]}"

headers = {
    'content-type': "application/x-www-form-urlencoded",
    'Authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("POST", "/auth/local/register", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php title="Php + Curl"
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://maiascore.com/auth/local/register",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"username\":\"jlopez\",\"email\":\"test@mydomain.com\",\"provider\":\"local\",\"password\":\"********\",\"resetPasswordToken\":\"26f425d6-9269-442b-89ed-e35ba63bf9c0\",\"confirmationToken\":\"eddc394a-8664-406e-852f-7a35d84a7fb7\",\"confirmed\":false,\"blocked\":false,\"role\":\"string\",\"Report\":[\"maia-c6cbaa76ba8f\",\"maia-3b5a054c593d\",\"maia-f95a8582aea5\"]}",
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer REPLACE_BEARER_TOKEN",
    "content-type: application/x-www-form-urlencoded"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```

</Tabs>

## Responses

---

### 200

Retruns the created User.

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "code": 200,
  "message": "OK",
  "data": {
    "id": "string",
    "username": "string",
    "email": "string",
    "provider": "string",
    "confirmed": false,
    "blocked": false,
    "role": {
      "id": "string",
      "name": "string",
      "description": "string",
      "type": "string",
      "permissions": [
        {
          "id": "string",
          "type": "string",
          "controller": "string",
          "action": "string",
          "enabled": true,
          "policy": "string",
          "role": "string",
          "updated_by": "string"
        }
      ],
      "users": [null],
      "created_by": "string",
      "updated_by": "string"
    },
    "reports": {
      "id": "string",
      "uuid": "string",
      "referenceId": "string",
      "type": "reference",
      "processed": true,
      "score": 0,
      "scoreProbability": 0,
      "scoreConfidence": 0,
      "scoreVersion": "string",
      "published_at": "2019-08-24T14:15:22Z",
      "created_by": "string",
      "updated_by": "string"
    },
    "created_by": "admin",
    "updated_by": "admin"
  }
}
```

</TabItem>

</Tabs>

---

### 403

**Forbidden**: this operation requeris authentication

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "code": 500,
  "message": "Error - Server Error"
}
```

</TabItem>

</Tabs>

---

### 404

**Not found**: the resource was not found

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "code": 500,
  "message": "Error - Server Error"
}
```

</TabItem>

</Tabs>

---

### default

**Unexpected error**

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "code": 500,
  "message": "Error - Server Error"
}
```

</TabItem>

</Tabs>
