---
id:
slug: datasources-id-put
title:
sidebar_label:
description: Update a single datasources record
---

<!-- prettier-ignore-start -->

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<!-- prettier-ignore-end -->

```console
PUT /datasources/{id}
```

## Parameters

| name | in   | type   | required | description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     |             |

## Request Body

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example request"
{
  "driver": "mysql",
  "host": "string",
  "username": "string",
  "password": "string",
  "database": "string",
  "port": "string",
  "ssl": true,
  "keyfile": "string",
  "certificate": "string",
  "sslCA": "string",
  "ssh": true,
  "sshHost": "string",
  "sshUsername": "string",
  "sshPassword": "string",
  "sshPort": "string",
  "sshIdentity": "string",
  "sshTunneling": true,
  "published_at": "2019-08-24T14:15:22Z",
  "created_by": "string",
  "updated_by": "string"
}
```

</TabItem>

</Tabs>

## Responses

---

### 200

Retrieve datasources document(s)

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "id": "string",
  "driver": "mysql",
  "host": "string",
  "username": "string",
  "password": "string",
  "database": "string",
  "port": "string",
  "ssl": true,
  "keyfile": "string",
  "certificate": "string",
  "sslCA": "string",
  "ssh": true,
  "sshHost": "string",
  "sshUsername": "string",
  "sshPassword": "string",
  "sshPort": "string",
  "sshIdentity": "string",
  "sshTunneling": true,
  "published_at": "2019-08-24T14:15:22Z"
}
```

</TabItem>

</Tabs>

---

### 403

Forbidden

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "code": 0,
  "message": "string"
}
```

</TabItem>

</Tabs>

---

### 404

Not found

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "code": 0,
  "message": "string"
}
```

</TabItem>

</Tabs>

---

### default

unexpected error

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "code": 0,
  "message": "string"
}
```

</TabItem>

</Tabs>
