---
id: createDatasource
slug: datasources-post
title: Create a new Datasource record
sidebar_label: POST
description: Creates, test and connects a new data source based on the secutiry scheme selected.
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
  <Method color="#6b55b2">POST</Method><Path>{unescape(escape('/datasources'))}</Path>
</Url>

> Creates, test and connects a new data source based on the secutiry scheme selected.

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
  "driver": "mongo",
  "host": "192.0.0.1",
  "username": "dd_user",
  "password": "db_password",
  "database": "mongo",
  "port": "3643",
  "ssl": false,
  "sslKeyfile": "string",
  "sslCertificate": "string",
  "sslCA": "string",
  "ssh": true,
  "sshHost": "string",
  "sshUsername": "string",
  "sshPassword": "string",
  "sshPort": "string",
  "sshIdentity": "string",
  "sshTunneling": true
}
```

</TabItem>

<TabItem value="application/xml">

```xml
<?xml version="1.0" encoding="utf-8"?>
<item>
  <driver>mongo</driver>
  <host>192.0.0.1</host>
  <username>dd_user</username>
  <password>db_password</password>
  <database>mongo</database>
  <port>3643</port>
  <ssl>false</ssl>
  <sslKeyfile>string</sslKeyfile>
  <sslCertificate>string</sslCertificate>
  <sslCA>string</sslCA>
  <ssh>true</ssh>
  <sshHost>string</sshHost>
  <sshUsername>string</sshUsername>
  <sshPassword>string</sshPassword>
  <sshPort>string</sshPort>
  <sshIdentity>string</sshIdentity>
  <sshTunneling>true</sshTunneling>
</item>
```

</TabItem>

<TabItem value="application/x-www-form-urlencoded">

```json
{
  "driver": "mongo",
  "host": "192.0.0.1",
  "username": "dd_user",
  "password": "db_password",
  "database": "mongo",
  "port": "3643",
  "ssl": false,
  "sslKeyfile": "string",
  "sslCertificate": "string",
  "sslCA": "string",
  "ssh": true,
  "sshHost": "string",
  "sshUsername": "string",
  "sshPassword": "string",
  "sshPort": "string",
  "sshIdentity": "string",
  "sshTunneling": true
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
  --url https://maiascore.com/datasources \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data '{"driver":"mongo","host":"192.0.0.1","username":"dd_user","password":"db_password","database":"mongo","port":"3643","ssl":false,"sslKeyfile":"string","sslCertificate":"string","sslCA":"string","ssh":true,"sshHost":"string","sshUsername":"string","sshPassword":"string","sshPort":"string","sshIdentity":"string","sshTunneling":true}'
```

</TabItem>

<TabItem value="node">

```javascript
const http = require("https");

const options = {
  method: "POST",
  hostname: "maiascore.com",
  port: null,
  path: "/datasources",
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
    driver: "mongo",
    host: "192.0.0.1",
    username: "dd_user",
    password: "db_password",
    database: "mongo",
    port: "3643",
    ssl: false,
    sslKeyfile: "string",
    sslCertificate: "string",
    sslCA: "string",
    ssh: true,
    sshHost: "string",
    sshUsername: "string",
    sshPassword: "string",
    sshPort: "string",
    sshIdentity: "string",
    sshTunneling: true,
  })
);
req.end();
```

</TabItem>

<TabItem value="python">

```python
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

payload = "{\"driver\":\"mongo\",\"host\":\"192.0.0.1\",\"username\":\"dd_user\",\"password\":\"db_password\",\"database\":\"mongo\",\"port\":\"3643\",\"ssl\":false,\"sslKeyfile\":\"string\",\"sslCertificate\":\"string\",\"sslCA\":\"string\",\"ssh\":true,\"sshHost\":\"string\",\"sshUsername\":\"string\",\"sshPassword\":\"string\",\"sshPort\":\"string\",\"sshIdentity\":\"string\",\"sshTunneling\":true}"

headers = {
    'content-type': "application/x-www-form-urlencoded",
    'Authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("POST", "/datasources", payload, headers)

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
  CURLOPT_URL => "https://maiascore.com/datasources",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"driver\":\"mongo\",\"host\":\"192.0.0.1\",\"username\":\"dd_user\",\"password\":\"db_password\",\"database\":\"mongo\",\"port\":\"3643\",\"ssl\":false,\"sslKeyfile\":\"string\",\"sslCertificate\":\"string\",\"sslCA\":\"string\",\"ssh\":true,\"sshHost\":\"string\",\"sshUsername\":\"string\",\"sshPassword\":\"string\",\"sshPort\":\"string\",\"sshIdentity\":\"string\",\"sshTunneling\":true}",
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
  --url https://maiascore.com/datasources \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data '{"driver":"mongo","host":"192.0.0.1","username":"dd_user","password":"db_password","database":"mongo","port":"3643","ssl":false,"sslKeyfile":"string","sslCertificate":"string","sslCA":"string","ssh":true,"sshHost":"string","sshUsername":"string","sshPassword":"string","sshPort":"string","sshIdentity":"string","sshTunneling":true}'
```

```javascript title="Node + Native"
const http = require("https");

const options = {
  method: "POST",
  hostname: "maiascore.com",
  port: null,
  path: "/datasources",
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
    driver: "mongo",
    host: "192.0.0.1",
    username: "dd_user",
    password: "db_password",
    database: "mongo",
    port: "3643",
    ssl: false,
    sslKeyfile: "string",
    sslCertificate: "string",
    sslCA: "string",
    ssh: true,
    sshHost: "string",
    sshUsername: "string",
    sshPassword: "string",
    sshPort: "string",
    sshIdentity: "string",
    sshTunneling: true,
  })
);
req.end();
```

```python title="Python + Python3"
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

payload = "{\"driver\":\"mongo\",\"host\":\"192.0.0.1\",\"username\":\"dd_user\",\"password\":\"db_password\",\"database\":\"mongo\",\"port\":\"3643\",\"ssl\":false,\"sslKeyfile\":\"string\",\"sslCertificate\":\"string\",\"sslCA\":\"string\",\"ssh\":true,\"sshHost\":\"string\",\"sshUsername\":\"string\",\"sshPassword\":\"string\",\"sshPort\":\"string\",\"sshIdentity\":\"string\",\"sshTunneling\":true}"

headers = {
    'content-type': "application/x-www-form-urlencoded",
    'Authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("POST", "/datasources", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php title="Php + Curl"
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://maiascore.com/datasources",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"driver\":\"mongo\",\"host\":\"192.0.0.1\",\"username\":\"dd_user\",\"password\":\"db_password\",\"database\":\"mongo\",\"port\":\"3643\",\"ssl\":false,\"sslKeyfile\":\"string\",\"sslCertificate\":\"string\",\"sslCA\":\"string\",\"ssh\":true,\"sshHost\":\"string\",\"sshUsername\":\"string\",\"sshPassword\":\"string\",\"sshPort\":\"string\",\"sshIdentity\":\"string\",\"sshTunneling\":true}",
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

Retreives the created, updated or requested record query for &#x60;Datasource&#x60; into a &#x60;APIResponse&#x60; schema.

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
    "id": "eddc394a",
    "driver": "mongo",
    "host": "192.0.0.1",
    "username": "dd_user",
    "password": "db_password",
    "database": "mongo",
    "port": "3643",
    "ssl": false,
    "sslKeyfile": "string",
    "sslCertificate": "string",
    "sslCA": "string",
    "ssh": true,
    "sshHost": "string",
    "sshUsername": "string",
    "sshPassword": "string",
    "sshPort": "string",
    "sshIdentity": "string",
    "sshTunneling": true,
    "published_at": "2019-08-24T14:15:22Z",
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
