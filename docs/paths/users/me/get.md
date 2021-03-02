---
id:
slug: users-me-get
title:
sidebar_label:
description: Retrieve the logged in user information
---

<!-- prettier-ignore-start -->

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<!-- prettier-ignore-end -->

```console
GET /users/me
```

## Parameters

| name | in  | type | required | description |
| ---- | --- | ---- | -------- | ----------- |

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
    "users": ["string"],
    "created_by": "string",
    "updated_by": "string"
  },
  "reports": [
    {
      "id": "string",
      "uuid": "string",
      "referenceId": "string",
      "type": "reference",
      "processed": true,
      "users_permissions_user": "string",
      "score": 0,
      "scoreProbability": 0,
      "scoreConfidence": 0,
      "scoreVersion": "string",
      "published_at": "string",
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
