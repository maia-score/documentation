---
id:
slug: users-permissions-roles-role-x-docgen-ignore
title:
sidebar_label: X-DOCGENIGNORE
description:
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
  <Method color="#6b55b2">X-DOCGENIGNORE</Method><Path>{unescape(escape('/users-permissions/roles/{role}'))}</Path>
</Url>

>

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
curl --request X-DOCGENIGNORE \
  --url https://maiascore.com/users-permissions/roles/%7Brole%7D \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'
```

</TabItem>

<TabItem value="node">

```javascript
const http = require("https");

const options = {
  method: "X-DOCGENIGNORE",
  hostname: "maiascore.com",
  port: null,
  path: "/users-permissions/roles/%7Brole%7D",
  headers: {
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

req.end();
```

</TabItem>

<TabItem value="python">

```python
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

headers = { 'Authorization': "Bearer REPLACE_BEARER_TOKEN" }

conn.request("X-DOCGENIGNORE", "/users-permissions/roles/%7Brole%7D", headers=headers)

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
  CURLOPT_URL => "https://maiascore.com/users-permissions/roles/%7Brole%7D",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "X-DOCGENIGNORE",
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer REPLACE_BEARER_TOKEN"
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
curl --request X-DOCGENIGNORE \
  --url https://maiascore.com/users-permissions/roles/%7Brole%7D \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'
```

```javascript title="Node + Native"
const http = require("https");

const options = {
  method: "X-DOCGENIGNORE",
  hostname: "maiascore.com",
  port: null,
  path: "/users-permissions/roles/%7Brole%7D",
  headers: {
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

req.end();
```

```python title="Python + Python3"
import http.client

conn = http.client.HTTPSConnection("maiascore.com")

headers = { 'Authorization': "Bearer REPLACE_BEARER_TOKEN" }

conn.request("X-DOCGENIGNORE", "/users-permissions/roles/%7Brole%7D", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

```php title="Php + Curl"
<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://maiascore.com/users-permissions/roles/%7Brole%7D",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "X-DOCGENIGNORE",
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer REPLACE_BEARER_TOKEN"
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
