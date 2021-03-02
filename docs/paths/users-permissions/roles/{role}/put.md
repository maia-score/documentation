---
id:
slug: users-permissions-roles-role-put
title:
sidebar_label:
description: Update a role
---

<!-- prettier-ignore-start -->

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<!-- prettier-ignore-end -->

```console
PUT /users-permissions/roles/{role}
```

## Parameters

| name | in   | type   | required | description |
| ---- | ---- | ------ | -------- | ----------- |
| role | path | string | true     |             |

## Request Body

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example request"
{
  "name": "string",
  "description": "string",
  "type": "string",
  "permissions": ["string"],
  "users": ["string"],
  "created_by": "string",
  "updated_by": "string"
}
```

</TabItem>

</Tabs>

## Responses

---

### 200

response

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
      "created_by": "string",
      "updated_by": "string"
    }
  ],
  "users": [
    {
      "id": "string",
      "username": "string",
      "email": "string",
      "provider": "string",
      "password": "string",
      "resetPasswordToken": "string",
      "confirmationToken": "string",
      "confirmed": true,
      "blocked": true,
      "role": "string",
      "reports": ["string"],
      "created_by": "string",
      "updated_by": "string"
    }
  ]
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