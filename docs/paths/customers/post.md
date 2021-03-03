---
id: createCustomer
slug: customers-post
title: Create a new customers record.
sidebar_label: POST
description: This method is used to register a new customer into database. These information will be used for AI agent trainig.
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
  <Method color="#6b55b2">POST</Method><Path>{unescape(escape('/customers'))}</Path>
</Url>

> This method is used to register a new customer into database. These information will be used for AI agent trainig.

## Request Body

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
  { label: "application/xml", value: "application/xml" },
  { label: "application/x-www-form-urlencoded", value: "application/x-www-form-urlencoded" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json
{
  "uuid": "string",
  "referenceId": "string",
  "dateOfBirth": "2019-08-24",
  "addressStreet": "string",
  "addressNeighborhood": "string",
  "addressCity": "string",
  "addressState": "string",
  "addressCountry": "string",
  "gender": "male",
  "maritalStatus": "single"
}
```

</TabItem>

<TabItem value="application/xml">

```xml
<?xml version="1.0" encoding="utf-8"?>
<item>
  <uuid>string</uuid>
  <referenceId>string</referenceId>
  <dateOfBirth>2019-08-24</dateOfBirth>
  <addressStreet>string</addressStreet>
  <addressNeighborhood>string</addressNeighborhood>
  <addressCity>string</addressCity>
  <addressState>string</addressState>
  <addressCountry>string</addressCountry>
  <gender>male</gender>
  <maritalStatus>single</maritalStatus>
</item>
```

</TabItem>

<TabItem value="application/x-www-form-urlencoded">

```json
{
  "uuid": "string",
  "referenceId": "string",
  "dateOfBirth": "2019-08-24",
  "addressStreet": "string",
  "addressNeighborhood": "string",
  "addressCity": "string",
  "addressState": "string",
  "addressCountry": "string",
  "gender": "male",
  "maritalStatus": "single"
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
  --url https://maiascore.com/customers \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data '{"uuid":"string","referenceId":"string","dateOfBirth":"2019-08-24","addressStreet":"string","addressNeighborhood":"string","addressCity":"string","addressState":"string","addressCountry":"string","gender":"male","maritalStatus":"single"}'
```

</TabItem>

```shell title="Shell + Curl"
curl --request POST \
  --url https://maiascore.com/customers \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data '{"uuid":"string","referenceId":"string","dateOfBirth":"2019-08-24","addressStreet":"string","addressNeighborhood":"string","addressCity":"string","addressState":"string","addressCountry":"string","gender":"male","maritalStatus":"single"}'
```

</Tabs>

## Responses

---

### 200

Retrieve customers document(s)

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
  "dateOfBirth": "2019-08-24",
  "addressStreet": "string",
  "addressNeighborhood": "string",
  "addressCity": "string",
  "addressState": "string",
  "addressCountry": "string",
  "gender": "male",
  "maritalStatus": "single",
  "published_at": "2019-08-24T14:15:22Z",
  "created_by": "string",
  "updated_by": "string"
}
```

</TabItem>

</Tabs>

---

### 403

**Forbidden**: this operation requeris authentication

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "code": 500,
  "message": "Error - Server Error"
}
```

</TabItem>

</Tabs>

---

### 404

**Not found**: the resource was not found

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "code": 500,
  "message": "Error - Server Error"
}
```

</TabItem>

</Tabs>

---

### default

**Unexpected error**

<!-- prettier-ignore-start -->

<Tabs defaultValue="application/json" values={[
  { label: "application/json", value: "application/json" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="application/json">

```json title="Example response"
{
  "code": 500,
  "message": "Error - Server Error"
}
```

</TabItem>

</Tabs>
