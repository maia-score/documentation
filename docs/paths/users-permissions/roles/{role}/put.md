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

<!-- prettier-ignore-end -->

<Method color="#6b55b2">PUT</Method><Path>/users-permissions/roles/{role}</Path>

## Parameters

| name   |  in  |  type  | required | description |
| ------ | :--: | :----: | :------: | ----------- |
| `role` | path | string |   true   |             |

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

### Code Snippets

<!-- prettier-ignore-start -->

<Tabs defaultValue="" values={[
  { label: "Shell + Curl", value: "shell" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="shell">

```shell
curl --request PUT \
  --url https://mywebsite.io/users-permissions/roles/%7Brole%7D \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/json' \
  --data '{"name":"string","description":"string","type":"string","permissions":["string"],"users":["string"],"created_by":"string","updated_by":"string"}'
```

</TabItem>

```shell title="Shell + Curl"
curl --request PUT \
  --url https://mywebsite.io/users-permissions/roles/%7Brole%7D \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/json' \
  --data '{"name":"string","description":"string","type":"string","permissions":["string"],"users":["string"],"created_by":"string","updated_by":"string"}'
```

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
