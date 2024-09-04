import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import stylisRTLPlugin from "stylis-plugin-rtl"


const cache = createCache({
    key:"mui",
    stylisPlugins:[stylisRTLPlugin]
})


export default function RTL({children}) {
  return <CacheProvider value={cache}>{children}</CacheProvider>
}
