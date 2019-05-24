function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "stash.adeo.no") || shExpMatch(host, "repo.adeo.no") || shExpMatch(host, "vault.adeo.no") || shExpMatch(host, "apiserver.*.nais.io")) {
    return "SOCKS localhost:14122;SOCKS localhost:5000";
  } else if (shExpMatch(host, "aura.adeo.no")) {
    return "SOCKS localhost:5000";
  }

  return "DIRECT";
}