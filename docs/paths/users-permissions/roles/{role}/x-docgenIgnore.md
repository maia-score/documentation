---
id:
slug: users-permissions-roles-role-x-docgen-ignore
title:
sidebar_label: X-DOCGENIGNORE
description:
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
  <Method color="#6b55b2">X-DOCGENIGNORE</Method><Path>{unescape(escape('/users-permissions/roles/{role}'))}</Path>
</Url>

>

### Code Snippets

<!-- prettier-ignore-start -->

<Tabs defaultValue="" values={[
  { label: "Shell + Curl", value: "shell" },
]}>

<!-- prettier-ignore-end -->

<TabItem value="shell">

```shell
curl --request X-DOCGENIGNORE \
  --url https://maiascore.com/users-permissions/roles/%7Brole%7D \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'
```

</TabItem>

```shell title="Shell + Curl"
curl --request X-DOCGENIGNORE \
  --url https://maiascore.com/users-permissions/roles/%7Brole%7D \
  --header 'Authorization: Bearer REPLACE_BEARER_TOKEN'
```

</Tabs>

## Responses
