import { UniqueLoader } from '@/components/ui/UniqueLoader'

export default function Loading() {
  return (
    <UniqueLoader
      variant="fullscreen"
      title="KodeToMates"
      tag="ROUTER:PAGE_SUSPENSE"
    />
  )
}
