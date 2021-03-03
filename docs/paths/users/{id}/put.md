---
id: updateUser
slug: users-id-put
title: Update an user
sidebar_label: PUT
description: Update an existing user
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
  <Method color="#6b55b2">PUT</Method><Path>{unescape(escape('/users/{id}'))}</Path>
</Url>

> Update an existing user

## Parameters

| name |  in  |  type  | required | description |
| ---- | :--: | :----: | :------: | ----------- |
| `id` | path | string |   true   | User Id     |

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
  "reports": ["maia-c6cbaa76ba8f", "maia-3b5a054c593d", "maia-f95a8582aea5"]
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
  <reports>maia-c6cbaa76ba8f</reports>
  <reports>maia-3b5a054c593d</reports>
  <reports>maia-f95a8582aea5</reports>
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
  "reports": ["maia-c6cbaa76ba8f", "maia-3b5a054c593d", "maia-f95a8582aea5"]
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
curl --request PUT \
  --url https://maiascore.com/users/%7Bid%7D \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data '{"username":"jlopez","email":"test@mydomain.com","provider":"local","password":"********","resetPasswordToken":"26f425d6-9269-442b-89ed-e35ba63bf9c0","confirmationToken":"eddc394a-8664-406e-852f-7a35d84a7fb7","confirmed":false,"blocked":false,"role":"string","reports":["maia-c6cbaa76ba8f","maia-3b5a054c593d","maia-f95a8582aea5"]}'
```

</TabItem>

<TabItem value="node">

```javascript
const http = require("https");

const options = {
  method: "PUT",
  hostname: "maiascore.com",
  port: null,
  path: "/users/%7Bid%7D",
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
    reports: ["maia-c6cbaa76ba8f", "maia-3b5a054c593d", "maia-f95a8582aea5"],
  })
);
req.end();
```

</TabItem>

<TabItem value="python">

```python
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

payload = "{\"username\":\"jlopez\",\"email\":\"test@mydomain.com\",\"provider\":\"local\",\"password\":\"********\",\"resetPasswordToken\":\"26f425d6-9269-442b-89ed-e35ba63bf9c0\",\"confirmationToken\":\"eddc394a-8664-406e-852f-7a35d84a7fb7\",\"confirmed\":false,\"blocked\":false,\"role\":\"string\",\"reports\":[\"maia-c6cbaa76ba8f\",\"maia-3b5a054c593d\",\"maia-f95a8582aea5\"]}"

headers = {
    'content-type': "application/x-www-form-urlencoded",
    'Authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("PUT", "/users/%7Bid%7D", payload, headers)

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
  CURLOPT_URL => "https://maiascore.com/users/%7Bid%7D",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => "{\"username\":\"jlopez\",\"email\":\"test@mydomain.com\",\"provider\":\"local\",\"password\":\"********\",\"resetPasswordToken\":\"26f425d6-9269-442b-89ed-e35ba63bf9c0\",\"confirmationToken\":\"eddc394a-8664-406e-852f-7a35d84a7fb7\",\"confirmed\":false,\"blocked\":false,\"role\":\"string\",\"reports\":[\"maia-c6cbaa76ba8f\",\"maia-3b5a054c593d\",\"maia-f95a8582aea5\"]}",
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
curl --request PUT \
  --url https://maiascore.com/users/%7Bid%7D \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data '{"username":"jlopez","email":"test@mydomain.com","provider":"local","password":"********","resetPasswordToken":"26f425d6-9269-442b-89ed-e35ba63bf9c0","confirmationToken":"eddc394a-8664-406e-852f-7a35d84a7fb7","confirmed":false,"blocked":false,"role":"string","reports":["maia-c6cbaa76ba8f","maia-3b5a054c593d","maia-f95a8582aea5"]}'
```

```javascript title="Node + Native"
const http = require("https");

const options = {
  method: "PUT",
  hostname: "maiascore.com",
  port: null,
  path: "/users/%7Bid%7D",
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
    reports: ["maia-c6cbaa76ba8f", "maia-3b5a054c593d", "maia-f95a8582aea5"],
  })
);
req.end();
```

```python title="Python + Python3"
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

payload = "{\"username\":\"jlopez\",\"email\":\"test@mydomain.com\",\"provider\":\"local\",\"password\":\"********\",\"resetPasswordToken\":\"26f425d6-9269-442b-89ed-e35ba63bf9c0\",\"confirmationToken\":\"eddc394a-8664-406e-852f-7a35d84a7fb7\",\"confirmed\":false,\"blocked\":false,\"role\":\"string\",\"reports\":[\"maia-c6cbaa76ba8f\",\"maia-3b5a054c593d\",\"maia-f95a8582aea5\"]}"

headers = {
    'content-type': "application/x-www-form-urlencoded",
    'Authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("PUT", "/users/%7Bid%7D", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php title="Php + Curl"
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://maiascore.com/users/%7Bid%7D",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => "{\"username\":\"jlopez\",\"email\":\"test@mydomain.com\",\"provider\":\"local\",\"password\":\"********\",\"resetPasswordToken\":\"26f425d6-9269-442b-89ed-e35ba63bf9c0\",\"confirmationToken\":\"eddc394a-8664-406e-852f-7a35d84a7fb7\",\"confirmed\":false,\"blocked\":false,\"role\":\"string\",\"reports\":[\"maia-c6cbaa76ba8f\",\"maia-3b5a054c593d\",\"maia-f95a8582aea5\"]}",
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

Update successful

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
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
    "permissions": ["string"],
    "users": ["string"]
  },
  "reports": [
    {
      "id": "d0fea516-9b58-4cf5-ab86-bb7e983e4b0c",
      "uuid": "maia-8439cc39b63b",
      "referenceId": "96234",
      "type": "reference",
      "processed": true,
      "users_permissions_user": "jlopez",
      "score": 98,
      "scoreProbability": 96,
      "scoreConfidence": 99,
      "scoreVersion": "v-ab86"
    }
  ],
  "created_by": "admin",
  "updated_by": "admin"
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
