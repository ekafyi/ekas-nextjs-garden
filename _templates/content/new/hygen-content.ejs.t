---
to: "content/<%= type %>/<%= name %>.mdx"
---
---
title: <%= title %>
date: <%= date %>
<% if (tags.length || noteType.startsWith('TAG_')) { %><% if (noteType.startsWith('TAG_')) { %>
tags:
<%= noteType.startsWith('TAG_') ? `  - ${noteType}` : null %><% tags.forEach(function(tag){ %>
  - <%= tag %><% }); %>
<% } else { %>
tags:<% tags.forEach(function(tag){ %>
  - <%= tag %><% }); %>
<% } %><% } %>
---

<%= message %>
