---
id:
slug: users-permissions-roles-get
title:
sidebar_label:
description: Retrieve all role documents
---

<!-- prettier-ignore-start -->

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<!-- prettier-ignore-end -->

```console
GET /users-permissions/roles
```

## Parameters

| name        | in    | type    | required | description                                                          |
| ----------- | ----- | ------- | -------- | -------------------------------------------------------------------- |
| \_limit     | query | integer | false    | Maximum number of results possible                                   |
| \_sort      | query | string  | false    | Sort according to a specific field.                                  |
| \_start     | query | integer | false    | Skip a specific number of entries (especially useful for pagination) |
| &#x3D;      | query | string  | false    | Get entries that matches exactly your input                          |
| \_ne        | query | string  | false    | Get records that are not equals to something                         |
| \_lt        | query | string  | false    | Get record that are lower than a value                               |
| \_lte       | query | string  | false    | Get records that are lower than or equal to a value                  |
| \_gt        | query | string  | false    | Get records that are greater than a value                            |
| \_gte       | query | string  | false    | Get records that are greater than or equal a value                   |
| \_contains  | query | string  | false    | Get records that contains a value                                    |
| \_containss | query | string  | false    | Get records that contains (case sensitive) a value                   |
| \_in        | query | array   | false    | Get records that matches any value in the array of values            |
| \_nin       | query | array   | false    | Get records that doesn&#x27;t match any value in the array of values |

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
[
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
]
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
