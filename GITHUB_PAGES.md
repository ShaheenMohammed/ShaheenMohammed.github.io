# GitHub Pages Handoff — shaheenmohammed.dev

This project is configured for the public repository [`ShaheenMohammed/ShaheenMohammed.github.io`](https://github.com/ShaheenMohammed/ShaheenMohammed.github.io). The repository’s `main` branch is the deployment source and the included workflow builds the Vite project before publishing the static contents of `dist/public`. A custom GitHub Actions workflow is the appropriate publishing route for Vite because the site requires a build step. [1] [2]

> **Important:** The workflow and the `CNAME` marker are prepared in this project, but GitHub’s **Pages** custom-domain setting remains authoritative. GitHub requires the custom domain to be added in repository settings; for custom workflows, a `CNAME` file does not create or modify that setting. [1]

## 1. Put this project into the repository

From a local clone of `ShaheenMohammed/ShaheenMohammed.github.io`, replace the old website files with this project’s files, including `.github/workflows/deploy.yml`, `client/public/CNAME`, and `pnpm-lock.yaml`. Keep the repository on the `main` branch. Commit and push your replacement as one change.

| Item | Expected value |
| --- | --- |
| Repository | `ShaheenMohammed/ShaheenMohammed.github.io` |
| Branch | `main` |
| Build command | `pnpm build` |
| Published artifact | `dist/public` |
| Custom domain | `shaheenmohammed.dev` |

## 2. Enable the GitHub Pages workflow

In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source. The next push to `main` will trigger the workflow. You can watch the build and deployment on the repository’s **Actions** tab. [1] [2]

## 3. Assign the custom domain in GitHub

Still in **Settings → Pages**, enter `shaheenmohammed.dev` in **Custom domain** and save it before changing DNS. GitHub recommends verifying the custom domain in advance to reduce takeover risk. [1] [3]

## 4. Configure DNS with your registrar

For the apex domain `shaheenmohammed.dev`, add the four records below. If your registrar supports `ALIAS` or `ANAME`, it can point the apex to `ShaheenMohammed.github.io` instead. GitHub recommends adding the `www` subdomain alongside an apex domain; it can redirect automatically once both are configured. [1] [3]

| Record type | Host / name | Value |
| --- | --- | --- |
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `ShaheenMohammed.github.io` |

Do not use a wildcard DNS record such as `*.shaheenmohammed.dev` for this site. DNS changes may take up to 24 hours to propagate. Once GitHub shows the certificate as available, enable **Enforce HTTPS** in Pages settings. [1]

## 5. Validate the result

After the action completes and DNS has propagated, confirm that both `https://shaheenmohammed.dev` and `https://www.shaheenmohammed.dev` resolve as expected. If the action fails, open its run in the **Actions** tab; the configured workflow reports the failing step directly.

## References

[1]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site "Managing a custom domain for your GitHub Pages site — GitHub Docs"
[2]: https://vite.dev/guide/static-deploy "Deploying a Static Site — Vite"
[3]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages "About custom domains and GitHub Pages — GitHub Docs"
