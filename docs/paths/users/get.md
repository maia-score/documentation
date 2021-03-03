---
id: getUsers
slug: users-get
title: Retrieve all users
sidebar_label: GET
description: Get a list of registered users.
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
  <Method color="#6b55b2">GET</Method><Path>{unescape(escape('/users'))}</Path>
</Url>

> Get a list of registered users.

## Parameters

| name         |  in   |  type   | required | description                                                          |
| ------------ | :---: | :-----: | :------: | -------------------------------------------------------------------- |
| `_limit`     | query | integer |  false   | Maximum number of results possible                                   |
| `_sort`      | query | string  |  false   | Sort according to a specific field.                                  |
| `_start`     | query | integer |  false   | Skip a specific number of entries (especially useful for pagination) |
| `&#x3D;`     | query | string  |  false   | Get entries that matches exactly your input                          |
| `_ne`        | query | string  |  false   | Get records that are not equals to something                         |
| `_lt`        | query | string  |  false   | Get record that are lower than a value                               |
| `_lte`       | query | string  |  false   | Get records that are lower than or equal to a value                  |
| `_gt`        | query | string  |  false   | Get records that are greater than a value                            |
| `_gte`       | query | string  |  false   | Get records that are greater than or equal a value                   |
| `_contains`  | query | string  |  false   | Get records that contains a value                                    |
| `_containss` | query | string  |  false   | Get records that contains (case sensitive) a value                   |
| `_in`        | query |  array  |  false   | Get records that matches any value in the array of values            |
| `_nin`       | query |  array  |  false   | Get records that doesn&#x27;t match any value in the array of values |

### Code Snippets

<!-- prettier-ignore-start -->

<Tabs defaultValue="" values={[
  { label: "Shell + Curl", value: "shell" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="shell">

```shell
curl --request GET \
  --url 'https://maiascore.com/users?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE' \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'
```

</TabItem>

```shell title="Shell + Curl"
curl --request GET \
  --url 'https://maiascore.com/users?_limit=SOME_INTEGER_VALUE&_sort=SOME_STRING_VALUE&_start=SOME_INTEGER_VALUE&%3D=SOME_STRING_VALUE&_ne=SOME_STRING_VALUE&_lt=SOME_STRING_VALUE&_lte=SOME_STRING_VALUE&_gt=SOME_STRING_VALUE&_gte=SOME_STRING_VALUE&_contains=SOME_STRING_VALUE&_containss=SOME_STRING_VALUE&_in=SOME_ARRAY_VALUE&_nin=SOME_ARRAY_VALUE' \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'
```

</Tabs>

## Responses

---

### 200

OK

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
      "users": ["string"]
    },
    "reports": [
      {
        "id": "d0fea516-9b58-4cf5-ab86-bb7e983e4b0c",
        "uuid": "maia-8439cc39b63b",
        "referenceId": "96234",
        "type": "reference",
        "processed": true,
        "users_permissions_user": "jlopez",
        "score": 98,
        "scoreProbability": 96,
        "scoreConfidence": 99,
        "scoreVersion": "v-ab86"
      }
    ],
    "created_by": "admin",
    "updated_by": "admin"
  }
]
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
