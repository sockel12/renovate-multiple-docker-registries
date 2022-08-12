module.exports = {
  "gitAuthor": "myName <myEmail>",
  "token": "myToken",
  "repositories": ["sockel12/renovate-multiple-docker-registries"],
  // "dryRun": "full",
  "recreateClosed": true,
  "includeForks": true,
  "registryAliases": {
    "quay.io": "my-quay-mirror.registry.com",
    "index.docker.io": "my-docker-mirror.registry.com"
  },
  "kubernetes": {
    "fileMatch": ["kubernetes-config.yaml"]
  },
  "ansible": {
    "fileMatch":["ansible.yaml"]
  },
  "packageRules": [
    {
      "matchDatasources": [
          "docker"
      ],
      "defaultRegistryUrls": [
          "https://my-docker-mirror.registry.com"
      ]
    }
  ]
}
