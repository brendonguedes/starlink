import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 431,
  site: "starlink",
  domains: ["starlink.deco.site"],
});