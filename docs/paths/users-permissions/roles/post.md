---
id: createUserPermissionsRoles
slug: users-permissions-roles-post
title:
sidebar_label: POST
description: Create a new role
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
  <Method color="#6b55b2">POST</Method><Path>{unescape(escape('/users-permissions/roles'))}</Path>
</Url>

> Create a new role

## Request Body

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json
{
  "name": "string",
  "description": "string",
  "type": "string",
  "permissions": ["string"],
  "users": ["string"]
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
  --url https://maiascore.com/users-permissions/roles \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/json' \
  --data '{"name":"string","description":"string","type":"string","permissions":["string"],"users":["string"]}'
```

</TabItem>

<TabItem value="node">

```javascript
const http = require("https");

const options = {
  method: "POST",
  hostname: "maiascore.com",
  port: null,
  path: "/users-permissions/roles",
  headers: {
    "content-type": "application/json",
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
    name: "string",
    description: "string",
    type: "string",
    permissions: ["string"],
    users: ["string"],
  })
);
req.end();
```

</TabItem>

<TabItem value="python">

```python
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

payload = "{\"name\":\"string\",\"description\":\"string\",\"type\":\"string\",\"permissions\":[\"string\"],\"users\":[\"string\"]}"

headers = {
    'content-type': "application/json",
    'Authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("POST", "/users-permissions/roles", payload, headers)

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
  CURLOPT_URL => "https://maiascore.com/users-permissions/roles",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"name\":\"string\",\"description\":\"string\",\"type\":\"string\",\"permissions\":[\"string\"],\"users\":[\"string\"]}",
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer REPLACE_BEARER_TOKEN",
    "content-type: application/json"
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
  --url https://maiascore.com/users-permissions/roles \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/json' \
  --data '{"name":"string","description":"string","type":"string","permissions":["string"],"users":["string"]}'
```

```javascript title="Node + Native"
const http = require("https");

const options = {
  method: "POST",
  hostname: "maiascore.com",
  port: null,
  path: "/users-permissions/roles",
  headers: {
    "content-type": "application/json",
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
    name: "string",
    description: "string",
    type: "string",
    permissions: ["string"],
    users: ["string"],
  })
);
req.end();
```

```python title="Python + Python3"
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

payload = "{\"name\":\"string\",\"description\":\"string\",\"type\":\"string\",\"permissions\":[\"string\"],\"users\":[\"string\"]}"

headers = {
    'content-type': "application/json",
    'Authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("POST", "/users-permissions/roles", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php title="Php + Curl"
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://maiascore.com/users-permissions/roles",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"name\":\"string\",\"description\":\"string\",\"type\":\"string\",\"permissions\":[\"string\"],\"users\":[\"string\"]}",
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer REPLACE_BEARER_TOKEN",
    "content-type: application/json"
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

OK

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
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
  "users": [
    {
      "id": "string",
      "username": "string",
      "email": "string",
      "provider": "string",
      "confirmed": false,
      "blocked": false,
      "role": {},
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
  ],
  "created_by": "string",
  "updated_by": "string"
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
