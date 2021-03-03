---
id: createTraining
slug: trainings-post
title: Create a new training
sidebar_label: POST
description: Manually lanch or schedule a training task. Please note that training will be queued and run asynchronously.
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
  <Method color="#6b55b2">POST</Method><Path>{unescape(escape('/trainings'))}</Path>
</Url>

> Manually lanch or schedule a training task. Please note that training will be queued and run asynchronously.

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
  "uuid": "string",
  "accuracy": 0,
  "precission": 0,
  "mae": 0,
  "rmse": 0,
  "binaryPath": "string",
  "version": "string",
  "meta": "string"
}
```

</TabItem>

<TabItem value="application/xml">

```xml
<?xml version="1.0" encoding="utf-8"?>
<item>
  <uuid>string</uuid>
  <accuracy>0</accuracy>
  <precission>0</precission>
  <mae>0</mae>
  <rmse>0</rmse>
  <binaryPath>string</binaryPath>
  <version>string</version>
  <meta>string</meta>
</item>
```

</TabItem>

<TabItem value="application/x-www-form-urlencoded">

```json
{
  "uuid": "string",
  "accuracy": 0,
  "precission": 0,
  "mae": 0,
  "rmse": 0,
  "binaryPath": "string",
  "version": "string",
  "meta": "string"
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
  --url https://maiascore.com/trainings \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data '{"uuid":"string","accuracy":0,"precission":0,"mae":0,"rmse":0,"binaryPath":"string","version":"string","meta":"string"}'
```

</TabItem>

<TabItem value="node">

```javascript
const http = require("https");

const options = {
  method: "POST",
  hostname: "maiascore.com",
  port: null,
  path: "/trainings",
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
    uuid: "string",
    accuracy: 0,
    precission: 0,
    mae: 0,
    rmse: 0,
    binaryPath: "string",
    version: "string",
    meta: "string",
  })
);
req.end();
```

</TabItem>

<TabItem value="python">

```python
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

payload = "{\"uuid\":\"string\",\"accuracy\":0,\"precission\":0,\"mae\":0,\"rmse\":0,\"binaryPath\":\"string\",\"version\":\"string\",\"meta\":\"string\"}"

headers = {
    'content-type': "application/x-www-form-urlencoded",
    'Authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("POST", "/trainings", payload, headers)

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
  CURLOPT_URL => "https://maiascore.com/trainings",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"uuid\":\"string\",\"accuracy\":0,\"precission\":0,\"mae\":0,\"rmse\":0,\"binaryPath\":\"string\",\"version\":\"string\",\"meta\":\"string\"}",
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
  --url https://maiascore.com/trainings \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data '{"uuid":"string","accuracy":0,"precission":0,"mae":0,"rmse":0,"binaryPath":"string","version":"string","meta":"string"}'
```

```javascript title="Node + Native"
const http = require("https");

const options = {
  method: "POST",
  hostname: "maiascore.com",
  port: null,
  path: "/trainings",
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
    uuid: "string",
    accuracy: 0,
    precission: 0,
    mae: 0,
    rmse: 0,
    binaryPath: "string",
    version: "string",
    meta: "string",
  })
);
req.end();
```

```python title="Python + Python3"
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

payload = "{\"uuid\":\"string\",\"accuracy\":0,\"precission\":0,\"mae\":0,\"rmse\":0,\"binaryPath\":\"string\",\"version\":\"string\",\"meta\":\"string\"}"

headers = {
    'content-type': "application/x-www-form-urlencoded",
    'Authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("POST", "/trainings", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php title="Php + Curl"
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://maiascore.com/trainings",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"uuid\":\"string\",\"accuracy\":0,\"precission\":0,\"mae\":0,\"rmse\":0,\"binaryPath\":\"string\",\"version\":\"string\",\"meta\":\"string\"}",
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

Retrieve trainings document(s)

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "id": "string",
  "uuid": "string",
  "accuracy": 0,
  "precission": 0,
  "mae": 0,
  "rmse": 0,
  "binaryPath": "string",
  "version": "string",
  "meta": "string",
  "published_at": "2019-08-24T14:15:22Z",
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
