---
id:
slug: payments-post
title:
sidebar_label:
description: Create a new payments record
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

<Method color="#6b55b2">POST</Method><Path>/payments</Path>

## Request Body

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example request"
{
  "amountDue": 0,
  "amountPaid": 0,
  "dueDate": "2019-08-24",
  "date": "2019-08-24",
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
curl --request POST \
  --url https://mywebsite.io/payments \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/json' \
  --data '{"amountDue":0,"amountPaid":0,"dueDate":"2019-08-24","date":"2019-08-24","published_at":"2019-08-24T14:15:22Z","created_by":"string","updated_by":"string"}'
```

</TabItem>

```shell title="Shell + Curl"
curl --request POST \
  --url https://mywebsite.io/payments \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/json' \
  --data '{"amountDue":0,"amountPaid":0,"dueDate":"2019-08-24","date":"2019-08-24","published_at":"2019-08-24T14:15:22Z","created_by":"string","updated_by":"string"}'
```

</Tabs>

## Responses

---

### 200

Retrieve payments document(s)

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "id": "string",
  "amountDue": 0,
  "amountPaid": 0,
  "dueDate": "2019-08-24",
  "date": "2019-08-24",
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
