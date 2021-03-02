---
id:
slug: trainings-id-put
title:
sidebar_label:
description: Update a single trainings record
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

<Method color="#6b55b2">PUT</Method><Path>/trainings/{id}</Path>

## Parameters

| name |  in  |  type  | required | description |
| ---- | :--: | :----: | :------: | ----------- |
| `id` | path | string |   true   |             |

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

### Code Snippets

<!-- prettier-ignore-start -->

<Tabs defaultValue="" values={[
  { label: "Shell + Curl", value: "shell" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="shell">

```shell
curl --request PUT \
  --url https://mywebsite.io/trainings/%7Bid%7D \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/json' \
  --data '{"uuid":"string","accuracy":0,"precission":0,"mae":0,"rmse":0,"binaryPath":"string","version":"string","meta":"string","published_at":"2019-08-24T14:15:22Z","created_by":"string","updated_by":"string"}'
```

</TabItem>

```shell title="Shell + Curl"
curl --request PUT \
  --url https://mywebsite.io/trainings/%7Bid%7D \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/json' \
  --data '{"uuid":"string","accuracy":0,"precission":0,"mae":0,"rmse":0,"binaryPath":"string","version":"string","meta":"string","published_at":"2019-08-24T14:15:22Z","created_by":"string","updated_by":"string"}'
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
