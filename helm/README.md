# Deployment


# Apply

1. Setup `helm install mattiamueggler-ch . --create-namespace` or `helm install mattiamueggler-ch .`
2. new Rollout `helm upgrade mattiamueggler-ch . --values ./values.yaml`

## values.yaml

You must create the `values.yaml` file and past this example config in this file.

```yaml
namespace:
  name: mattiamueggler-ch
deployment:
  name: www-website
  replicaCount: 1
  image:
    repository: ghcr.io/m-mattia-m/mattiamueggler-ch
    tag: v0.0.1
    pullPolicy: Always
  resources:
    requests:
      cpu: 150m
      memory: 180Mi
    limits:
      cpu: 200m
      memory: 300Mi
secret: # values must be base64 encoded
  name: nuxt-secrets
  nuxtDriveUploadUrl: base64encodedvalue
  nuxtDriveDownloadUrl: base64encodedvalue
  nuxtDrivePassword: base64encodedvalue
service:
  name: www-website
ingress:
  name: www-website
  host: www.mattiamueggler.ch
```