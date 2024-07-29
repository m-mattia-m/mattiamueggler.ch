# Deployment

## values.yaml

```yaml
deployment:
  namespace: adsf
  name: adfd
  image:
    repository: ghcr.io/mattiamueggler/test-api
    tag: 1.0.0
    replicaCount: 1
    pullPolicy: always
    resources:
      requests:
        cpu: 200m
        memory: 300Mi
secret:
  nuxtDriveUploadUrl: https://kdrive.infomaniak.com/app/collaborate/590672/7efd85c4-76d2-4109-9cfd-e896b3346e1e
  nuxtDriveDownloadUrl: https://kdrive.infomaniak.com/app/share/590672/c90c9156-d7ce-4560-8950-32c22f28c652
  nuxtDrivePassword: MySafePassword123!
```