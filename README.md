# Nuxt 3 Minimal Starter

Github pages only allows static deployment. That means I can't use a server side application like the Nuxt server/api
to validate my drive-password. On account of having this problem I deployed my application on my Kubernetes cluster. The
GH Pages action would work too but you have to trigger it manually (workflow dispatch). Additionally, you have to point
the DNS record back go GH Pages (CNAME `m-mattia-m.github.io`) instead of to current A record which points to my K8s
cluster.

To redeploy a new version you must change the image version in the `/helm/values.yaml` file and make a new rollout.
([Read this for more: Deploy via Helm](/helm))