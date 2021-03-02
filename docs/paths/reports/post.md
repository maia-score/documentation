---
id:
slug: reports-post
title:
sidebar_label:
description: Create a new reports record
---

<!-- prettier-ignore-start -->

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<!-- prettier-ignore-end -->

```console
POST /reports
```

## Parameters

| name | in  | type | required | description |
| ---- | --- | ---- | -------- | ----------- |

## Request Body

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example request"
{
  "uuid": "string",
  "referenceId": "string",
  "type": "reference",
  "processed": true,
  "users_permissions_user": "string",
  "score": 0,
  "scoreProbability": 0,
  "scoreConfidence": 0,
  "scoreVersion": "string",
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

Retrieve reports document(s)

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
  "referenceId": "string",
  "type": "reference",
  "processed": true,
  "users_permissions_user": {
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
  },
  "score": 0,
  "scoreProbability": 0,
  "scoreConfidence": 0,
  "scoreVersion": "string",
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
