---
id:
slug: datasources-id-get
title:
sidebar_label:
description: Find one datasources record
---

<!-- prettier-ignore-start -->

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<!-- prettier-ignore-end -->

```console
GET /datasources/{id}
```

## Parameters

| name | in   | type   | required | description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | string | true     |             |

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
