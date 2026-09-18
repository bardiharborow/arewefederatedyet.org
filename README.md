# arewefederatedyet.org

A static site served by a [Cloudflare Worker with static
assets](https://developers.cloudflare.com/workers/static-assets/).
There is no build step: everything in `public/` is uploaded and served as-is,
and there is no Worker script — the asset server handles every request.

## Layout

```
public/            # what gets served (the assets directory)
  index.html
  404.html         # served for unknown paths
  404.css          # its styles, kept out of line so CSP needs no 'unsafe-inline'
  favicon.svg
  robots.txt
  sitemap.xml
  _headers         # response headers
  _redirects       # redirect rules
  .well-known/
    security.txt   # RFC 9116 security contact
wrangler.jsonc     # Worker config
```

## Local preview

```sh
npm install
npm run dev        # wrangler dev, http://localhost:8787
```

`wrangler dev` reads `assets.directory` from `wrangler.jsonc`, so it serves
`public/` and applies `_headers` and `_redirects` the same way production does.

## Deploy

### From the command line

```sh
npx wrangler login   # once
npm run deploy
```

The first deploy creates the Worker `arewefederatedyet-org`.

To upload a version without releasing it — it gets its own preview URL — run
`npm run versions:upload`.

### From Git

In the Cloudflare dashboard: **Workers & Pages → Create → Workers → Import a
repository**, pick this repository, and use:

- Production branch: `main`
- Build command: *(leave empty)*
- Deploy command: `npx wrangler deploy`

Every push to `main` then deploys to production, and other branches get
preview URLs.

## Custom domain

After the first deploy, add `arewefederatedyet.org` under the Worker's
**Domains & Routes** settings. Cloudflare creates the DNS record if the zone is
on the same account. Add `www.arewefederatedyet.org` too if you want it, and
send it to the apex with a redirect rule on the zone.
