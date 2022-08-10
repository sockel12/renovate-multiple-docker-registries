module.exports = {
  "gitAuthor": "my_username <my_email>",
  "token": "my_token",
  "repositories": ["sockel12/renovate-multiple-docker-registries"],
  //"dryRun": "full",
  "recreateClosed": true,
  "registryAliases": {
    "quay.io": "my-quay-mirror.registry.com",
    "index.docker.io": "my-docker-mirror.registry.com"
  }
}
