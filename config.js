module.exports = {
    "gitAuthor": "my_username <my_email>",
    "token": "my_token",
    "repositories": ["sockel12/renovate-multiple-docker-registries"],
    //"dryRun": "full",
    "recreateClosed": true,
    "packageRules": [
      {
        "matchDatasources": [
          "docker"
        ],
        "matchPackagePrefixes": ["quay.io"],
        "registryUrls": [
          "https://quay.io/"
          //"https://my-quay-mirror.registry.com/"
        ]
      },
      {
        "matchDatasources": [
          "docker"
        ],
        "defaultRegistryUrls": [
          "https://hub.docker.com/r/"
          //"https://my-docker-mirror.registry.com/"
  
        ]
      }
    ]
  }
  